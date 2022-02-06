import React, { useState } from "react";
import { schemaContact } from "../../components/validation";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, OutlinedInput } from "@material-ui/core";
import { addMessage } from "../functions";
import { yupResolver } from "@hookform/resolvers/yup";
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
          // notchedOutline
          multiline
          minRows={4}
          maxRows={5}
          label="Message..."
          placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor culpa, assumenda iusto consequuntur aspernatur alias ad at ab vitae."
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

const ControllerRight = ({ control, errors }) => {
  return (
    <div>
      <ControllerEmail control={control} />
      <p className="contact_error">{errors?.email?.message}</p>
    </div>
  );
};

const ControllerLeft = ({ control, errors }) => {
  return (
    <div>
      <ControllerName control={control} />
      <p className="contact_error">{errors?.name?.message}</p>
    </div>
  );
};

const Controllers = ({ errors, control }) => {
  return (
    <>
      <div className="contact_form--inputs">
        <ControllerLeft control={control} errors={errors} />
        <ControllerRight control={control} errors={errors} />
      </div>
      <ControllerMessage control={control} />
      <p className="contact_error">{errors?.message?.message}</p>
    </>
  );
};

const MessageSuccess = () => {
  return (
    <p className="message_success">
      <i className="fas fa-check-circle icon_success"></i>Message has been
      successfully sent
    </p>
  );
};

const FormButton = () => {
  return (
    <div className="contact_btn--wrapper">
      <button className="contact_btn" type="submit" form="mssg">
        Send
      </button>
    </div>
  );
};

const Form = () => {
  const [success, setSuccess] = useState(false);

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
    resolver: yupResolver(schemaContact),
  });

  const onSubmit = (data) => {
    addMessage(data);
    setSuccess(true);
    console.log(data);
  };

  return (
    <form id="mssg" className="contact_form" onSubmit={handleSubmit(onSubmit)}>
      {success && <MessageSuccess />}
      <Controllers errors={errors} control={control} />
    </form>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="contact_title">Contact us</h1>
      {/* <img src={img} className="contact_hr"></img> */}
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
