import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { StepTitle } from "./DonateSteps";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { Error } from "./DonateSteps";

const SelectBoth = ({ name, values }) => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    console.log("name:", name);
    const { value } = e.target;
    setCurrentState({
      ...currentState,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const { location, groups } = currentState;

    console.log(location, groups);
    if (location && groups) {
      setStep((prevState) => prevState + 1);
      setError(false);
      return true;
    }
    setError(true);
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
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            name={name}
            value={currentState[name]}
            onChange={handleChange}
          >
            {values.map((val, id) => (
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

const SelectLocation = () => {
  const cities = ["Wroclaw", "Warsaw", "Krakow", "Poznan", "Katowice"];
  return <SelectBoth name="location" values={cities} />;
};
const SelectGroups = () => {
  const categories = [
    "Children",
    "Single mothers",
    "Homeless",
    "Disabled",
    "Elders",
  ];
  return <SelectBoth name="groups" values={categories} />;
};

export { SelectLocation, SelectGroups };
