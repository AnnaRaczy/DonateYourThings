import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { StepTitle } from "./DonateSteps";

const Search = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [value, setValue] = useState("Message");

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
    if (location !== undefined || groups !== undefined) {
      setStep((prevState) => prevState + 1);
    }
  };
  return (
    <Box
      component="form"
      id="city"
      onSubmit={handleSubmit(onSubmit)}
      className="donate_location--wrapper"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="customGroup"
        value={value ? currentState.customGroup : ""}
        onChange={handleChange}
      />
    </Box>
  );
};

const SearchBox = () => {
  return (
    <div>
      <StepTitle
        text="Search for organization (optional):"
        className="step_title"
      />
      <Search />
    </div>
  );
};

export { SearchBox };
