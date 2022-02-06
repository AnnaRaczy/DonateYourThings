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
    // .matches(/^[aA-zZ\s]+$/, "Name should be one word")
    .required("Name is required"), // one word
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
    .min(2, "Address should be at least 2 characters long")
    .required("Street is required"),
  city: yup
    .string()
    .min(2, "City name should be at least 2 characters long")
    .required("City is required"),
  code: yup.number().max(5),
  hour: yup.number().min(9).max(9),
});

export { schema, schemaLogin, schemaContact, schemaAddress };
