import React, { useState } from "react";
import { DonateInfo } from "./DonateInfo";
import { Button } from "@material-ui/core";
import { StepAddressForm } from "./DonateStepsForm";
import { SummaryDonation } from "./DonateSummary";
import { useContextForm } from "../../context/FormContext";
import { StepForm } from "./DonateStepsThings";
import { StepSelect } from "./DonateStepsBags";
import { SelectLocation } from "./DonateStepsLocation";
import { SelectGroup } from "./DonateStepsGroups";
import { SearchBox } from "./DonateStepsSearch";
import { Confirmation } from "./DonateConfirmation";
import { CustomizedSnackbar } from "./Snackbar";

const StepButtons = ({ id }) => {
  const { step, setStep } = useContextForm();

  const handleClick = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleSubmit = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <div className="donate_button">
      {step > 1 && <Button onClick={handleClick}>Back</Button>}
      {step < 5 && (
        <Button type="submit" form={id}>
          Next
        </Button>
      )}
      {step >= 5 && <Button onClick={handleSubmit}>Confirm</Button>}
    </div>
  );
};

const StepButtons = ({ id }) => {
  const { step, setStep } = useContextForm();

  const handleClick = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleSubmit = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <div className="donate_button">
      {step > 1 && <Button onClick={handleClick}>Back</Button>}
      {step < 5 && (
        <Button type="submit" form={id}>
          Next
        </Button>
      )}
      {step >= 5 && <Button onClick={handleSubmit}>Confirm</Button>}
    </div>
  );
};

// const withStep =
//   (OriginalComp) =>
//   ({ step }) =>
//     <OriginalComp {...props} />;

const StepSelectLocation = () => {
  return (
    <>
      <div className="donate_selections--third">
        <SelectLocation />
        <SelectGroup />
      </div>
      <div>
        <SearchBox />
      </div>
    </>
  );
};

const StepTitleSummary = () => {
  return (
    <h2 className="donate_steps--title summary_title ">
      Summary of your donation:
    </h2>
  );
};

const StepTitle = ({ text }) => {
  return <h2 className="donate_steps--title">{text}</h2>;
};

const StepNumber = ({ number }) => {
  return <p>Step {number}/4</p>;
};

const StepSix = () => {
  return (
    <div>
      <Confirmation />
    </div>
  );
};

const StepFive = () => {
  return (
    <div>
      <StepTitleSummary />
      <SummaryDonation />
      <StepButtons id="summary_donation" />
    </div>
  );
};

const StepFour = () => {
  return (
    <div>
      <StepNumber number="4" />
      <StepAddressForm />
      <StepButtons id="delivery_details" />
    </div>
  );
};

const StepThree = () => {
  return (
    <div>
      <StepNumber number="3" />
      <StepSelectLocation />
      <StepButtons id="city" />
    </div>
  );
};

const StepTwo = () => {
  return (
    <div>
      <StepNumber number="2" />
      <StepTitle text="Choose number of 60l bags that you used:" />
      <StepSelect />
      <StepButtons id="bag" />
    </div>
  );
};

const StepOne = () => {
  return (
    <div>
      <StepNumber number="1" />
      <StepTitle text="Choose what do you want to return:" />
      <StepForm />
      <StepButtons id="things" />
    </div>
  );
};

const DonateSteps = () => {
  const { step, setComponent, setInformation } = useContextForm();

  return (
    <>
      {setInformation(step)}
      {/* <DonateInfo /> */}
      <div className="donate_steps--container">
        <div className="donate_steps--box">{setComponent(step)}</div>
        {/* {error && (
          <CustomizedSnackbar type="error" text="Fill in all inputs!" />
        )} */}
      </div>
    </>
  );
};

export {
  DonateSteps,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  StepTitle,
};
