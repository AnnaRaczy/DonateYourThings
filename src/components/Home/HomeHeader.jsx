import React from "react";
import { InfoButtons, LoginButtons } from "./HomeHeaderBtn";
import { ContentText, ContentButtons } from "./HomeHeaderText";

const Content = () => {
  return (
    <div>
      <ContentText />
      <ContentButtons />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <LoginButtons />
      <InfoButtons />
    </div>
  );
};

function HomeHeader() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export { HomeHeader };
