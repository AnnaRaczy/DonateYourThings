import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ControllersAddress, ControllersDate } from "./DonateControllers";
import { useContextForm } from "../../context/FormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddress } from "../validation";

const InputsDate = () => {
  const {
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAddress) });
  return (
    <div className="donate_form--date">
      <ControllersDate errors={errors} control={control} />
    </div>
  );
};

const InputsAddress = () => {
  const { setStep } = useContextForm();
  const [value, setValue] = useState(1);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAddress) });

  const onSubmit = () => {
    setStep((prevState) => prevState + 1);
  };
  return (
    <div className="donate_form--address">
      <ControllersAddress errors={errors} control={control} />
    </div>
  );
};

const Date = () => {
  return (
    <div>
      <h2 className="donate_form--title">Date:</h2>
      <InputsDate />
    </div>
  );
};

const Address = () => {
  return (
    <div>
      <h2 className="donate_form--title">Address:</h2>
      <InputsAddress />
    </div>
  );
};

const StepAddressForm = () => {
  const { setStep } = useContextForm();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = () => {
    setStep((prevState) => prevState + 1);
  };
  return (
    <form
      id="delivery_details"
      className="donate_form--columns"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Address />
      <Date />
    </form>
  );
};

export { StepAddressForm };
