import React from "react";
import { Link } from "react-router-dom";

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
    <Link to="/signup" className="header_login--btn header_signup">
      Sign up
    </Link>
  );
};

const LoginButtons = () => {
  return (
    <div className="header_buttons--login">
      <Login />
      <Signup />
    </div>
  );
};

export { LoginButtons, InfoButtons };
