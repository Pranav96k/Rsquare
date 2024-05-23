import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRef, useState } from "react";
import jobRoles from "../Utils/jobRole";
import { schema } from "../validations/validatios";
import { boolean } from "yup";

const Careers = () => {
  const [selectedJobRole, setSelectedJobRole] = useState({});
  const [uploadStatus, setUploadStatus] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Function for file upload on google.drive
  const fileInputRef = useRef(null);
  const handleFileUpload = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      console.log("No file selected");
      setUploadStatus("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Uploaded file", response);
      setUploadStatus("File uploaded successfully!");
      let driveId = "";
      if (response.data.file.mimeType === "application/pdf") {
        driveId = "https://drive.google.com/file/d/" + response.data.file.id;
      } else {
        driveId = "https://docs.google.com/document/d/" + response.data.file.id;
      }
      return driveId;
    } catch (error) {
      console.log("Error uploading file", error);
      setUploadStatus("Error uploading file");
    }
  };

  const handleJobRoleChange = (e, setFieldValue) => {
    const jobId = parseInt(e.target.value);
    const selectedRole = jobRoles.find((role) => role.id === jobId);
    setSelectedJobRole(selectedRole);
    setFieldValue("jobRole", selectedRole.role);
  };

  const handleCaptcha = (value) => {
    console.log(value);
    setIsVerified(true);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("clicked submit");
    try {
      const driveId = await handleFileUpload();
      if (driveId === undefined) {
        alert("Please upload a Resume");
      } else if (isVerified) {
        const fullFormData = { ...values, ...selectedJobRole, driveId };

        const response = await axios.post(
          "https://sheet.best/api/sheets/c3d847e7-3712-4a5c-b8df-a5b6474a9ab1",
          fullFormData
        );

        console.log(response);
        // Clear the form
        resetForm();
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-8">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          linkedin: "",
          jobRole: "",
          currentCTC: "",
          noticePeriod: "",
          agreeToPrivacyPolicy: false,
          message: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values, touched }) => (
          <Form className="m-4 p-4">
            <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  Mobile
                </label>
                <Field
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="mobile"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  LinkedIn Profile URL / Resume URL
                </label>
                <Field
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="linkedin"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="jobRole"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  Job Role / Position
                </label>
                <Field
                  as="select"
                  id="jobRole"
                  name="jobRole"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  onChange={(e) => handleJobRoleChange(e, setFieldValue)}
                >
                  <option value="">Select your option</option>
                  {jobRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.role}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="jobRole"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="currentCTC"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  Current CTC (LPA)
                </label>
                <Field
                  type="text"
                  id="currentCTC"
                  name="currentCTC"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="currentCTC"
                  component="p"
                  className="text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="noticePeriod"
                  className="block text-black text-xl font-serif font-semibold mb-1"
                >
                  Notice Period
                </label>
                <Field
                  as="select"
                  id="noticePeriod"
                  name="noticePeriod"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select your option</option>
                  <option value="Immediate">Immediate</option>
                  <option value="15 days">15 days</option>
                  <option value="30 days">30 days</option>
                  <option value="60 days">60 days</option>
                  <option value="90 days">90 days</option>
                </Field>
                <ErrorMessage
                  name="noticePeriod"
                  component="p"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Agree to Privacy Policy */}
            <div className="mb-4 max-w-6xl mx-auto">
              <label className="block text-black text-xl font-serif font-semibold">
                <Field
                  type="checkbox"
                  name="agreeToPrivacyPolicy"
                  className="mr-2"
                />
                I have read and agree to the Privacy Policy.
              </label>
              {console.log(values, touched)}
              {!values.agreeToPrivacyPolicy && touched.agreeToPrivacyPolicy ? (
                <p className="text-red-600">
                  Please agree the privacy policies
                </p>
              ) : null}
            </div>

            {/* Message */}
            <div className="mb-4 max-w-6xl mx-auto">
              <label
                htmlFor="message"
                className="block text-black text-xl font-serif font-semibold mb-1"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-600"
              />
            </div>

            <div className="grid max-w-6xl mx-auto grid-cols-1 gap-4 md:grid-cols-2 m-8 text-black text-xl font-serif font-semibold">
              <div>
                <span className="text-black text-xl font-serif font-semibold m-2">
                  Upload Resume
                </span>
              </div>
              <div className="flex flex-wrap">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".doc,.docx,.pdf"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleFileUpload}
                className="bg-green-200 m-4 p-2 rounded-md shadow-lg"
              >
                Upload
              </button>
              {uploadStatus && (
                <p className="text-violet-600 mb-4">{uploadStatus}</p>
              )}
            </div>
            <div className=" flex justify-center text-center max-w-xl mx-auto mb-6 mt-3 ">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptcha}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md focus:outline-none"
                disabled={isSubmitting || !isVerified}
              >
                Submit
                {console.log(isSubmitting, isVerified)}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Careers;

// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useEffect, useRef, useState } from "react";
// import jobRoles from "../Utils/jobRole";
// import { schema } from "../validations/validatios";

// const Careers = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     linkedin: "",
//     jobRole: "",
//     currentCTC: "",
//     noticePeriod: "",
//     agreeToPrivacyPolicy: false,
//     message: "",
//     driveId: "",
//   });

