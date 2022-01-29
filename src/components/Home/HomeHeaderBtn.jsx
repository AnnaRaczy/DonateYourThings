import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Contact = () => {
  return <a className="header_info--btn">Contact</a>;
};

const Charity = () => {
  return <a className="header_info--btn">Charity</a>;
};

const About = () => {
  return <a className="header_info--btn">About Us</a>;
};

const Story = () => {
  return <a className="header_info--btn">Story</a>;
};

const Start = () => {
  return <a className="header_info--btn">Start</a>;
};

const InfoButtons = () => {
  return (
    <div>
      <Start />
      <Story />
      <About />
      <Charity />
      <Contact />
    </div>
  );
};

const Login = () => {
  return (
    <Link to="/login" className="header_login--btn">
      Log in
    </Link>
  );
};

const Signup = () => {
  return (
    <Link to="/signup" className="header_login--btn header_btn--border">
      Sign up
    </Link>
  );
};

const Logout = ({ onClick }) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="header_logout--btn header_btn--border"
    >
      Log out
    </Link>
  );
};

const Logged = ({ currentUser }) => {
  return (
    <span className="user_logged">
      <span>Hello</span>{" "}
      <span className="hello_name">{currentUser.displayName}</span>
    </span>
  );
};

const LoginButtons = () => {
  const { signUserOut, currentUser } = useAuth();

  const handleSignOut = () => {
    signUserOut();
    console.log(currentUser);
  };
  return (
    <div className="header_buttons--login">
      {!currentUser && (
        <>
          <Login />
          <Signup />
        </>
      )}
      {currentUser && (
        <>
          <Logged currentUser={currentUser} />
          <Logout onClick={handleSignOut} />
        </>
      )}
    </div>
  );
};

export { LoginButtons, InfoButtons };
