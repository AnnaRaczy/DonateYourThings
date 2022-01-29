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

export { schema, schemaLogin };
