import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FirstStepForm } from './PostSteps/FirstStepForm';
import { SecondStepForm } from './PostSteps/SecondStepForm';
import style from './addPost.module.css';
import { addPhoto, addPost } from '../../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { addPostValuesType } from '../../../redux/CommonDataTypes/types';
import { AppStateType } from '../../../redux/store';

type AddPostModalType = {
  onCLose: () => void;
};

const steps = ['Create Post', 'Add Photo'];

export const AddPostModal: React.FC<AddPostModalType> = ({ onCLose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const postId = useSelector((state: AppStateType) => state.posts.newPost?._id);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const firstStepSubmit = async (values: addPostValuesType) => {
    await dispatch(addPost(values) as unknown as AnyAction);
    handleNext();
  };
  const secondStepSubmit = async (file: File, id: string) => {
    await dispatch(addPhoto(file, id as string) as unknown as AnyAction);
    handleNext();
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
        {activeStep === 0 && <FirstStepForm onCLose={onCLose} onSubmit={firstStepSubmit} />}
        {activeStep === 1 && <SecondStepForm onCLose={onCLose} onSubmit={secondStepSubmit} id={postId as string} />}
      </div>
    </Box>
  );
};
