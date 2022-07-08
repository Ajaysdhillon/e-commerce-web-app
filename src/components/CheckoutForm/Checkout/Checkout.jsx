import React from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

const Checkout = () => {
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.paper}>
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
      </main>
    </>
  );
};

export default Checkout;
