import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const CollectionExamples = () => {
  return (
    <div className="help_charity--text charity_examples">
      lorem, lorem, lorem, lorem
    </div>
  );
};

const CollectionName = ({ number }) => {
  return (
    <div className="help_charity--box">
      <p className="help_charity--name">Collection "Lorem Ipsum {number}"</p>
      <p className="help_charity--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        sapiente?
      </p>
    </div>
  );
};

const Collection = ({ number }) => {
  return (
    <>
      <div className="help_charity">
        <CollectionName number={number} />
        <CollectionExamples />
      </div>
      <hr className="help_charity--hr"></hr>
    </>
  );
};

const Collections = () => {
  return (
    <div className="help_charities--wrapper">
      <Collection number="1" />
      <Collection number="2" />
      <Collection number="3" />
    </div>
  );
};

const NonGovernExamples = () => {
  return (
    <div className="help_charity--text charity_examples">
      lorem, lorem, lorem, lorem
    </div>
  );
};

const NonGovernName = ({ name }) => {
  return (
    <div className="help_charity--box">
      <p className="help_charity--name">
        Non-governmental Organization "{name}"
      </p>
      <p className="help_charity--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        sapiente?
      </p>
    </div>
  );
};

const NonGovern = ({ name }) => {
  return (
    <>
      <div className="help_charity">
        <NonGovernName name={name} />
        <NonGovernExamples />
      </div>
      <hr className="help_charity--hr"></hr>
    </>
  );
};

const CharityExamples = () => {
  return (
    <div className="help_charity--text charity_examples">
      lorem, lorem, lorem, lorem
    </div>
  );
};

const CharityName = ({ name }) => {
  return (
    <div className="help_charity--box">
      <p className="help_charity--name">Charity "{name}"</p>
      <p className="help_charity--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        sapiente?
      </p>
    </div>
  );
};

const Charity = ({ name }) => {
  return (
    <>
      <div className="help_charity">
        <CharityName name={name} />
        <CharityExamples />
      </div>
      <hr className="help_charity--hr"></hr>
    </>
  );
};

export { Charity, NonGovern, Collections };
