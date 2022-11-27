/* eslint-disable no-restricted-globals */
import { useFieldArray, useFormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Paper, Typography, Stack } from '@mui/material';

const ReviewBooking = () => {
  const { control } = useFormContext();
  const [grandTotal, setgrandTotal] = useState(0);
  const adultFields = useFieldArray({
    control,
    name: 'adults'
  }).fields;
  const childrenFields = useFieldArray({
    control,
    name: 'children'
  }).fields;
  const infantFields = useFieldArray({
    control,
    name: 'infants'
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
    numberOfTravelers,
    childFare,
    infantFare,
    code
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
    totalInfantFare
  ]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary
  }));

  return (
    <>
      <React.Fragment>
        <Stack spacing={2}>
          <Item>
            <Typography variant="h3" gutterBottom>
              <b>Booking Information Details</b>
            </Typography>
            <p>
              <b>From:</b> {origin}
            </p>
            <p>
              <b>To:</b> {destination}
            </p>
            <p>
              <b>Journey Date:</b> {journeyDate}
            </p>
            <p>
              <b>Return Date:</b> {returnDate}
            </p>
            <p>
              <b>Number of Passengers: </b>
              {numberOfTravelers}
            </p>
          </Item>
          <Item>
            <Typography variant="h3" gutterBottom>
              <b>Flight Information Details</b>
            </Typography>
            <p>
              <b>Airline:</b> {airline}
            </p>
            <p>
              <b>Code:</b> {code}
            </p>
            <p>
              <b>Class:</b> {cabin}
            </p>
            <p>
              <b>Total Adult Fare:</b> {totalAdultFare}
            </p>
            <p>
              <b>Total Children Fare:</b> {totalChildrenFare}
            </p>
            <p>
              <b>Total Infant Fare:</b> {totalInfantFare}
            </p>
            <p>
              <b>sales Commission:</b> {salesCommission}
            </p>
            <p>
              <b>Taxes:</b> {taxes}
            </p>
            <p>
              <b>Discount:</b> {discount}
            </p>
          </Item>

          <Item>
            <Typography variant="h3" gutterBottom>
              <b>Passenger Details</b>
            </Typography>

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
          </Item>
          <Item>
            <Typography variant="h3" gutterBottom>
              <b>Passenger Details</b>
            </Typography>

            <p>
              <b> Total Adult Fare:</b>{' '}
              {isNaN(totalAdultFare) ? '' : totalAdultFare}
            </p>
            <p>
              <b>Total Children Fare:</b>{' '}
              {isNaN(totalChildrenFare) ? '' : totalChildrenFare}
            </p>
            <p>
              <b> Total Infant Fare:</b>{' '}
              {isNaN(totalInfantFare) ? '' : totalInfantFare}
            </p>
            <p>
              <b>Grand Total: </b>
              {isNaN(grandTotal) ? '' : grandTotal}
            </p>
          </Item>
        </Stack>
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
