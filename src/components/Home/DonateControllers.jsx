import React from "react";
import { Controller } from "react-hook-form";
import { TextField, OutlinedInput } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";

const ControllerMessage = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <OutlinedInput
          {...field}
          size="small"
          className="inputs_form"
          multiline
          minRows={2}
          maxRows={4}
          label="Message..."
          placeholder="Message..."
          onChange={onChange}
        />
      )}
      name="message"
      control={control}
    />
  );
};

const ControllerHour = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          label="Hour..."
          type="number"
          onChange={onChange}
        />
      )}
      name="hour"
      control={control}
    />
  );
};

const ControllerDate = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          label="Date..."
          type="date"
          onChange={onChange}
          InputLabelProps={{ shrink: true }}
        />
      )}
      name="date"
      control={control}
    />
  );
};

const ControllerPhone = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          label="Phone..."
          type="number"
          onChange={onChange}
        />
      )}
      name="phone"
      control={control}
    />
  );
};

const ControllerCode = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          label="Zip code..."
          type="text"
          onChange={onChange}
        />
      )}
      name="code"
      control={control}
    />
  );
};

const ControllerCity = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          label="City..."
          type="text"
          onChange={onChange}
        />
      )}
      name="city"
      control={control}
    />
  );
};

const ControllerStreet = ({ control, onChange }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          label="Street..."
          type="text"
          onChange={onChange}
        />
      )}
      name="street"
      control={control}
    />
  );
};

const ControllersDate = ({ control, errors }) => {
  const { currentState, setCurrentState } = useContextForm();

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setCurrentState({
      ...currentState,
      [name]: [value],
    });
  };
  return (
    <div className="">
      <ControllerDate control={control} onChange={handleChange} />
      <p className="">{errors?.date?.message}</p>
      <ControllerHour control={control} onChange={handleChange} />
      <p className="">{errors?.hour?.message}</p>
      <ControllerMessage control={control} onChange={handleChange} />
      <p className="">{errors?.message?.message}</p>
    </div>
  );
};

const ControllersAddress = ({ control, errors }) => {
  const { currentState, setCurrentState } = useContextForm();

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setCurrentState({
      ...currentState,
      [name]: [value],
    });
  };

  console.log(currentState);
  return (
    <div className="">
      <ControllerStreet control={control} onChange={handleChange} />
      <p className="">{errors?.street?.message}</p>
      <ControllerCity control={control} onChange={handleChange} />
      <p className="">{errors?.city?.message}</p>
      <ControllerCode control={control} onChange={handleChange} />
      <p className="">{errors?.code?.message}</p>
      <ControllerPhone control={control} onChange={handleChange} />
      {/* <p className="">{errors?.phone?.message}</p> */}
    </div>
  );
};

export { ControllersAddress, ControllersDate };
