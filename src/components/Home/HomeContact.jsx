import React, { useState } from "react";
import { schemaContact } from "../../components/validation";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { addMessage } from "../functions";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";

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
        <TextField
          {...field}
          className="contact_input contact_message"
          variant="outlined"
          multiline
          minRows={4}
          maxRows={5}
          label="Message..."
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
          size="small"
          className="contact_input  contact_email"
          variant="outlined"
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
          size="small"
          className="contact_input contact_name"
          variant="outlined"
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

const MessageSuccess = ({ visibility }) => {
  return (
    <p
      className={clsx("message_success", {
        hidden: !visibility,
      })}
    >
      <i className="fas fa-check-circle icon_success"></i>Message has been
      successfully sent
    </p>
  );
};

const FormButton = () => {
  return (
    <div className="contact_btn--wrapper">
      <button
        className="header_logout--btn header_btn--border"
        type="submit"
        form="mssg"
      >
        Send
      </button>
    </div>
  );
};

const Form = () => {
  const [visibility, setVisibility] = useState(false);

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schemaContact),
  });

  const onSubmit = (data) => {
    addMessage(data);
    setVisibility(true);
    reset();
  };

  return (
    <form id="mssg" className="contact_form" onSubmit={handleSubmit(onSubmit)}>
      <MessageSuccess visibility={visibility} />
      <Controllers errors={errors} control={control} />
    </form>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="contact_title">Contact us</h1>
      <hr className="contact_hr"></hr>
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

export { HomeContact, MessageSuccess };
