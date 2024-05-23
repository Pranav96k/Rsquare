import * as yup from "yup";
const phoneRegExp = /[6-9]{1}[0-9 ]{9}/;

export const schema = yup.object().shape({
  // agreeToPrivacyPolicy: yup.boolean(),
  // firstName: yup
  //   .string()
  //   .matches(/^[a-z]+$/, "Only alphabetic characters allowed")
  //   .max(10)
  //   .required("Please enter correct name"),
  // lastName: yup
  //   .string()
  //   .matches(/^[a-z]+$/, "Only alphabetic characters allowed")
  //   .max(10)
  //   .required("Please enter correct last name"),
  // email: yup.string().email().required("Please enter correct email"),
  // mobile: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  // currentCTC: yup.number().max(70).required("Please enter valid current CTC"),
  // linkedin: yup.string().url().required("Please enter valid linkedin URL"),
  // message: yup.string().max(250, "Message should not be more than 250 chars"),
});
