import React from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeColumns } from "./HomeColumns";
import { HomeSteps } from "./HomeSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeHelp } from "./HomeHelp";
import { HomeContact } from "./HomeContact";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeColumns />
      <HomeSteps />
      <HomeAboutUs />
      <HomeHelp />
      <HomeContact />
    </div>
  );
};

export { Home };
