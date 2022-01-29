import React from "react";
import { InfoButtons, LoginButtons } from "./HomeHeaderBtn";
import { ContentText, ContentButtons } from "./HomeHeaderText";

const Content = () => {
  return (
    <div className="header_content">
      <ContentText />
      <ContentButtons />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header_buttons">
      <LoginButtons />
      <InfoButtons />
    </div>
  );
};

function HomeHeader() {
  return (
    <div className="header_container">
      <Header />
      <Content />
    </div>
  );
}

export { HomeHeader, Header };
