import React from "react";
import { Title } from "./HomeSteps";
import { LoginButtons, Start } from "./HomeHeaderBtn";

const Step = ({ number, text }) => {
  return (
    <div className="donate_step">
      <p className="donate_number">{number}</p>
      <p className="donate_content">{text}</p>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="donate_steps">
      <Step number="1" text="Choose things" />
      <Step number="2" text="Pack in bags" />
      <Step number="3" text="Choose a place" />
      <Step number="4" text="Order pick up" />
    </div>
  );
};

const DonateSteps = () => {
  return (
    <div className="donate_steps--wrapper">
      <div className="donate_subtitle">
        <Title />
      </div>
      <Steps />
    </div>
  );
};

const DonateTitle = () => {
  return (
    <>
      <h1 className="donate_title">
        Return things that you don't need anymore
      </h1>
      <hr className="donate_hr"></hr>
    </>
  );
};

const DonateHeaderText = () => {
  return (
    <div className="donate_text--wrapper">
      <DonateTitle />
      <DonateSteps />
    </div>
  );
};

const DonateButtons = () => {
  return (
    <div className="header_buttons">
      <LoginButtons />
      <Start text="Home Page" />
    </div>
  );
};

const DonateHeader = () => {
  return (
    <div className="donate_container">
      <DonateButtons />
      <DonateHeaderText />
    </div>
  );
};

export { DonateHeader };
