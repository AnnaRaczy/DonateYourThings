import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { StepTitle } from "./DonateSteps";
import { Error } from "./DonateSteps";

const Control = ({ name, values, text }) => {
  const { currentState, setCurrentState } = useContextForm();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCurrentState({
      ...currentState,
      [name]: value,
    });
  };

  return (
    <>
      <StepTitle text={text} />
      <FormControl variant="outlined" size="small" sx={{ m: 1, minWidth: 120 }}>
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
    </>
  );
};

const Combined = () => {
  const { setStep, currentState } = useContextForm();
  const { handleSubmit } = useForm({});
  const [error, setError] = useState(false);

  const onSubmit = () => {
    const { location, groups } = currentState;
    if (location && groups) {
      setStep((prevState) => prevState + 1);
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <div className="donate_selections--location">
      <form
        id="city"
        onSubmit={handleSubmit(onSubmit)}
        className="donate_location--wrapper"
      >
        <Control
          name="location"
          values={["Wroclaw", "Warsaw", "Krakow", "Poznan", "Katowice"]}
          text="Location:"
        />
        <Control
          name="groups"
          values={[
            "Children",
            "Single mothers",
            "Homeless",
            "Disabled",
            "Elders",
          ]}
          text="Groups:"
        />
        <SearchBox />
        <Error error={error} text="Please choose all the options" />
      </form>
    </div>
  );
};

const Search = () => {
  const { currentState, setCurrentState } = useContextForm();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCurrentState({
      ...currentState,
      [name]: value,
    });
  };
  return (
    <>
      <Box
        component="form"
        id="city"
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
          value={currentState.customGroup}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

const SearchBox = () => {
  return (
    <div>
      <StepTitle
        text="Add your organization (optional):"
        className="step_title"
      />
      <Search />
    </div>
  );
};

export { Combined };
