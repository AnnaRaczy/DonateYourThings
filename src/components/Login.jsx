import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { schemaLogin } from "../components/validation";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { Header } from "./Home/HomeHeader";
import { Back } from "./LoginCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const UserError = () => {
  return (
    <p className="user_error">
      <i className="fas fa-exclamation-circle excl_mark"></i>Email or password
      is invalid
    </p>
  );
};

const ControllerPsswd = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="inputs_field"
          variant="outlined"
          label="Password..."
          type="password"
        />
      )}
      name="password"
      control={control}
    />
  );
};

const ControllerEmail = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="inputs_field"
          variant="outlined"
          label="Email..."
          type="text"
        />
      )}
      name="email"
      control={control}
    />
  );
};

const Controllers = ({ errors, control }) => {
  return (
    <div className="login_inputs">
      <ControllerEmail control={control} />
      <p className="login_error">{errors?.email?.message}</p>
      <ControllerPsswd control={control} />
      <p className="login_error">{errors?.password?.message}</p>
    </div>
  );
};

// const TextInput = ({ label, name, type, control }) => {
//   return (
//     <TextField
//       className="inputs_field"
//       variant="outlined"
//       label={label}
//       name={name}
//       type={type}
//       {...control}
//     />
//   );
// };

const LoginBtn = () => {
  return (
    <div className="login_btn--wrapper">
      <Button className="login_btn" type="submit" form="login">
        Login
      </Button>
    </div>
  );
};

const Title = () => {
  return <h1 className="login_title">Log in</h1>;
};

const Login = () => {
  const { logUserIn, currentUser } = useAuth();
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  console.log("currentUser:", currentUser);
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data) => {
    setError(false);
    logUserIn(data.email, data.password).catch(() => {
      setError(true);
    });
    console.log(data);
  };

  if (currentUser) {
    navigate("/");
  }

  return (
    <>
      <Header />

      <div className="login_container">
        <Title />
        <form id="login" className="" onSubmit={handleSubmit(onSubmit)}>
          {error && <UserError message={errors.email} />}
          <Controllers errors={errors} control={control} />
          <div>
            <LoginBtn />
          </div>
        </form>
        <Back dest="/login" />
      </div>
    </>
  );
};

export { Login };
