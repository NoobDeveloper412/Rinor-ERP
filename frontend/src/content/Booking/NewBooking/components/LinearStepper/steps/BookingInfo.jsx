import {
  Box,
  Container,
  Grid,
  Paper,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PassengerDropdown from '../../UI_FormComponents/DropdownForm';

const BookingInfo = () => {
  const {
    register,
    setValue,
    unregister,
    control,
    formState: { errors }
  } = useFormContext();
  // const wholeFormVal = useFormContext();
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [oneWayTrip, setOneWayTrip] = useState(true);
  const [multiCityTrip, setMultiCityTrip] = useState(false);

  const { trip, totalTickets } = control._formValues;

  const handleFlightType = (value) => {
    if (value === 'oneWayTrip') {
      setOneWayTrip(true);
      setMultiCityTrip(false);
      // resetField("tickets");
      unregister('pnrNumber');
    } else if (value === 'roundWayTrip') {
      setOneWayTrip(false);
      // resetField("tickets");
      unregister('pnrNumber');
      setMultiCityTrip(false);
    } else {
      setOneWayTrip(false);
      setMultiCityTrip(true);
    }
  };

  const handleTicketFormPopulate = () => {
    setNumberOfTickets(numberOfTickets + 1);
    setValue('totalTickets', numberOfTickets + 1);
  };

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Booking Details
        </Typography>

        <div
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between'
          }}
        >
          <div>
            <FormControl
              style={{ marginLeft: '5px' }}
              onChange={(e) => handleFlightType(e.target.value)}
            >
              <RadioGroup >
                <div style={{display:'flex'}}>

                <label htmlFor="oneWayTrip">
                  <input
                    {...register(`trip`)}
                    type="radio"
                    value="oneWayTrip"
                    id="oneWayTrip"
                  />
                  One Way Trip
                </label>
                <label htmlFor="roundWayTrip">
                  <input
                    {...register(`trip`)}
                    type="radio"
                    value="roundWayTrip"
                    id="roundWayTrip"
                  />
                  Round Way Trip
                </label>
                <label htmlFor="multiCityTrip">
                  <input
                    {...register(`trip`)}
                    type="radio"
                    value="multiCityTrip"
                    id="multiCityTrip"
                  />
                  Multi-City Trip
                </label>
                </div>
              </RadioGroup>
            </FormControl>
            <Grid container spacing={1} style={{ marginTop: '15px' }} key={0}>
              <Grid item xs={1.5}>
                <TextField
                  label="From"
                  variant="outlined"
                  {...register(`tickets.defaultTicket.origin`)}
                  helperText={
                    errors.origin?.message ? errors.origin.message : ''
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={1.7}>
                <TextField
                  label="Destination"
                  variant="outlined"
                  {...register(`tickets.defaultTicket.destination`)}
                  helperText={
                    errors.destination?.message
                      ? errors.destination.message
                      : ''
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Journey Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  {...register(`tickets.defaultTicket.journeyDate`)}
                  helperText={
                    errors.journeyDate?.message
                      ? errors.journeyDate.message
                      : ''
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid
                item
                xs={3}
                hidden={!(trip !== 'oneWayTrip' || oneWayTrip === false)}
              >
                <TextField
                  label="Return Date"
                  type="date"
                  disabled={trip === 'oneWayTrip'}
                  variant="outlined"
                  fullWidth
                  {...register(`tickets.defaultTicket.returnDate`)}
                  helperText={
                    errors.returnDate?.message && trip !== 'oneWayTrip'
                      ? errors.returnDate.message
                      : ''
                  }
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <PassengerDropdown
                register={register}
                ticketIndex="defaultTicket"
              />
            </Grid>
            {trip === 'multiCityTrip'
              ? Array.from({ length: totalTickets }).map((_, index) => (
                  <Grid
                    container
                    spacing={1}
                    style={{ marginTop: '15px' }}
                    key={index}
                  >
                    <Grid item xs={1.5}>
                      <TextField
                        label="From"
                        variant="outlined"
                        {...register(`tickets.${index}.origin`)}
                        helperText={
                          errors.origin?.message ? errors.origin.message : ''
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1.7}>
                      <TextField
                        label="Destination"
                        variant="outlined"
                        {...register(`tickets.${index}.destination`)}
                        helperText={
                          errors.destination?.message
                            ? errors.destination.message
                            : ''
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="Journey Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        {...register(`tickets.${index}.journeyDate`)}
                        helperText={
                          errors.journeyDate?.message
                            ? errors.journeyDate.message
                            : ''
                        }
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={3}
                      hidden={!(trip !== 'oneWayTrip' || oneWayTrip === false)}
                    >
                      <TextField
                        label="Return Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        {...register(`tickets.${index}.returnDate`)}
                        helperText={
                          errors.returnDate?.message && trip !== 'oneWayTrip'
                            ? errors.returnDate.message
                            : ''
                        }
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                    {/* <PassengerDropdown
                      register={register}
                      ticketIndex={index}
                    /> */}
                  </Grid>
                ))
              : ''}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '2.5rem'
            }}
          >
            <Grid item xs={3} hidden={trip !== 'multiCityTrip'} style={{marginLeft:'-15px', marginBottom:'10px'}}>
              <Container>
                <Paper elevation={2}>
                  <Box
                    onClick={() => handleTicketFormPopulate()}
                    style={{
                      color: '#494A4B',
                      padding: '10px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      marginTop: '5px',
                      marginBottom: '5px'
                    }}
                  >
                    Add another city{' '}
                    <ControlPointIcon style={{ marginLeft: '10px' }} />
                  </Box>
                </Paper>
              </Container>
            </Grid>

            <Grid item xs={1.5}>
              <Controller
                name="pnrNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="PNR"
                    {...field}
                    variant="outlined"
                    fullWidth
                    helperText={
                      errors.pnrNumber?.message ? errors.pnrNumber.message : ''
                    }
                  />
                )}
              />
            </Grid>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default BookingInfo;
