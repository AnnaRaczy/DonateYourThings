import React from "react";

// Pack your thungs in 60l bags. Detailed instruction how to manage it most
// efficently you can find <a>HERE</a>

const text = [
  {
    one: "Fill in all the information about your donation. It will help us to decide who needs it the most.",
  },
  {
    two: `Pack your thungs in 60l bags. Detailed instruction how to manage it most efficently you can find ${(
      <a>HERE</a>
    )}`,
  },
  {
    three: "Fill in address and pick up date.",
  },
];

const Content = ({ number }) => {
  return <p className="donate_info--text">Some text</p>;
};

const Title = () => {
  return <h1 className="donate_info--title">Important!</h1>;
};

const DonateInfo = () => {
  const number = "0";
  return (
    <div className="donate_info--container">
      <div className="donate_info--box">
        <Title />
        <Content number={number} />
      </div>
    </div>
  );
};

export { DonateInfo };
