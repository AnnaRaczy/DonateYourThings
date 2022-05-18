import React from "react";
import { Link } from "react-router-dom";

const FourthStep = () => {
  return (
    <div className="steps_info--box">
      <i className="fas fa-sync-alt steps_icon"></i>
      <p className="steps_info--title">Order delivery</p>
      <hr className="steps_info--hr"></hr>
      <p className="steps_info--desc">
        Choose time that fits your schedule best
      </p>
    </div>
  );
};
const ThirdStep = () => {
  return (
    <div className="steps_info--box">
      <i className="far fa-search steps_icon"></i>
      <p className="steps_info--title">Who to help</p>
      <hr className="steps_info--hr"></hr>
      <p className="steps_info--desc">Choose a trusted place</p>
    </div>
  );
};

const SecondStep = () => {
  return (
    <div className="steps_info--box">
      <i className="far fa-box-open steps_icon"></i>
      <p className="steps_info--title">Pack them</p>
      <hr className="steps_info--hr"></hr>
      <p className="steps_info--desc">Make use of trash bags</p>
    </div>
  );
};

const FirstStep = () => {
  return (
    <div className="steps_info--box">
      <i className="far fa-tshirt steps_icon"></i>
      <p className="steps_info--title">Collect things</p>
      <hr className="steps_info--hr"></hr>
      <p className="steps_info--desc">clothes, toys, equipment etc.</p>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="steps_info">
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
    </div>
  );
};

const StepsButton = () => {
  return (
    <div className="steps_btn">
      <Link to="/donate" className="header_content--btn">
        Donate
      </Link>
    </div>
  );
};

const Title = () => {
  return <h1 className="steps_title">Follow 4 simple steps</h1>;
};

const HomeSteps = () => {
  return (
    <div id="donate" className="steps_wrapper">
      <Title />
      <Steps />
      <StepsButton />
    </div>
  );
};

export { HomeSteps, Title };
