import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FirstStepForm } from './PostSteps/FirstStepForm';
import { SecondStepForm } from './PostSteps/SecondStepForm';
import style from './addPost.module.css';

type AddPostModalType = {
  onCLose: () => void;
};

const steps = ['Create Post', 'Add Photo'];

export const AddPostModal: React.FC<AddPostModalType> = ({ onCLose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box className={style.container}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step
              key={label}
              sx={{
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'secondary.main',
                },
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'secondary.main',
                },
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === 0 && <FirstStepForm onCLose={onCLose} handleNext={handleNext} />}
        {activeStep === 1 && <SecondStepForm onCLose={onCLose} />}
      </div>
    </Box>
  );
};
