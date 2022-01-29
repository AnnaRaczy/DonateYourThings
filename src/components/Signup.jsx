import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { schema } from "./validation";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "./Home/HomeHeader";
import { Back } from "./LoginCard";
import { TextField, Button } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const UserExists = () => {
  return (
    <p className="user_error">
      <i className="fas fa-exclamation-circle excl_mark"></i>User already exists
    </p>
  );
};

const ControllerPsswdConf = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="inputs_field--reg"
          variant="outlined"
          label="Password Confirmation..."
          type="password"
        />
      )}
      name="passwordConfirm"
      control={control}
    />
  );
};

const ControllerPsswd = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="inputs_field--reg"
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
          className="inputs_field--reg"
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

const ControllerName = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="inputs_field--reg"
          variant="outlined"
          label="Name..."
          type="text"
        />
      )}
      name="name"
      control={control}
    />
  );
};

const Controllers = ({ errors, control }) => {
  console.log(errors?.name?.message);
  return (
    <div className="signup_inputs">
      <ControllerName control={control} />
      <p className="signup_error">{errors?.name?.message}</p>
      <ControllerEmail control={control} />
      <p className="signup_error">{errors?.email?.message}</p>
      <ControllerPsswd control={control} />
      <p className="signup_error">{errors?.password?.message}</p>
      <ControllerPsswdConf control={control} />
      <p className="signup_error">
        {errors?.passwordConfirm && "Passwords don't match"}
      </p>
    </div>
  );
};

const SignupButton = () => {
  return (
    <div className="signup_btn--wrapper">
      <Button className="signup_btn" type="submit" form="signup">
        Create Account
      </Button>
    </div>
  );
};

const Title = () => {
  return <h1 className="login_title">Sign up</h1>;
};

const Signup = () => {
  const { signUserUp, currentUser } = useAuth();
  const [error, setError] = useState(false);

  let navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setError(false);
    console.log("Data:", data);
    signUserUp(data.name, data.email, data.password).catch(() => {
      setError(true);
    });
    // const createUser = async () => {
    //   await addDoc(usersCollectionRef, {
    //     email: data.email,
    //   });
    // };
    // createUser();
  };

  if (currentUser) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="login_container signup_wrapper">
        <Title />
        {error && <UserExists />}
        <form id="signup" onSubmit={handleSubmit(onSubmit)}>
          <Controllers errors={errors} control={control} />
          <div>
            <SignupButton />
            <Back dest="/" />
          </div>
        </form>
      </div>
    </>
  );
};

export { Signup };
