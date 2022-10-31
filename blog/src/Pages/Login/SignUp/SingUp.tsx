import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, {useState} from "react";
import {SingUpForm} from "./SingUpForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Navigate} from "react-router-dom";

const steps = ['Register', 'Extra Details', 'About you'];

const containerStyles = {display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', marginTop: '40px'};

export const SingUp = () => {
    const [activeStep, setActiveStep] = useState(0);

    const authData = useSelector((state: AppStateType) => state.auth.authData)

    if (authData) {
        return <Navigate to={'/blog'}/>
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={containerStyles}>
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
                <div style={{marginTop: '30px'}}>
                    <SingUpForm activeStep={activeStep} handleNext={handleNext}
                                handleBack={handleBack}/>

                </div>
        </Box>
    );
}
