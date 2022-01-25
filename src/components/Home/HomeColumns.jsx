import React from "react";

const ColumnText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
      distinctio soluta libero. Animi repellendus facere adipisci eius sit, quis
      nesciunt.
    </p>
  );
};

const ColumnRight = () => {
  return (
    <div>
      <p>7</p>
      <p>Organized collections</p>
      <ColumnText />
    </div>
  );
};

const ColumnMiddle = () => {
  return (
    <div>
      <p>5</p>
      <p>Supported charities</p>
      <ColumnText />
    </div>
  );
};

const ColumnLeft = () => {
  return (
    <div>
      <p>10</p>
      <p>Donated packs</p>
      <ColumnText />
    </div>
  );
};

function HomeColumns() {
  return (
    <div>
      <ColumnLeft />
      <ColumnMiddle />
      <ColumnRight />
    </div>
  );
}

export { HomeColumns };
