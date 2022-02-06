import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { StepTitle } from "./DonateSteps";
const Search = () => {
  const { setStep, currentState, setCurrentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [, setValue] = useState("");

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
    <Box
      component="form"
      id="city"
      onSubmit={handleSubmit(onSubmit)}
      className="donate_location--wrapper"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Type..."
        variant="outlined"
        name="customGroup"
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
