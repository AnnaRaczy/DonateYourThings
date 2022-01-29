import React from "react";
import { Link } from "react-scroll";

const Organize = () => {
  return (
    <a href="" className="header_content--btn">
      Organize collection
    </a>
  );
};

const Donate = () => {
  return (
    <Link
      to="donate"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="header_content--btn content--left"
    >
      Donate
    </Link>
  );
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
      <hr className="header_content--hr"></hr>
    </div>
  );
};

export { ContentText, ContentButtons };
