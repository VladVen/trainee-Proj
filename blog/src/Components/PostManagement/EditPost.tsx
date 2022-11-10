import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { FirstStepForm } from '../addModal/AddPost/PostSteps/FirstStepForm';
import { useDispatch } from 'react-redux';
import { addPostValuesType, commonPostType } from '../../redux/CommonDataTypes/types';
import { editPost } from '../../redux/Posts/thunks';
import { AnyAction } from 'redux';

type EditPostType = {
  post: commonPostType;
};

export const EditPost: React.FC<EditPostType> = ({ post }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const onOpenHandler = () => {
    setOpenModal((prevState) => !prevState);
  };
  const onSubmitHandler = (values: addPostValuesType) => {
    dispatch(editPost(values, post._id) as unknown as AnyAction);
    onOpenHandler();
  };

  const values = {
    title: post.title,
    fullText: post.fullText,
    description: post.description,
  };

  return (
    <Box>
      <Box>
        <Button variant={'contained'} color={'secondary'} onClick={onOpenHandler}>
          Edit Post
        </Button>
      </Box>

      <ModalWindow open={openModal} onCloseHandler={onOpenHandler}>
        <FirstStepForm onCLose={onOpenHandler} onSubmit={onSubmitHandler} values={values} />
      </ModalWindow>
    </Box>
  );
};
