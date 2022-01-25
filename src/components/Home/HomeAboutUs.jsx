import React from "react";

const AboutPhoto = () => {
  return <div class="sth"></div>;
};

const AboutText = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
        suscipit, repudiandae illo error placeat maxime obcaecati vitae
        dignissimos velit, quos animi a numquam quisquam exercitationem facilis
        ducimus, ex non neque.
      </p>
      {/* <img>Signature</img> */}
    </div>
  );
};

const HomeAboutUs = () => {
  return (
    <div>
      <AboutText />
      <AboutPhoto />
    </div>
  );
};

export { HomeAboutUs };
