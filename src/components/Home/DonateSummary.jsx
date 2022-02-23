import React from "react";
import { useContextForm } from "../../context/FormContext";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../js/firebase-config";
import { dateHandle } from "./DonateControllers";

const Subtitle = ({ text }) => {
  return (
    <div>
      <h2 className="summary_subtitle">{text}</h2>
    </div>
  );
};

const DateDetail = () => {
  const { currentState } = useContextForm();

  const date = dateHandle(currentState.data.date);

  return (
    <div className="summary_donation--elems">
      <p className="summary_elem">{date}</p>
      <p className="summary_elem">{currentState.data.hour}</p>
      <p className="summary_elem">{currentState.data.mssg}</p>
    </div>
  );
};

const DateType = () => {
  return (
    <div className="summary_donation--elems  summary_data">
      <p className="summary_elem">Date:</p>
      <p className="summary_elem">Hour:</p>
      <p className="summary_elem">Message:</p>
    </div>
  );
};

const Date = () => {
  return (
    <div className="summary_donation--wrapper date_box">
      <Subtitle text="Date:" />
      <div className="summary_donation--box">
        <DateType />
        <DateDetail />
      </div>
    </div>
  );
};

const AddressDetail = () => {
  const { currentState } = useContextForm();

  return (
    <div className="summary_donation--elems">
      <p className="summary_elem">{currentState.data.street}</p>
      <p className="summary_elem">{currentState.data.city}</p>
      <p className="summary_elem">{currentState.data.code}</p>
      <p className="summary_elem">{currentState.data.phone}</p>
    </div>
  );
};

const AddressType = () => {
  return (
    <div className="summary_donation--elems summary_data">
      <p className="summary_elem">Street:</p>
      <p className="summary_elem">City:</p>
      <p className="summary_elem">Zip code:</p>
      <p className="summary_elem">Phone:</p>
    </div>
  );
};

const Address = () => {
  return (
    <div className="summary_donation--wrapper">
      <Subtitle text="Address:" />
      <div className="summary_donation--box">
        <AddressType />
        <AddressDetail />
      </div>
    </div>
  );
};

const SummaryAddress = () => {
  return (
    <div className="summary_donation--details">
      <Address />
      <Date />
    </div>
  );
};

const DonationLocation = () => {
  const { currentState } = useContextForm();

  return (
    <p className="summary_donation--items">
      <i className="fas fa-sync-alt summary_sync"></i>
      For location: {currentState.location}
    </p>
  );
};

const DonationGroup = () => {
  const { currentState } = useContextForm();
  return (
    <p className="summary_donation--items">
      <i className="fas fa-user summary_user"></i>
      {currentState.groups}
    </p>
  );
};

const DonationDetails = () => {
  const { currentState } = useContextForm();

  return (
    <p className="summary_donation--items">
      <i className="fas fa-tshirt summary_shirt"></i>
      {currentState.bags} bags{", "}
      {currentState.things.map((el) => " • " + el)}
    </p>
  );
};

const Title = () => {
  return <h2 className="summary_donation--title">Your information:</h2>;
};

const SummaryThings = () => {
  return (
    <div>
      <Title />
      <DonationDetails />
      <DonationGroup />
      <DonationLocation />
    </div>
  );
};

const SummaryDonation = () => {
  const { setStep, currentState } = useContextForm();
  const { handleSubmit } = useForm({});

  const usersCollectionRef = collection(db, "users");

  const onSubmit = () => {
    setStep((prevState) => prevState + 1);
    const createUser = async () => {
      await addDoc(usersCollectionRef, {
        currentState,
      });
    };
    createUser();
  };

  return (
    <form id="summary_confirmation" onSubmit={handleSubmit(onSubmit)}>
      <SummaryThings />
      <SummaryAddress />
    </form>
  );
};

export { SummaryDonation };
