import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { makeStyles } from 'tss-react/mui';
import { Grid } from '@mui/material';

const steps = ['Shopping Cart', 'Checkout & Delivery Options', 'Successfully Purchased'];

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      padding: "190px 0px 22px",
      height: "100%",
      maxWidth: "1200px",
      letterSpacing: "0.02em",
      fontStyle: "normal",
      fontWeight: 'lighter',
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    }
  };
});


export default function ShoppingCartStep() {
  const { classes, cx } = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '60px', marginBottom: '40px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              {/* {
                  label === 'Shopping Cart' && <ArrowRightAltIcon sx={{ color: '#BABABA', fontSize: '25px', width: '21.18vh' }} />
                }
                {
                  label === 'Checkout & Delivery Options' && <ArrowRightAltIcon sx={{ color: '#BABABA', fontSize: '25px', width: '21.18vh' }} />
                } */}
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
        </React.Fragment>
      ) : (
        <React.Fragment>
        </React.Fragment>
      )}
    </Box>
  );
}