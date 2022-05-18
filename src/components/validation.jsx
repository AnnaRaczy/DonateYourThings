import * as yup from "yup";
import "yup-phone";

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
    .min(3, "Must be at least 3 characters long")
    .matches(/^[aA-zZ\s]+$/, "Only characters are allowed")
    .required(),
  city: yup
    .string()
    .min(3, "Must be at least 3 characters long")
    .matches(/^[aA-zZ\s]+$/, "Only characters are allowed")
    .required(),
  code: yup
    .string()
    .matches(/^[0-9]{2}\-[0-9]{3}$/, "Must contain 6 digits")
    .required(),
  phone: yup
    .number()
    .typeError("Must contain 10 digits")
    .test(
      "len",
      "Must contain 10 digits",
      (val) => val.toString().length === 10
    )
    .required(),
  date: yup.string().required("Date is required"),
  hour: yup
    .number()
    .typeError("Must be between 8 and 18")
    .min(8, "must be at earliest 8")
    .max(18, "must be between at latest 18")
    .required("Hour is required."),
  message: yup.string(),
});

export { schema, schemaLogin, schemaContact, schemaAddress };
