import React, { useState } from "react";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { dataCharity } from "./HomePagData";
import { Charity, NonGovern, Collections } from "./HomeHelpPagination";

const Paginate = ({ pageCount, onPageChange, classType }) => {
  return (
    <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={classType}
      previousLinkClassName={"pagination_previous"}
      nextLinkClassName={"pagination_next"}
      activeClassName="pagination_active"
    />
  );
};

const ListOrganizations = ({ active, pageNum, setPageNum }) => {
  const [dataSet, setDataSet] = useState(dataCharity);
  const [dataSetGov, setDataSetGov] = useState(dataCharity.slice(0, 6));

  const dataPerPage = 3;
  const pagesVisited = pageNum * dataPerPage;

  const pageCount = Math.ceil(dataCharity.length / dataPerPage);
  const pageCountGov = Math.ceil(dataCharity.slice(0, 6).length / dataPerPage);

  const onPageChange = ({ selected }) => {
    setPageNum(selected);
  };
  console.log(dataSet);

  const displayCharities = dataSet
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((elem, id) => {
      return (
        <div key={id} className=" help_charities--wrapper ">
          <Charity name={elem.name} desc={elem.desc} items={elem.items} />
        </div>
      );
    });

  const displayGovs = dataSetGov
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((elem, id) => {
      return (
        <div key={id} className=" help_charities--wrapper ">
          <NonGovern name={elem.name} desc={elem.desc} items={elem.items} />
        </div>
      );
    });

  let component;
  let pages;
  let classType = "pagination_wrapper";
  if (active === 1) {
    component = displayCharities;
    pages = pageCount;
  } else if (active === 2) {
    component = displayGovs;
    pages = pageCountGov;
  } else {
    component = <Collections />;
    pages = pageCountGov;
    classType = "hidden";
  }

  return (
    <>
      <div className="help_lists">
        {component}
        <Paginate
          pageCount={pages}
          onPageChange={onPageChange}
          classType={classType}
        />
      </div>
    </>
  );
};

const HelpText = () => {
  return (
    <p className="help_text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde vel aliquid
      magni repellat perferendis pariatur? Laudantium dolore neque nostrum.
    </p>
  );
};

const CollectionButton = ({ active, handleChange }) => {
  return (
    <a
      onClick={handleChange(3)}
      className={clsx("help_options--btn", {
        active: active === 3,
      })}
    >
      Local collections
    </a>
  );
};

const GovernButton = ({ active, handleChange }) => {
  return (
    <a
      onClick={handleChange(2)}
      className={clsx("help_options--btn", "middle_btn", {
        active: active === 2,
      })}
    >
      Non-governmental organizations
    </a>
  );
};

const CharityButton = ({ active, handleChange }) => {
  return (
    <a
      onClick={handleChange(1)}
      className={clsx("help_options--btn", {
        active: active === 1,
      })}
    >
      Charities
    </a>
  );
};

const Organizations = ({ active, setActive, setPageNum }) => {
  const handleChange = (id) => (e) => {
    e.preventDefault();
    setActive(id);
    setPageNum(0);
  };

  return (
    <div className="help_options">
      <CharityButton active={active} handleChange={handleChange} />
      <GovernButton active={active} handleChange={handleChange} />
      <CollectionButton active={active} handleChange={handleChange} />
    </div>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="help_title">Who do we help?</h1>
      <hr className="help_hr"></hr>
    </>
  );
};

const HomeHelp = () => {
  const [active, setActive] = useState(1);
  const [pageNum, setPageNum] = useState(0);
  return (
    <div id="help" className="help_wrapper">
      <Title />
      <Organizations
        active={active}
        setActive={setActive}
        setPageNum={setPageNum}
      />
      <HelpText />
      <ListOrganizations
        active={active}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </div>
  );
};

export { HomeHelp };
