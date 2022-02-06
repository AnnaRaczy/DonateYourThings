import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { StepTitle } from "./DonateSteps";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";

const SelectLocation = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [value, setValue] = useState("");

  const cities = ["Wroclaw", "Warsaw", "Krakow", "Poznan", "Katowice"];

  const handleChange = (e) => {
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
    <div className="donate_selections--location">
      <StepTitle text="Location:" />
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
          {/* <InputLabel id="demo-controlled-open-select-label">Select</InputLabel> */}
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            name="location"
            value={value ? value : " "}
            onChange={handleChange}
          >
            {cities.map((val, id) => (
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

export { SelectLocation };
