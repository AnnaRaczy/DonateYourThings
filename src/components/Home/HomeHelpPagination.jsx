import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const CollectionExamples = ({ items }) => {
  return <div className="help_charity--text charity_examples">{items}</div>;
};

const CollectionName = ({ name, desc }) => {
  return (
    <div className="help_charity--box">
      <p className="help_charity--name">Collection {name}</p>
      <p className="help_charity--text">{desc}</p>
    </div>
  );
};

const Collection = ({ name, desc, items }) => {
  return (
    <div className="help_charities--wrapper">
      <div className="help_charity">
        <CollectionName name={name} desc={desc} />
        <CollectionExamples items={items} />
      </div>
      <hr className="help_charity--hr"></hr>
    </div>
  );
};

// const Collections = () => {
//   return (
//     <div className="help_charities--wrapper">
//       <Collection number="1" />
//       <Collection number="2" />
//       <Collection number="3" />
//     </div>
//   );
// };

const NonGovernExamples = ({ items }) => {
  return <div className="help_charity--text charity_examples">{items}</div>;
};

const NonGovernName = ({ name, desc }) => {
  return (
    <div className="help_charity--box">
      <p className="help_charity--name">
        Non-governmental Organization "{name}"
      </p>
      <p className="help_charity--text">{desc}</p>
    </div>
  );
};

const NonGovern = ({ name, desc, items }) => {
  return (
    <>
      <div className="help_charity">
        <NonGovernName name={name} desc={desc} />
        <NonGovernExamples items={items} />
      </div>
      <hr className="help_charity--hr"></hr>
    </>
  );
};

const CharityExamples = ({ items }) => {
  return <div className="help_charity--text charity_examples">{items}</div>;
};

const CharityName = ({ name, desc }) => {
  return (
    <div className="help_charity--box">
      <p className="help_charity--name">Charity "{name}"</p>
      <p className="help_charity--text">{desc}</p>
    </div>
  );
};

const Charity = ({ name, desc, items }) => {
  return (
    <>
      <div className="help_charity">
        <CharityName name={name} desc={desc} />
        <CharityExamples items={items} />
      </div>
      <hr className="help_charity--hr"></hr>
    </>
  );
};

export { Charity, NonGovern, Collection };
