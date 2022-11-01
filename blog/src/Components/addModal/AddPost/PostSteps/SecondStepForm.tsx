import Box from '@mui/material/Box';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '@mui/material';
import { Form, Formik, FormikValues } from 'formik';
import style from '../addPost.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../../../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import { AppStateType } from '../../../../redux/store';

const initialValues = { file: '' };

type SecondStepFormType = {
  onCLose: () => void;
};

export const SecondStepForm: React.FC<SecondStepFormType> = ({ onCLose }) => {
  const [image, setImage] = useState<null | string>(null);
  const dispatch = useDispatch();
  const postId = useSelector((state: AppStateType) => state.posts.newPost?._id);

  const submitHandler = async (values: FormikValues, setSubmitting: (status: boolean) => void) => {
    await dispatch(addPhoto(values.file, postId as string) as unknown as AnyAction);
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
            <Box className={style.buttons2}>
              <Form>
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
                    Skip
                  </Button>
                )}
              </Form>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};
