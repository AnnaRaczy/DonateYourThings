import React from "react";

const AboutPhoto = () => {
  return <div className="about_text--img"></div>;
};

const AboutText = () => {
  return (
    <div className="about_text--box">
      <h1 className="about_text--title">About Us</h1>
      <hr className="about_text--hr"></hr>
      <p className="about_text--content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor culpa,
        assumenda iusto consequuntur aspernatur alias ad at ab vitae,
        dignissimos deleniti unde aperiam explicabo earum ipsam.
      </p>
      <div className="about_text--signature"></div>
    </div>
  );
};

const HomeAboutUs = () => {
  return (
    <div id="about" className="about_wrapper">
      <AboutText />
      <AboutPhoto />
    </div>
  );
};

export { HomeAboutUs };
