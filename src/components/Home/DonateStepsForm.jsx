import React from "react";
import { useForm } from "react-hook-form";
import { ControllersAddress, ControllersDate } from "./DonateControllers";
import { useContextForm } from "../../context/FormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddress } from "../validation";

const InputsDate = ({ control, errors }) => {
  return (
    <div className="donate_form--date">
      <ControllersDate control={control} errors={errors} />
    </div>
  );
};

const InputsAddress = ({ control, errors }) => {
  return (
    <div className="donate_form--address">
      <ControllersAddress control={control} errors={errors} />
    </div>
  );
};

const Date = ({ control, errors }) => {
  return (
    <div>
      <h2 className="donate_form--title">Date:</h2>
      <InputsDate control={control} errors={errors} />
    </div>
  );
};

const Address = ({ control, errors }) => {
  return (
    <div>
      <h2 className="donate_form--title">Address:</h2>
      <InputsAddress control={control} errors={errors} />
    </div>
  );
};

const StepAddressForm = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: currentState.data,
    mode: "onSubmit",
    resolver: yupResolver(schemaAddress),
  });

  const onSubmit = (data) => {
    setCurrentState({
      ...currentState,
      data,
    });
    setStep((prevState) => prevState + 1);
  };
  return (
    <form
      id="address_date"
      className="donate_form--columns"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Address control={control} errors={errors} />
      <Date control={control} errors={errors} />
    </form>
  );
};

export { StepAddressForm };
