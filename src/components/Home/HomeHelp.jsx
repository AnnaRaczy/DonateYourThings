import React, { useState } from "react";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { dataCharity, dataOrg, dataCollections } from "./HomePagData";
import { Charity, NonGovern, Collection } from "./HomeHelpPagination";

const Paginate = ({ page, pageCount, onPageChange, classType }) => {
  return (
    <ReactPaginate
      forcePage={page}
      previousLabel={"<<"}
      nextLabel={">>"}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={classType}
      previousLinkClassName={"pagination_previous"}
      nextLinkClassName={"pagination_next"}
      activeClassName={"pagination_active"}
    />
  );
};

const ListOrganizations = ({ active, pageNum, setPageNum }) => {
  const [dataSet] = useState(dataCharity);
  const [dataSetGov] = useState(dataOrg);

  const dataPerPage = 3;
  const pagesVisited = pageNum * dataPerPage;

  const pageCount = Math.ceil(dataCharity.length / dataPerPage);
  const pageCountGov = Math.ceil(dataOrg.length / dataPerPage);

  const onPageChange = ({ selected }) => {
    setPageNum(selected);
  };

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

  const displayCollections = dataCollections.map((elem, id) => {
    return (
      <div key={id} className=" help_charities--wrapper ">
        <Collection name={elem.name} desc={elem.desc} items={elem.items} />
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
    component = displayCollections;
    pages = pageCountGov;
    classType = "pagination_wrapper hidden";
  }

  return (
    <>
      <div className="help_lists">
        {component}
        <Paginate
          page={pageNum}
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

const Buttons = ({ active, handleChange, num, text, classN }) => {
  return (
    <a
      onClick={handleChange(num)}
      className={clsx(
        "help_options--btn",
        { classN },
        {
          active: active === num,
        }
      )}
    >
      {text}
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
      <Buttons
        active={active}
        handleChange={handleChange}
        num={1}
        text="Charities"
      />
      <Buttons
        active={active}
        handleChange={handleChange}
        num={2}
        text="Non-governmental organizations"
        classN="middle_btn"
      />
      <Buttons
        active={active}
        handleChange={handleChange}
        num={3}
        text="Local collections"
      />
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
