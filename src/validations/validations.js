import * as yup from "yup";
const phoneRegExp = /[6-9]{1}[0-9 ]{9}/;
const emailRegExp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(com|in|gov|ai|org|edu|net)))$/
);

export const schema = yup.object().shape({
  agreeToPrivacyPolicy: yup
    .boolean(true)
    .oneOf([true], "Please accept the privacy policies")
    .required("Please accept the privacy policies"),
  firstName: yup
    .string()
    .matches(/^[aA-zZ]+$/, "Only alphabetic characters allowed")
    .max(20)
    .required("Please enter correct name"),
  lastName: yup
    .string()
    .matches(/^[aA-zZ]+$/, "Only alphabetic characters allowed")
    .max(20)
    .required("Please enter correct last name"),
  email: yup
    .string()
    .email("Please enter correct email")
    .matches(emailRegExp, "Please enter correct email")
    .required("Please enter correct email"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Number should not be more than 10 characters"),
  currentCTC: yup.number().max(70).required("Please enter valid current CTC"),
  linkedin: yup.string().url().required("Please enter valid linkedin URL"),
  message: yup.string().max(250, "Message should not be more than 250 chars"),
});
