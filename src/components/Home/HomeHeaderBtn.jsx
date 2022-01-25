import React from "react";

const Contact = () => {
  return <button>Contact</button>;
};

const Charity = () => {
  return <button>Charity</button>;
};

const About = () => {
  return <button>About Us</button>;
};

const Story = () => {
  return <button>Story</button>;
};

const Start = () => {
  return <button>Start</button>;
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
  return <button>Log in </button>;
};

const Signup = () => {
  return <button>Sign up</button>;
};

const LoginButtons = () => {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
};

export { LoginButtons, InfoButtons };
