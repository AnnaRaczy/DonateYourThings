import React from "react";

const FormButton = () => {
  return <button>Send</button>;
};

const Form = () => {
  return (
    <form>
      <label></label>
      <input type="text" />
      <label></label>
      <input type="text" />
      <label></label>
      <input type="text" />
    </form>
  );
};

const Title = () => {
  return <h1>Contact us</h1>;
};

const HomeContact = () => {
  return (
    <div>
      <Title />
      <Form />
      <FormButton />
    </div>
  );
};

export { HomeContact };
