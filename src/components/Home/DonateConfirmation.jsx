import React from "react";

const ConfirmMessage = () => {
  return (
    <div className="confirmation_text">
      <h1>Thank you for submitting form.</h1>
      <p className="confirmation_text--details">
        Check your email for more details on your scheduled pick up.
      </p>
      <hr className="confirmation_text--hr"></hr>
    </div>
  );
};

const Confirmation = () => {
  return (
    <div className="confirmation_container">
      <ConfirmMessage />
    </div>
  );
};

export { Confirmation };
