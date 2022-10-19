import React, {ChangeEvent} from "react";
import style from "../SignIn/loginPage.module.css";
import {Field, Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setRegister} from "../../../redux/reducers/authReducer";
import {AnyAction} from "redux";
import Box from "@mui/material/Box";
import {AppStateType} from "../../../redux/store";

type SingUpFormType = {
    activeStep: number
    handleNext: () => void
    handleBack: () => void
}


export const SingUpForm: React.FC<SingUpFormType> = ({activeStep, handleBack, handleNext,}) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector((state: AppStateType) => state.auth.error)

    return (
        <div>
            <Formik
                initialValues={{
                    name: '', email: '', password: '', extra_details: '',
                    skills: '', profession: '', details: ''
                }}
                onSubmit={async (values, {setSubmitting}) => {
                    await dispatch(setRegister(values) as unknown as AnyAction)
                    setSubmitting(false)
                    if (errorMessage !== null) {
                        handleNext()
                    }
                }}>
                {({isSubmitting, values, setFieldValue}) => {
                    const onChangeHandler = (value: string, e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue(value, e.currentTarget.value)
                    }
                    const submitValidator = () => {
                        return !values.name || !values.email || !values.password
                            || !values.extra_details || !values.skills
                            || !values.profession || !values.details;

                    }
                    return <Form>
                        <div className={style.form}>
                            {
                                activeStep === 0 && <>
                                    <Field name="name" component={TextField}
                                           id="name" label="Name"
                                           required
                                           fullWidth
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('name', e)}
                                           value={values.name}
                                           variant="outlined"/>
                                    <Field name="email" component={TextField}
                                           id="email" label="Email"
                                           required
                                           fullWidth
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('email', e)}
                                           value={values.email}
                                           variant="outlined"/>


                                    <Field name="password" component={TextField}
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('password', e)}
                                           value={values.password}
                                           id="password"
                                           required
                                           fullWidth
                                           type="password"
                                           label="Password"
                                           inputProps={{maxLength: 10}}
                                           variant="outlined"/>
                                </>

                            }
                            {
                                activeStep === 1 && <>
                                    <Field name="extra_details" component={TextField}
                                           id="extra_details" label="Extra Details"
                                           required
                                           fullWidth
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('extra_details', e)}
                                           value={values.extra_details}
                                           variant="outlined"/>
                                </>

                            }
                            {
                                activeStep === 2 && <>
                                    <Field name="skills" component={TextField}
                                           id="skills" label="Skills"
                                           required
                                           fullWidth
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('skills', e)}
                                           value={values.skills}
                                           variant="outlined"/>
                                    <Field name="profession" component={TextField}
                                           id="profession" label="Profession"
                                           required
                                           fullWidth
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('profession', e)}
                                           value={values.profession}
                                           variant="outlined"/>
                                    <Field name="details" component={TextField}
                                           id="details" label="Details"
                                           required
                                           fullWidth
                                           onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler('details', e)}
                                           value={values.details}
                                           variant="outlined"/>
                                </>

                            }
                            {
                                errorMessage && <Box>{errorMessage}</Box>
                            }
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-between'}}>
                                {
                                    activeStep > 0 && <Button
                                        variant="contained"
                                        disabled={activeStep === 0}
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
                                                  disabled={!values.name || !values.email || !values.password}
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