/* eslint-disable no-restricted-globals */
import {  Typography } from "@mui/material";
import {  useFieldArray, useFormContext } from "react-hook-form";
import React, { useEffect, useState } from "react";

const ReviewBooking = () => {
  const { control } = useFormContext();
  const [grandTotal, setgrandTotal] = useState(0);
  const adultFields = useFieldArray({
    control,
    name: "adults",
  }).fields;
  const childrenFields = useFieldArray({
    control,
    name: "children",
  }).fields;
  const infantFields = useFieldArray({
    control,
    name: "infants",
  }).fields;

  const {
    origin,
    destination,
    journeyDate,
    returnDate,
    numberOfAdults,
    numberOfChildren,
    numberOfInfants,
    airline,
    cabin,
    // basicFare,
    taxes,
    salesCommission,
    discount,
    // gender,
    // firstName,
    // surName,
    // email,
    // phone,
    // pnr,
    // ticket,
    // issueBy,
    // ledger,
    adultFare,
    childFare,
    infantFare,
    code,
  } = control._formValues;

  const [totalAdultFare, setTotalAdultFare] = useState(
    numberOfAdults * adultFare
  );
  const [totalChildrenFare, setTotalChildrenFare] = useState(
    numberOfChildren * childFare
  );
  const [totalInfantFare, setTotalInfantFare] = useState(
    numberOfInfants * infantFare
  );
  const [totalAmount, setTotalAmount] = useState(
    totalAdultFare + totalInfantFare + totalChildrenFare
  );

  useEffect(() => {
    setTotalAdultFare(numberOfAdults * adultFare);
    setTotalChildrenFare(numberOfChildren * childFare);
    setTotalInfantFare(numberOfInfants * infantFare);
    setTotalAmount(totalAdultFare + totalInfantFare + totalChildrenFare);
    setgrandTotal(totalAmount);
  }, [
    adultFare,
    childFare,
    control,
    infantFare,
    numberOfAdults,
    numberOfChildren,
    numberOfInfants,
    totalAdultFare,
    totalAmount,
    totalChildrenFare,
    totalInfantFare,
  ]);

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          1 Booking Information Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{origin}</p>
          <p>{destination}</p>
          <p>{journeyDate}</p>
          <p>{returnDate}</p>
          <p>{numberOfAdults}</p>
          <p>{numberOfChildren}</p>
          <p>{numberOfInfants}</p>
        </div>

        <Typography variant="h6" align="center" gutterBottom>
          2 Flight Information Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{airline}</p>
          <p>{code}</p>
          <p>{cabin}</p>
          <p>{totalAdultFare}</p>
          <p>{totalChildrenFare}</p>
          <p>{totalInfantFare}</p>
          <p>{salesCommission}</p>
          <p>{taxes}</p>
          <p>{discount}</p>
        </div>
        <Typography variant="h6" align="center" gutterBottom>
          3 Passenger Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {adultFields.map((field, index) => (
            <div key={index}>
              <p>Date of Birth:{field.dateOfBirth}</p>
              <p>First name: {field.firstName}</p>
              <p>Email: {field.email}</p>
              <p>Phone Number{field.phoneNumber}</p>
              <p>Surname{field.surname}</p>
            </div>
          ))}
          {childrenFields.map((field, index) => (
            <div key={index.id}>
              <p>Date of Birth: {field.dateOfBirth}</p>
              <p>First name: {field.firstName}</p>
              <p>Email {field.email}</p>
              <p>Surname: {field.surname}</p>
            </div>
          ))}
          {infantFields.map((field, index) => (
            <div key={index}>
              <p>{field.dateOfBirth}</p>
              <p>{field.firstName}</p>
              <p>{field.email}</p>
              <p>{field.phoneNumber}</p>
              <p>{field.surname}</p>
            </div>
          ))}
        </div>
        <Typography variant="h6" align="center" gutterBottom>
          4 Fares Details
        </Typography>

        <p>Total Adult Fare: {isNaN(totalAdultFare) ? "" : totalAdultFare}</p>
        <p>
          Total Children Fare:{" "}
          {isNaN(totalChildrenFare) ? "" : totalChildrenFare}
        </p>
        <p>
          Total Infant Fare: {isNaN(totalInfantFare) ? "" : totalInfantFare}
        </p>
        <p>Grand Total: {isNaN(grandTotal) ? "" : grandTotal}</p>
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
