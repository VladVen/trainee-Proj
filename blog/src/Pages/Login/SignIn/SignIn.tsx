import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { AnyAction } from 'redux';
import { AppStateType } from '../../../redux/store';
import { Button } from '@mui/material';
import React from 'react';
import style from './signIn.module.css';
import { Navigate, NavLink } from 'react-router-dom';
import { FormField } from '../../../Components/FormField/FormField';
import Box from '@mui/material/Box';
import signInValidationSchema from './validator';
import { setLogIn } from '../../../redux/Login/thunks';
import { loginActions } from '../../../redux/Login/actions';

type ValuesType = {
  email: string;
  password: string;
};
type setSubmittingType = (status: boolean) => void;

export const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: AppStateType) => state.auth.error);
  const authData = useSelector((state: AppStateType) => state.auth.authData);

  if (authData) {
    return <Navigate to={'/blog'} />;
  }

  const onSubmitHandler = async (values: ValuesType, setSubmitting: setSubmittingType) => {
    await dispatch(setLogIn(values.email, values.password) as unknown as AnyAction);
    setSubmitting(false);
  };
  const errorCleaner = () => {
    dispatch(loginActions.clearError() as unknown as AnyAction);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>Sing In</div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={signInValidationSchema}
        onSubmit={async (values, { setSubmitting }) => onSubmitHandler(values, setSubmitting)}
      >
        {({ isSubmitting, values, errors, setFieldValue }) => (
          <Form>
            <div className={style.form}>
              <FormField
                name={'email'}
                label={'Email'}
                error={errors.email}
                value={values.email}
                setValue={setFieldValue}
              />
              <FormField
                name={'password'}
                label={'Password'}
                error={errors.password}
                value={values.password}
                setValue={setFieldValue}
                inputProps={{ maxLength: 10 }}
              />
              <div>{error && <div>{error}</div>}</div>

              <Box>
                Don't have account ?
                <Button variant="contained" size="small" sx={{ ml: '5px' }}>
                  <NavLink to={'/signup'} className={style.link} onClick={errorCleaner}>
                    {' '}
                    Sign it for free
                  </NavLink>
                </Button>
              </Box>

              <Box sx={{ mt: '20px' }}>
                <Button type="submit" variant="contained" disabled={isSubmitting}>
                  Submit
                </Button>
              </Box>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
