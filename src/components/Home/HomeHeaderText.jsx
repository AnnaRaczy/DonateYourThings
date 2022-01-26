import React from "react";

const Organize = () => {
  return <a className="header_content--btn">Organize collection</a>;
};

const Donate = () => {
  return <a className="header_content--btn content--left">Donate</a>;
};

const ContentButtons = () => {
  return (
    <div className="header_content--buttons">
      <Donate />
      <Organize />
    </div>
  );
};

const ContentText = () => {
  return (
    <div className="header_content--title">
      <p>Start helping!</p>
      <p>Donate your things.</p>
    </div>
  );
};

export { ContentText, ContentButtons };
