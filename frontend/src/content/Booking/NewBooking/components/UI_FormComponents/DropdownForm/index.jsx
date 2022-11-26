/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from "react";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { Box, FormControl } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

const options = ["Traveler"];

export default function PassengerDropdown({ register, ticketIndex }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [adultCounter, setAdultCounter] = useState(1);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [infantCounter, setInfantCounter] = useState(0);

  const [cabinClass, setCabinClass] = useState("economy");

  const [travelers, setTravelers] = useState(
    adultCounter + childrenCounter + infantCounter
  );

  React.useEffect(() => {
    setTravelers(adultCounter + childrenCounter + infantCounter);
  }, [adultCounter, cabinClass, childrenCounter, infantCounter]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        ref={anchorRef}
        style={{
          border: "none",
          outline: "none",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="split button"
      >
        <div
          style={{
            background: "white",
            border: "1px solid black",
            borderStyle: "dashed",
            marginLeft: "10px",
            borderRadius: "10px",
            alignItems: "center",
            cursor: "pointer",
            justifyContent: "center",
            outline: "none",
            display: "flex",
            padding: "4px 15px",
          }}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <p style={{ fontWeight: 600 }}>{travelers}</p>
          {options[selectedIndex]}
        </div>
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <div>
                  <Paper variant="outlined">
                    <div>
                      <Box
                        style={{
                          padding: "8px 15px",
                          borderBottom: "1px solid #dbdde0",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "14px",
                            marginLeft: "4px",
                            padding: "5px",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              paddingTop: 5,
                              paddingBottom: "3px",
                              fontWeight: 200,
                              fontSize: "13px",
                            }}
                          >
                            Adults
                          </p>
                          <span
                            style={{
                              fontWeight: 400,
                              color: "#6e6b7b",
                              fontSize: "12.5px",
                            }}
                          >
                            12 Years and above
                          </span>
                        </div>
                        <div style={{ display: "flex" }}>
                          <RemoveCircleOutlineRoundedIcon
                          // onClick={() => setAdultCounter(adultCounter - 1)}
                          />
                          <input
                            // value={adultCounter}
                            // onChange={(e) => setAdultCounter(e.target.value)}
                            {...register(
                              `passengers.numberOfAdults`
                            )}
                            style={{
                              backgroundColor: "white",
                              fontSize: "0.1rem!important",
                              border: "none",
                              outline: "none",
                              lineHeight: "14px",
                              width: "20px",
                            }}
                          />
                          <AddCircleOutlineRoundedIcon
                          // onClick={() => setAdultCounter(adultCounter + 1)}
                          />
                        </div>
                      </Box>
                    </div>
                    <div>
                      <Box
                        style={{
                          padding: "8px 15px",
                          borderBottom: "1px solid #dbdde0",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "14px",
                            marginLeft: "4px",
                            padding: "5px",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              paddingTop: 5,
                              paddingBottom: "3px",
                              fontWeight: 200,
                              fontSize: "13px",
                            }}
                          >
                            Children
                          </p>
                          <span
                            style={{
                              fontWeight: 400,
                              color: "#6e6b7b",
                              fontSize: "12.5px",
                            }}
                          >
                            2 to 11 years
                          </span>
                        </div>
                        <div style={{ display: "flex" }}>
                          <RemoveCircleOutlineRoundedIcon
                          // onClick={() =>
                          //   setChildrenCounter(childrenCounter - 1)
                          // }
                          />
                          <input
                            // value={childrenCounter}
                            // onChange={(e) => setChildrenCounter(e.target.value)}
                            {...register(
                              `passengers.numberOfChildren`
                            )}
                            style={{
                              backgroundColor: "white",
                              fontSize: "0.1rem!important",
                              border: "none",
                              outline: "none",
                              lineHeight: "14px",
                              width: "20px",
                            }}
                          />
                          <AddCircleOutlineRoundedIcon
                          // onClick={() =>
                          //   setChildrenCounter(childrenCounter + 1)
                          // }
                          />
                        </div>
                      </Box>
                    </div>
                    <div>
                      <Box
                        style={{
                          padding: " 8px 15px",
                          borderBottom: "1px solid #dbdde0",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            lineHeight: "14px",
                            marginLeft: "4px",
                            padding: "5px",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              paddingTop: 5,
                              paddingBottom: "3px",
                              fontWeight: 200,
                              fontSize: "13px",
                            }}
                          >
                            Infants
                          </p>
                          <span
                            style={{
                              fontWeight: 400,
                              color: "#6e6b7b",
                              fontSize: "12.5px",
                            }}
                          >
                            Below 2 years
                          </span>
                        </div>
                        <div style={{ display: "flex" }}>
                          <RemoveCircleOutlineRoundedIcon
                            onClick={() => setInfantCounter(infantCounter - 1)}
                          />
                          <input
                            // value={infantCounter}
                            // onChange={(e) => setInfantCounter(e.target.value)}
                            {...register(
                              `passengers.numberOfInfants`
                            )}
                            style={{
                              backgroundColor: "white",
                              fontSize: "0.1rem!important",
                              border: "none",
                              outline: "none",
                              lineHeight: "14px",
                              width: "20px",
                            }}
                          />
                          <AddCircleOutlineRoundedIcon
                            onClick={() => setInfantCounter(infantCounter + 1)}
                          />
                        </div>
                      </Box>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        style={{
                          marginLeft: "18px",
                          marginBottom: "2rem",
                          marginTop: "10px",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 100,
                            fontSize: "16px",
                            margin: 0,
                            marginLeft: "5px",
                          }}
                        >
                          Class
                        </p>
                        <FormControl style={{ marginLeft: "5px" }}>
                          <label htmlFor="economy">
                            <input
                              // {...register(`tickets.${ticketIndex}.cabin`)}
                              {...register(`passengers.cabin`)}
                              type="radio"
                              value="economy"
                              id="economy"
                            />
                            Economy
                          </label>
                          <label htmlFor="business">
                            <input
                              {...register(`passengers.cabin`)}
                              type="radio"
                              value="business"
                              id="business"
                            />
                            Business
                          </label>
                          {/* <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="economy"
                            onChange={(e) => console.log(e.target.value)}
                          >
                            <FormControlLabel
                              value="economy"
                              className="radioButtonLabels"
                              control={<Radio />}
                              label="Economy"
                            />
                            <FormControlLabel
                              value="business"
                              className="radioButtonLabels"
                              control={<Radio />}
                              label="Business"
                            />
                          </RadioGroup> */}
                        </FormControl>
                      </Box>
                      <Button
                        style={{ marginTop: "10px" }}
                        onClick={handleClose}
                      >
                        Done
                      </Button>
                    </div>
                  </Paper>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
