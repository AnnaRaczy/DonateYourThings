import React from "react";

const ListOrganizations = () => {
  return <div class="pagination"></div>;
};

const HelpText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde vel aliquid
      magni repellat perferendis pariatur? Laudantium dolore neque nostrum, odio
      placeat obcaecati amet labore, ratione aut, molestiae quod veritatis
      provident.
    </p>
  );
};

const Organizations = () => {
  return (
    <div>
      <p>Charities</p>
      <p>Non-governmental organizations</p>
      <p>Local collections</p>
    </div>
  );
};

const Title = () => {
  return <h1>Who do we help?</h1>;
};

const HomeHelp = () => {
  return (
    <div>
      <Title />
      <Organizations />
      <HelpText />
      <ListOrganizations />
    </div>
  );
};

export { HomeHelp };
