import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Header } from "./Home/HomeHeader";
import { Link } from "react-router-dom";

const Back = ({ dest }) => {
  return (
    <div className="login_back">
      <Link to={dest} className="login_back--btn">
        <i className="fas fa-angle-double-left left_arrow--icon"></i>
        Back
      </Link>
    </div>
  );
};

const LoginGoogle = ({ onClick }) => {
  return (
    <div className="login_email">
      <i className="fab fa-google icon_google"></i>
      <Link to="/" onClick={onClick} className="login_email--txt">
        {" "}
        Google
      </Link>
    </div>
  );
};

const LoginEmail = ({ onClick }) => {
  return (
    <div className="login_email">
      <i className="fas fa-envelope icon_email"></i>
      <Link to="/login-email" onClick={onClick} className="login_email--txt">
        {" "}
        Email
      </Link>
    </div>
  );
};

const SignupButton = () => {
  return (
    <div className="login_text--wrapper">
      <span>Don't have an account?</span>
      <a className="login_text--signup">Sign up</a>
    </div>
  );
};

const Title = () => {
  return <h1 className="login_title">Continue to your account</h1>;
};

const LoginCard = () => {
  const [open, setOpen] = useState(false);
  const { logUserInWithGoogle } = useAuth();

  const onLoginClick = () => {
    // setOpenLoginForm(true);
  };

  const onGoogleClick = () => {
    logUserInWithGoogle();
  };

  return (
    <>
      <Header />
      <div className="login_container">
        <Title />
        <div className="login_choices">
          <LoginEmail onClick={onLoginClick} />
          <LoginGoogle onClick={onGoogleClick} />
        </div>
        {/* <SignupButton /> */}
        <Back dest="/" />
      </div>
    </>
  );
};

export { LoginCard, Back };
