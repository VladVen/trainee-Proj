import React from 'react';
import style from '../SignIn/signIn.module.css';
import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import Box from '@mui/material/Box';
import { AppStateType } from '../../../redux/store';
import { FormField } from '../../../Components/FormField/FormField';
import signUpValidationSchema from './validator';
import { setRegister } from '../../../redux/Login/thunks';

type SingUpFormType = {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
};
const initialValues = {
  name: '',
  email: '',
  password: '',
  extra_details: '',
  skills: '',
  profession: '',
  details: '',
};
type initialValuesType = typeof initialValues;
type setSubmittingType = (status: boolean) => void;

export const SingUpForm: React.FC<SingUpFormType> = ({ activeStep, handleBack, handleNext }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state: AppStateType) => state.auth.error);

  const SubmitHandler = async (values: initialValuesType, setSubmitting: setSubmittingType) => {
    await dispatch(setRegister(values) as unknown as AnyAction);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, { setSubmitting }) => SubmitHandler(values, setSubmitting)}
      >
        {({ isSubmitting, values, errors, touched, setFieldValue, setFieldTouched }) => {
          const submitValidator = () => {
            return (
              !values.name ||
              !values.email ||
              !values.password ||
              !values.extra_details ||
              !values.skills ||
              !values.profession ||
              !values.details
            );
          };

          const setValue = (name: string, value: string) => {
            setFieldTouched(name, true);
            setFieldValue(name, value);
          };

          return (
            <Form>
              <div className={style.form}>
                {activeStep === 0 && (
                  <>
                    <FormField
                      name={'name'}
                      label={'Name'}
                      error={errors.name}
                      touched={touched.name}
                      value={values.name}
                      setValue={setValue}
                    />
                    <FormField
                      name={'email'}
                      label={'Email'}
                      error={errors.email}
                      touched={touched.email}
                      value={values.email}
                      setValue={setValue}
                    />
                    <FormField
                      name={'password'}
                      label={'Password'}
                      error={errors.password}
                      touched={touched.password}
                      value={values.password}
                      setValue={setValue}
                    />
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <FormField
                      name={'extra_details'}
                      label={'Extra Details'}
                      error={errors.extra_details}
                      touched={touched.extra_details}
                      value={values.extra_details}
                      setValue={setValue}
                    />
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <FormField
                      name={'skills'}
                      label={'Skills'}
                      error={errors.skills}
                      touched={touched.skills}
                      value={values.skills}
                      setValue={setValue}
                    />
                    <FormField
                      name={'profession'}
                      label={'Profession'}
                      error={errors.profession}
                      touched={touched.profession}
                      value={values.profession}
                      setValue={setValue}
                    />
                    <FormField
                      name={'details'}
                      label={'Details'}
                      error={errors.details}
                      touched={touched.details}
                      value={values.details}
                      setValue={setValue}
                    />
                  </>
                )}
                {errorMessage && <Box>{errorMessage}</Box>}
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-between' }}>
                  {activeStep > 0 && (
                    <Button variant="contained" onClick={handleBack} sx={{ mr: 5 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === 2 ? (
                    <Button type="submit" variant="contained" disabled={isSubmitting || submitValidator()}>
                      Submit
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleNext()}
                      variant="contained"
                      disabled={!values.name || !values.email || !values.password || Object.keys(errors).length !== 0}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
