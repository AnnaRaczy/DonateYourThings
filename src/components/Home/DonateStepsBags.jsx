import React, { useState } from "react";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectForm = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [value, setValue] = useState(1);
  const arr = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setValue(value);
    setCurrentState({
      ...currentState,
      [name]: value,
    });
  };

  const onSubmit = () => {
    setStep((prevState) => prevState + 1);
  };
  return (
    <form
      id="bag"
      onSubmit={handleSubmit(onSubmit)}
      className="donate_bags--wrapper"
    >
      <FormControl variant="outlined" size="small" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          name="bags"
          label="bags"
          value={value ? value : " "}
          onChange={handleChange}
        >
          {arr.map((val, id) => (
            <MenuItem value={val} key={id}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

const StepSelect = () => {
  return (
    <div>
      <SelectForm />
    </div>
  );
};

export { StepSelect };
