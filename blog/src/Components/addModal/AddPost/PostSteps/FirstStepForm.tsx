import Box from '@mui/material/Box';
import { Form, Formik } from 'formik';
import style from '../addPost.module.css';
import { Button } from '@mui/material';
import React from 'react';
import { addPost } from '../../../../redux/Posts/thunks';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import addPostValidationSchema from '../validator';
import { FormField } from '../../../FormField/FormField';

type AddPostModalType = {
  onCLose: () => void;
  handleNext: () => void;
};
const initialValues = { title: '', fullText: '', description: '' };
type initialValuesType = typeof initialValues;

export const FirstStepForm: React.FC<AddPostModalType> = ({ onCLose, handleNext }) => {
  const dispatch = useDispatch();

  const onSubmitHandler = async (values: initialValuesType, setSubmitting: (status: boolean) => void) => {
    await dispatch(addPost(values) as unknown as AnyAction);
    setSubmitting(false);
    handleNext();
  };

  return (
    <Box sx={{ p: 1 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={addPostValidationSchema}
        onSubmit={(values, { setSubmitting }) => onSubmitHandler(values, setSubmitting)}
      >
        {({ isSubmitting, values, touched, errors, setFieldValue, setFieldTouched }) => {
          const disableHandler = () => {
            return !values.title || !values.fullText || !values.description;
          };
          const setValue = (name: string, value: string) => {
            setFieldTouched(name, true);
            setFieldValue(name, value);
          };

          return (
            <Form>
              <div className={style.form}>
                <FormField
                  name={'title'}
                  label={'Title'}
                  error={errors.title}
                  touched={touched.title}
                  value={values.title}
                  setValue={setValue}
                  color={'text'}
                />
                <FormField
                  name={'description'}
                  label={'Description'}
                  error={errors.description}
                  touched={touched.description}
                  value={values.description}
                  setValue={setValue}
                  color={'text'}
                />
                <FormField
                  name={'fullText'}
                  label={'Main Text'}
                  error={errors.fullText}
                  touched={touched.fullText}
                  value={values.fullText}
                  setValue={setValue}
                  color={'text'}
                />

                <Box className={style.buttons}>
                  <Button variant="contained" onClick={onCLose} color={'secondary'} disabled={isSubmitting}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color={'secondary'}
                    disabled={isSubmitting || disableHandler() || Object.keys(errors).length !== 0}
                  >
                    Submit
                  </Button>
                </Box>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
