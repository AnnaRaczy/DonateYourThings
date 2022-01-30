import React from "react";

const ListOrganizations = () => {
  return <div className="help_lists">Help Lists</div>;
};

const HelpText = () => {
  return (
    <p className="help_text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde vel aliquid
      magni repellat perferendis pariatur? Laudantium dolore neque nostrum.
    </p>
  );
};

const Organizations = () => {
  return (
    <div className="help_options">
      <a className="help_options--btn">Charities</a>
      <a className="help_options--btn middle_btn">
        Non-governmental organizations
      </a>
      <a className="help_options--btn">Local collections</a>
    </div>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="help_title">Who do we help?</h1>
      <hr className="help_hr"></hr>
    </>
  );
};

const HomeHelp = () => {
  return (
    <div id="help" className="help_wrapper">
      <Title />
      <Organizations />
      <HelpText />
      <ListOrganizations />
    </div>
  );
};

export { HomeHelp };
