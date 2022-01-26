import React from "react";
import { Link } from "react-router-dom";

const FourthStep = () => {
  return (
    <div>
      <img src="../../assets/Icon-4.svg" />
      <p>Order delivery</p>
      <hr></hr>
      <p>Choose time that fits your schedule best</p>
    </div>
  );
};
const ThirdStep = () => {
  return (
    <div>
      <img src="../../assets/Icon-3.svg" />
      <p>Decide who do you want to help</p>
      <hr></hr>
      <p>Choose a trusted place</p>
    </div>
  );
};

const SecondStep = () => {
  return (
    <div>
      <img src="../../assets/Icon-2.svg" />
      <p>Pack them</p>
      <hr></hr>
      <p>Make use of trash bags</p>
    </div>
  );
};

const FirstStep = () => {
  return (
    <div>
      <img src="../../assets/Icon-1.svg" />
      <p>Collect your things</p>
      <hr></hr>
      <p>clothes, toys, equipment etc.</p>
    </div>
  );
};

const Steps = () => {
  return (
    <div>
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
    </div>
  );
};

const StepsButton = () => {
  return (
    <Link to="/login" className="header_login--btn">
      Donate
    </Link>
  );
};

const Title = () => {
  return <h1>Follow 4 simple steps</h1>;
};

const HomeSteps = () => {
  return (
    <div id="donate">
      <Title />
      <Steps />
      <StepsButton />
    </div>
  );
};

export { HomeSteps };
