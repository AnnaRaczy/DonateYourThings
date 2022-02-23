import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import moment from "moment";

const dateHandle = (date) => {
  const dateString = moment(date).format("YYYY-MM-DD");
  return dateString;
};

const ControllerMessage = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          className="inputs_form"
          variant="outlined"
          multiline
          minRows={2}
          maxRows={4}
          label="Message..."
          placeholder="Message..."
        />
      )}
      name="mssg"
      control={control}
    />
  );
};

const ControllerHour = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          InputProps={{ inputProps: { min: 8, max: 18 } }}
          className="inputs_form"
          variant="outlined"
          label="Hour..."
          type="number"
        />
      )}
      name="hour"
      control={control}
    />
  );
};

const ControllerDate = ({ control }) => {
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
          inputProps={{ min: dateHandle(new Date()) }}
          InputLabelProps={{ shrink: true }}
        />
      )}
      name="date"
      control={control}
    />
  );
};

const ControllerPhone = ({ control }) => {
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
        />
      )}
      name="phone"
      control={control}
    />
  );
};

const ControllerCode = ({ control }) => {
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
        />
      )}
      name="code"
      control={control}
    />
  );
};

const ControllerCity = ({ control }) => {
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
        />
      )}
      name="city"
      control={control}
    />
  );
};

const ControllerStreet = ({ control }) => {
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
        />
      )}
      name="street"
      control={control}
    />
  );
};

const ControllersDate = ({ control, errors }) => {
  return (
    <div className="">
      <ControllerDate control={control} />
      <p className="inputs_error">{errors?.date?.message}</p>
      <ControllerHour control={control} />
      <p className="inputs_error">{errors?.hour?.message}</p>
      <ControllerMessage control={control} />
      <p className="inputs_error">{errors?.mssg?.message}</p>
    </div>
  );
};

const ControllersAddress = ({ control, errors }) => {
  return (
    <div className="">
      <ControllerStreet control={control} />
      <p className="inputs_error">{errors?.street?.message}</p>
      <ControllerCity control={control} />
      <p className="inputs_error">{errors?.city?.message}</p>
      <ControllerCode control={control} />
      <p className="inputs_error">{errors?.code?.message}</p>
      <ControllerPhone control={control} />
      <p className="inputs_error">{errors?.phone?.message}</p>
    </div>
  );
};

export { ControllersAddress, ControllersDate, dateHandle };
