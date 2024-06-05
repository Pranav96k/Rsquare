import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRef, useState } from "react";
import jobRoles from "../Utils/jobRole";
import { schema } from "../validations/validations";

const Careers = () => {
  const [selectedJobRole, setSelectedJobRole] = useState({});
  const [uploadStatus, setUploadStatus] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  // Function for file upload on google.drive
  const fileInputRef = useRef(null);

  const handleFileUpload = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      setUploadStatus("No file selected");
      return;
    }

    // Correct property name to file.type
    // console.log("File type:", file.type);
    if (
      file.type !== "application/pdf" &&
      file.type !== "application/msword" &&
      file.type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      console.error("Please enter only pdf and docx file");
      setUploadStatus("Please enter only pdf and docx file");
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
      setIsFileUploaded(true);
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
    // console.log(value);
    setIsVerified(true);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // console.log("clicked submit");
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
        fileInputRef.current.value = ""; // Clear the file input field
        setIsVerified(false);
        setIsFileUploaded(false);
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
        validateOnMount={true}
      >
        {({ isSubmitting, setFieldValue, values, touched, isValid }) => (
          <Form className="max-w-5xl mx-auto m-4 mt-0 p-4">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-black font-semibold mb-1"
                >
                  First Name <span className="text-red-500 ">*</span>
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-black  font-semibold mb-1"
                >
                  Last Name <span className="text-red-500 ">*</span>
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-black  font-semibold mb-1"
                >
                  Email <span className="text-red-500 ">*</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-black  font-semibold mb-1"
                >
                  Mobile <span className="text-red-500 ">*</span>
                </label>
                <Field
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="mobile"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-black  font-semibold mb-1"
                >
                  LinkedIn Profile URL <span className="text-red-500 ">*</span>
                </label>
                <Field
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="linkedin"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="jobRole"
                  className="block text-black  font-semibold mb-1"
                >
                  Job Role / Position <span className="text-red-500 ">*</span>
                </label>
                <Field
                  as="select"
                  id="jobRole"
                  name="jobRole"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={selectedJobRole ? selectedJobRole.id : ""}
                  onChange={(e) => handleJobRoleChange(e, setFieldValue)}
                >
                  <option value="">Select job </option>
                  {jobRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.role}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="jobRole"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="currentCTC"
                  className="block text-black  font-semibold mb-1"
                >
                  Current CTC (LPA) <span className="text-red-500 ">*</span>
                </label>
                <Field
                  type="text"
                  id="currentCTC"
                  name="currentCTC"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="currentCTC"
                  component="p"
                  className="text-red-600 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="noticePeriod"
                  className="block text-black  font-semibold mb-1"
                >
                  Notice Period <span className="text-red-500 ">*</span>
                </label>
                <Field
                  as="select"
                  id="noticePeriod"
                  name="noticePeriod"
                  className="w-full py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-md"
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
                  className="text-red-600 text-sm"
                />
              </div>
            </div>

            {/* Agree to Privacy Policy */}
            <div className="mb-4 max-w-6xl mx-auto">
              <label className="block text-black  font-semibold">
                <Field
                  type="checkbox"
                  name="agreeToPrivacyPolicy"
                  className="mr-2"
                />
                I have read and agree to the Privacy Policy.
              </label>
              <ErrorMessage
                name="agreeToPrivacyPolicy"
                component="p"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-4 max-w-6xl mx-auto">
              <label
                htmlFor="message"
                className="block text-black  font-semibold mb-1"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="2"
                className="w-full  py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 m-4 text-black  font-semibold">
              <div>
                <span className="text-black  font-semibold m-2">
                  Upload Resume
                </span>
              </div>
              <div className="flex flex-wrap">
                <input
                  type="file"
                  ref={fileInputRef}
                  disabled={isFileUploaded}
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleFileUpload}
                className={`m-3 p-1 rounded-md shadow-lg ${
                  isValid
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-green-200 cursor-not-allowed"
                }`}
                disabled={!isValid || isFileUploaded}
              >
                Upload
              </button>
              {uploadStatus && (
                <p className="text-red-500 mb-4 text-sm">{uploadStatus}</p>
              )}
            </div>

            <div className=" flex justify-center text-center max-w-md mx-auto mb-6 mt-3 ">
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
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Careers;
