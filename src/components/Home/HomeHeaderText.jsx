import React from "react";

const Organize = () => {
  return <button>Organize collection</button>;
};

const Donate = () => {
  return <button>Donate</button>;
};

const ContentButtons = () => {
  return (
    <div>
      <Donate />
      <Organize />
    </div>
  );
};

const ContentText = () => {
  return (
    <div>
      <p>Start helping!</p>
      <p>Donate your things.</p>
    </div>
  );
};

export { ContentText, ContentButtons };
