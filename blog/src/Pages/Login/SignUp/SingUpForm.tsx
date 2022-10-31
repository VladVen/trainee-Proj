import React from "react";
import style from "../SignIn/signIn.module.css";
import {Form, Formik} from "formik";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AnyAction} from "redux";
import Box from "@mui/material/Box";
import {AppStateType} from "../../../redux/store";
import {FormField} from "../../../Components/FormField/FormField";
import signUpValidationSchema from "./validator";
import {setRegister} from "../../../redux/Login/thunks";

type SingUpFormType = {
    activeStep: number
    handleNext: () => void
    handleBack: () => void
}
const initialValues = {
    name: '', email: '', password: '', extra_details: '',
    skills: '', profession: '', details: ''
}
type initialValuesType = typeof initialValues
type setSubmittingType = (status: boolean) => void

export const SingUpForm: React.FC<SingUpFormType> = ({activeStep, handleBack, handleNext,}) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector((state: AppStateType) => state.auth.error)

    const SubmitHandler = async (values: initialValuesType, setSubmitting: setSubmittingType) => {
        await dispatch(setRegister(values) as unknown as AnyAction)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={signUpValidationSchema}
                onSubmit={(values, {setSubmitting}) => SubmitHandler(values, setSubmitting)}>
                {({isSubmitting, values, errors, setFieldValue}) => {

                    const submitValidator = () => {
                        return !values.name || !values.email || !values.password
                            || !values.extra_details || !values.skills
                            || !values.profession || !values.details;

                    }
                    return <Form>
                        <div className={style.form}>
                            {
                                activeStep === 0 && <>
                                    <FormField name={'name'} label={'Name'} error={errors.name}
                                               value={values.name} setValue={setFieldValue}/>
                                    <FormField name={'email'} label={'Email'} error={errors.email}
                                               value={values.email} setValue={setFieldValue}/>
                                    <FormField name={'password'} label={'Password'} error={errors.password}
                                               value={values.password} setValue={setFieldValue}
                                    />
                                </>

                            }
                            {
                                activeStep === 1 && <>
                                    <FormField name={'extra_details'} label={'Extra Details'} error={errors.extra_details}
                                               value={values.extra_details} setValue={setFieldValue}/>
                                </>

                            }
                            {
                                activeStep === 2 && <>
                                    <FormField name={'skills'} label={'Skills'} error={errors.skills}
                                               value={values.skills} setValue={setFieldValue}/>
                                    <FormField name={'profession'} label={'Profession'} error={errors.profession}
                                               value={values.profession} setValue={setFieldValue}/>
                                    <FormField name={'details'} label={'Details'} error={errors.details}
                                               value={values.details} setValue={setFieldValue}/>
                                </>

                            }
                            {
                                errorMessage && <Box>{errorMessage}</Box>
                            }
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-between'}}>
                                {
                                    activeStep > 0 && <Button
                                        variant="contained"
                                        onClick={handleBack}
                                        sx={{mr: 5}}
                                    >
                                        Back
                                    </Button>
                                }
                                {
                                    activeStep === 2
                                        ? <Button type="submit"
                                                  variant="contained"
                                                  disabled={isSubmitting || submitValidator()}
                                        >
                                            Submit
                                        </Button>
                                        : <Button onClick={() => handleNext()}
                                                  variant='contained'
                                                  disabled={!values.name || !values.email || !values.password || Object.keys(errors).length !== 0}
                                        >
                                            Next
                                        </Button>
                                }
                            </Box>
                        </div>
                    </Form>
                }}
            </Formik>
        </div>
    )
}