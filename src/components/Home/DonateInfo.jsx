import React from "react";

const text = [
  [
    "Fill in all the information about your donation. It will help us to decide who needs it the most.",
  ],
  [
    `Pack your things in 60l bags. Detailed instruction how to manage it most efficently you can find ${(
      <a>HERE</a>
    )}`,
  ],
  [
    "Filter for charity based on location or type. You can also specific which charity you would like to donate your thing to. ",
  ],
  ["Fill in address and pick up date."],
];
console.log(text);

const Content = ({ number }) => {
  return <p className="donate_info--text">{text[number]}</p>;
};

const Title = () => {
  return <h1 className="donate_info--title">Important!</h1>;
};

const DonateInfo = ({ number }) => {
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