//   //Function for file upload on google.drive(******************************)
//   const fileInputRef = useRef(null);
//   const handleFileUpload = async () => {
//     const file = fileInputRef.current.files[0];
//     if (!file) {
//       console.log("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Uploaded file", response);
//       // setDriveId(response.data.file.id);
//       if (response.data.file.mimeType === "application/pdf") {
//         setFormData((prevData) => ({
//           ...prevData,
//           driveId: "https://drive.google.com/file/d/" + response.data.file.id,
//         }));
//       } else {
//         setFormData((prevData) => ({
//           ...prevData,
//           driveId:
//             "https://docs.google.com/document/d/" + response.data.file.id,
//         }));
//       }
//     } catch (error) {
//       console.log("Error uploading file", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const val = type === "checkbox" ? checked : value;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: val,
//     }));
//   };

//   const [selectedJobRole, setSelectedJobRole] = useState({});
//   const handleJobRoleChange = (e) => {
//     const jobId = parseInt(e.target.value);
//     const selectedRole = jobRoles.find((role) => role.id === jobId);
//     setSelectedJobRole(selectedRole);
//     setFormData((prevData) => ({
//       ...prevData,
//       jobRole: selectedRole.role,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fullFormData = { ...formData, ...selectedJobRole }; // Combining personal and job role data

//     const isValid = await schema.isValid(fullFormData);
//     // console.log(isValid);
//     if (isValid) {
//       try {
//         await axios
//           .post(
//             "https://sheet.best/api/sheets/c3d847e7-3712-4a5c-b8df-a5b6474a9ab1",
//             fullFormData
//           )
//           .then((response) => {
//             console.log(response);

//             // Clear the form
//             setFormData({
//               firstName: "",
//               lastName: "",
//               email: "",
//               mobile: "",
//               linkedin: "",
//               jobRole: "",
//               currentCTC: "",
//               noticePeriod: "",
//               agreeToPrivacyPolicy: false,
//               message: "",
//             });
//           });
//       } catch (error) {
//         console.log(error.message);
//       }
//     } else {
//       alert("Please fill all the required fields");
//     }
//   };

//   return (
//     <div className="py-8">
//       <Formik

//         validationSchema={schema}
//         onSubmit={(values) => {
//           // same shape as initial values
//           console.log(values);
//         }}
//       >
//         {({ errors, touched }) => (
//           <form className="m-4 p-4">

//             <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label
//                   htmlFor="firstName"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="lastName"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="mobile"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   Mobile
//                 </label>
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="linkedin"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   LinkedIn Profile URL / Resume URL
//                 </label>
//                 <input
//                   type="text"
//                   id="linkedin"
//                   name="linkedin"
//                   value={formData.linkedin}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="jobRole"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   Job Role / Position
//                 </label>
//                 <select
//                   id="jobRole"
//                   name="jobRole"
//                   value={formData.jobRole}
//                   onChange={handleJobRoleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Select your option</option>
//                   {jobRoles.map((role) => (
//                     <option key={role.id} value={role.id}>
//                       {role.role}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label
//                   htmlFor="currentCTC"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   Current CTC (LPA)
//                 </label>
//                 <input
//                   type="text"
//                   id="currentCTC"
//                   name="currentCTC"
//                   value={formData.currentCTC}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="noticePeriod"
//                   className="block text-black text-xl font-serif font-semibold mb-1"
//                 >
//                   Notice Period
//                 </label>
//                 <select
//                   id="noticePeriod"
//                   name="noticePeriod"
//                   value={formData.noticePeriod}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 >
//                   <option value="">Select your option</option>
//                   <option value="Immediate">Immediate</option>
//                   <option value="15 days">15 days</option>
//                   <option value="30 days">30 days</option>
//                   <option value="60 days">60 days</option>
//                   <option value="90 days">90 days</option>
//                 </select>
//               </div>
//             </div>
//             {/* Agree to Privacy Policy */}
//             <div className="mb-4 max-w-6xl mx-auto">
//               <label className="block text-black text-xl font-serif font-semibold">
//                 <input
//                   type="checkbox"
//                   name="agreeToPrivacyPolicy"
//                   checked={formData.agreeToPrivacyPolicy}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 I have read and agree to the Privacy Policy.
//               </label>
//             </div>
//             {/* Message */}
//             <div className="mb-4 max-w-6xl mx-auto">
//               <label
//                 htmlFor="message"
//                 className="block text-black text-xl font-serif font-semibold mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               ></textarea>
//             </div>

//             <div className=" grid  max-w-6xl mx-auto grid-cols-1 gap-4 md:grid-cols-2 m-8 text-black text-xl font-serif font-semibold">
//               <div>
//                 <span className="text-black text-xl font-serif font-semibold m-2">
//                   Upload Resume
//                 </span>
//               </div>
//               <div>
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   accept=".doc,.docx,.pdf"
//                 />
//               </div>
//             </div>
//             <div className="text-center">
//               <button
//                 onClick={handleFileUpload}
//                 className="bg-green-200 m-4 p-2 rounded-md shadow-lg"
//               >
//                 Uplaod
//               </button>
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md focus:outline-none"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Careers;
