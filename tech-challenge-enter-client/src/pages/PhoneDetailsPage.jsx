import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PhoneDetailsPage({ phonesList }) {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(true);
  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);

  const getPhoneDetails = async () => {
    setFetchingDetails(true);
    const phoneToRender = phonesList.find(
      (eachPhone) => eachPhone.id === Number(phoneId)
    );

    setTimeout(() => {
      if (!phoneToRener) {
        navigate("/not-found");
        return;
      }
      setPhoneDetails(phoneToRender);
      setFetchingDetails(false);
    }, 500);
  };

  if (fetchingDetails) {
    return <h1>Loading</h1>;
  }
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = phoneDetails;

  return (
    <div className="PhoneDetailsCard">
      <h1>
        {name} by {manufacturer}
      </h1>
      <img
        src={`/tech-challenge-enter-client/public/images/${imageFileName}`}
      />
      <h2>Description:</h2>
      <p>{description}</p>
      <ul>
        Specs:
        <le>Color: {color}</le>
        <le>Screen: {screen}</le>
        <le>Processor: {processor}</le>
        <le>Ram: {ram}</le>
        <le>Price: {price}</le>
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default PhoneDetailsPage;
