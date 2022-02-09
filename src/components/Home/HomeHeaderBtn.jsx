import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useAuth } from "../../context/AuthContext";

const Contact = () => {
  return (
    <LinkScroll
      to="contact"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="header_info--btn"
    >
      Contact
    </LinkScroll>
  );
};

const Charity = () => {
  return (
    <LinkScroll
      to="about"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="header_info--btn"
    >
      Charity
    </LinkScroll>
  );
};

const About = () => {
  return (
    <LinkScroll
      to="about"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="header_info--btn"
    >
      About Us
    </LinkScroll>
  );
};

const Story = () => {
  return (
    <LinkScroll
      to="donate"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="header_info--btn"
    >
      Story
    </LinkScroll>
  );
};

const Start = ({ text }) => {
  return (
    <Link to="/" className="header_info--btn start_btn">
      {text}
    </Link>
  );
};

const InfoButtons = () => {
  return (
    <div>
      <Start text="Start" />
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

export { LoginButtons, InfoButtons, Start };
