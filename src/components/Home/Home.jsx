import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
import { HomeColumns } from "./HomeColumns";
import { HomeSteps } from "./HomeSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeHelp } from "./HomeHelp";
import { HomeContact } from "./HomeContact";

const Home = () => {
  let navigate = useNavigate();
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
