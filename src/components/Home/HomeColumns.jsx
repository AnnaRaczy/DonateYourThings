import React from "react";

const ColumnText = () => {
  return (
    <p className="column_element--text">
      Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
      elit viverra elementuma. Aliquam erat volutpat.
    </p>
  );
};

const ColumnRight = () => {
  return (
    <div className="column_element">
      <p className="column_element--number">7</p>
      <p className="column_element--title">Organized collections</p>
      <ColumnText />
    </div>
  );
};

const ColumnMiddle = () => {
  return (
    <div className="column_element">
      <p className="column_element--number">5</p>
      <p className="column_element--title">Supported charities</p>
      <ColumnText />
    </div>
  );
};

const ColumnLeft = () => {
  return (
    <div className="column_element">
      <p className="column_element--number">10</p>
      <p className="column_element--title">Donated packs</p>
      <ColumnText />
    </div>
  );
};

function HomeColumns() {
  return (
    <div className="columns_wrapper">
      <ColumnLeft />
      <ColumnMiddle />
      <ColumnRight />
    </div>
  );
}

export { HomeColumns };
