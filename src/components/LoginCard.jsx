import React from "react";
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

const LoginEmail = () => {
  return (
    <div className="login_email">
      <i className="fas fa-envelope icon_email"></i>
      <Link to="/login-email" className="login_email--txt">
        {" "}
        Email
      </Link>
    </div>
  );
};

const Title = () => {
  return <h1 className="login_title">Continue to your account</h1>;
};

const LoginCard = () => {
  return (
    <>
      <Header />
      <div className="login_container">
        <Title />
        <div className="login_choices">
          <LoginEmail />
        </div>
        <Back dest="/" />
      </div>
    </>
  );
};

export { LoginCard, Back };
