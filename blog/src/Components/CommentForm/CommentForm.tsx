import { Form, Formik, FormikValues } from 'formik';
import { Button } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { FormField } from '../FormField/FormField';
import style from './commentForm.module.css';
import { commonCommentsType } from '../../redux/CommonDataTypes/types';
import { useDispatch } from 'react-redux';
import { addNewComment, editComment } from '../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import addCommentValidationSchema from './validator';
import { ReplyEdit } from './ReplyEdit/ReplyEdit';

type setSubmittingType = (status: boolean) => void;

type CommentFormType = {
  onCloseHandler: () => void;
  reply: commonCommentsType | null;
  setReply: (reply: null) => void;
  edit: commonCommentsType | null;
  setEdit: (reply: null) => void;
  postId: string;
};

export const CommentForm: React.FC<CommentFormType> = ({ onCloseHandler, reply, setReply, edit, setEdit, postId }) => {
  const dispatch = useDispatch();

  const onSubmitHandler = async (values: FormikValues, setSubmitting: setSubmittingType, resetForm: any) => {
    if (edit) {
      await dispatch(editComment(edit._id, values.comment) as unknown as AnyAction);
      setEdit(null);
    } else {
      await dispatch(addNewComment(postId, values.comment, reply?._id || null) as unknown as AnyAction);
      setReply(null);
    }
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ comment: '' }}
      validationSchema={addCommentValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => onSubmitHandler(values, setSubmitting, resetForm)}
    >
      {({ isSubmitting, values, errors, setFieldValue, touched }) => (
        <Form>
          {reply && <ReplyEdit text={reply.text} cancelAction={() => setReply(null)} method={'reply'} />}
          {edit && <ReplyEdit text={edit.text} cancelAction={() => setEdit(null)} method={'edit'} />}
          <Box>
            <FormField
              name={'comment'}
              label={'Comment'}
              error={errors.comment}
              multiline
              touched={touched.comment}
              color={'text'}
              value={values.comment}
              setValue={setFieldValue}
            />

            <Box className={style.btnContainer}>
              <Button color={'secondary'} variant={'contained'} onClick={onCloseHandler}>
                Close
              </Button>

              <Button type="submit" color={'secondary'} variant="contained" disabled={isSubmitting || !values.comment}>
                Send
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
