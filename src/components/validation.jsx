import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .required("Name should be at least 2 characters long"),
  email: yup.string().email().required("Email is not correct"),
  password: yup
    .string()
    .min(6)
    .required("Password must have at least 6 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const schemaLogin = yup.object().shape({
  email: yup.string().email().required("Invalid email"),
  password: yup.string().min(6).required("Invalid password"),
});

const schemaContact = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name should be at least 2 characters long")
    .required("Name is required"),
  email: yup
    .string()
    .email("Email is not correct")
    .required("Email is required"),
  message: yup
    .string()
    .min(120)
    .required("Message should have at least 120 characters"),
});

const schemaAddress = yup.object().shape({
  street: yup
    .string()
    .min(2)
    .required("Address should be at least 2 characters long"),
  city: yup
    .string()
    .min(2)
    .required("City name should be at least 2 characters long"),
  code: yup.string().max(7).required("Code is required"),
  phone: yup.number().min(9).required("Phone is required"),
  date: yup.date().required("Date is required"),
  hour: yup.number().positive().min(8).max(18).required("Hour is required."),
  message: yup.string(),
});

export { schema, schemaLogin, schemaContact, schemaAddress };
