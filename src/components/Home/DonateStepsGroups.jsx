import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { StepTitle } from "./DonateSteps";

const SelectGroup = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({ defaultValues: currentState.groups });
  const [value, setValue] = useState("Children");
  const categories = [
    "Children",
    "Single mothers",
    "Homeless",
    "Disabled",
    "Elders",
  ];

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValue(value);
    setCurrentState({
      ...currentState,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const { location, groups } = currentState;
    if ((location !== undefined) & (groups !== undefined)) {
      setStep((prevState) => prevState + 1);
    }
  };

  return (
    <div className="donate_selections--group">
      <StepTitle text="Groups:" />
      <form
        id="city"
        onSubmit={handleSubmit(onSubmit)}
        className="donate_location--wrapper"
      >
        <FormControl
          variant="outlined"
          size="small"
          sx={{ m: 1, minWidth: 120 }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value ? currentState.groups : " "}
            name="groups"
            onChange={handleChange}
          >
            {categories.map((val, id) => (
              <MenuItem value={val} key={id}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
};

export { SelectGroup };
