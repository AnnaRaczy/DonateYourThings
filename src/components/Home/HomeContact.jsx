import React, { useState } from "react";
// import { schemaContact } from "../components/validation";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, OutlinedInput } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Decoration.svg";

const MediaIcons = () => {
  return (
    <div>
      <i className="fab fa-facebook"></i>
      <i className="fab fa-instagram icon_instagram"></i>
    </div>
  );
};

const Copyright = () => {
  return <div className="contact_copyright">Copyright by Coders Lab</div>;
};

const Footer = () => {
  return (
    <div className="contact_footer">
      <Copyright />
      <MediaIcons />
    </div>
  );
};

const ControllerMessage = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <OutlinedInput
          {...field}
          className="contact_input contact_message"
          variant="outlined"
          multiline
          minRows={4}
          maxRows={5}
          label="Message..."
          placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor culpa, assumenda iusto consequuntur aspernatur alias ad at ab vitae."
          type="text"
        />
      )}
      name="message"
      control={control}
    />
  );
};

const ControllerEmail = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="contact_input  contact_email"
          variant="standard"
          label="Email..."
          type="text"
        />
      )}
      name="email"
      control={control}
    />
  );
};

const ControllerName = ({ control }) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          className="contact_input contact_name"
          variant="standard"
          label="Name..."
          type="text"
        />
      )}
      name="name"
      control={control}
    />
  );
};

const Controllers = ({ errors, control }) => {
  return (
    <>
      <div className="contact_form--inputs">
        <ControllerName control={control} />
        <p className="">{errors?.name?.message}</p>
        <ControllerEmail control={control} />
        <p className="">{errors?.email?.message}</p>
      </div>
      <ControllerMessage control={control} />
      <p className="">{errors?.message?.message}</p>
    </>
  );
};

const Form = () => {
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resolver: yupResolver(schemaContact),
  });
  return (
    <form className="contact_form">
      {/* {error && <UserError message={errors.email} />} */}
      <Controllers errors={errors} control={control} />
    </form>
  );
};

const FormButton = () => {
  return (
    <div className="contact_btn--wrapper">
      <button className="contact_btn">Send</button>
    </div>
  );
};
const Title = () => {
  return (
    <>
      <h1 className="contact_title">Contact us</h1>
      <img src={img} className="contact_hr"></img>
    </>
  );
};

const HomeContact = () => {
  return (
    <div id="contact" className="layer">
      <div className="contact_wrapper ">
        <Title />
        <Form />
        <FormButton />
      </div>
      <Footer />
    </div>
  );
};

export { HomeContact };
