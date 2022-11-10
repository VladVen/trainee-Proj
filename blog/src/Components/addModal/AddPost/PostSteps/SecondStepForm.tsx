import Box from '@mui/material/Box';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '@mui/material';
import { Form, Formik, FormikValues } from 'formik';
import style from '../addPost.module.css';

const initialValues = { file: '' };

type SecondStepFormType = {
  onCLose: () => void;
  onSubmit: (file: File, id: string) => void;
  id: string;
};

export const SecondStepForm: React.FC<SecondStepFormType> = ({ onCLose, onSubmit, id }) => {
  const [image, setImage] = useState<null | string>(null);

  const submitHandler = async (values: FormikValues, setSubmitting: (status: boolean) => void) => {
    await onSubmit(values.file, id);
    setSubmitting(false);
    onCLose();
  };

  return (
    <Box className={style.step2form}>
      {image && <img src={image as string} alt={'photo'} className={style.img} />}

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => submitHandler(values, setSubmitting)}
      >
        {({ isSubmitting, setFieldValue, resetForm }) => {
          const clearHandler = () => {
            resetForm();
            setImage(null);
          };

          const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setFieldValue('file', event.currentTarget.files && event.currentTarget.files[0]);
            setImage(event.currentTarget.files && URL.createObjectURL(event.currentTarget.files[0]));
          };

          return (
            <Form>
              <Box className={style.buttons2}>
                <input
                  id="file"
                  name="file"
                  type="file"
                  hidden
                  onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event)}
                />

                <label htmlFor="file" hidden={!!image}>
                  <Button variant="contained" color="secondary" component="span">
                    Upload
                  </Button>
                </label>

                {image && (
                  <Button variant="contained" color="secondary" onClick={clearHandler}>
                    Clear
                  </Button>
                )}

                {image ? (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant={'contained'}
                    color={'secondary'}
                    sx={{ ml: 5 }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button variant={'contained'} color={'secondary'} sx={{ ml: 5 }} onClick={onCLose}>
                    Close
                  </Button>
                )}
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
