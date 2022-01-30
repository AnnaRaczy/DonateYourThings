import React from "react";
import { Link } from "react-router-dom";

const FourthStep = () => {
  return (
    <div className="steps_info--box">
      {/* <div className="steps_info--imgFour"></div> */}
      {/* <img src="../../assets/Icon-4.svg" className="steps_info--imgFour"></img> */}
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
      {/* <div className="steps_info--imgThree"></div> */}
      {/* <img src="../../assets/Icon-3.svg" className="steps_info--imgThree"></img> */}
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
      {/* <div className="steps_info--imgTwo"></div> */}
      {/* <img src="../../assets/Icon-2.svg" className="steps_info--imgTwo"></img> */}
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
      {/* <div className="steps_info--imgOne"></div> */}
      {/* <img src="../../assets/Icon-1.svg" className="steps_info--imgOne"></img> */}
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
      <Link to="/login" className="header_content--btn">
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

export { HomeSteps };
