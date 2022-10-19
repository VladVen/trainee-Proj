import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import React from "react";
import {SingUpForm} from "./SingUpForm";
import {NavLink} from "react-router-dom";
import style from './signup.module.css'

const steps = ['Register', 'Extra Details', 'About you'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', marginTop: '40px'}}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    const stepProps: { completed?: boolean } = {};
                    return (
                        <Step key={label} {...stepProps} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: '30px',
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <Typography sx={{mt: 2, mb: 5}}>
                        Congratulation you are registered now
                    </Typography>
                    <Button variant='contained'><NavLink to={'/login'} className={style.link}>Go to Sign In</NavLink></Button>

                </Box>
            ) : (
                <div style={{marginTop: '30px'}}>
                    <SingUpForm activeStep={activeStep} handleNext={handleNext}
                                handleBack={handleBack}/>

                </div>
            )}
        </Box>
    );
}
