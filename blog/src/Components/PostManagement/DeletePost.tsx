import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { deletePost } from '../../redux/Posts/thunks';

type DeletePostType = {
  postId: string;
  closeUpperModal: () => void;
};

export const DeletePost: React.FC<DeletePostType> = ({ postId, closeUpperModal }) => {
  const dispatch = useDispatch();

  const [openDelete, setOpenDelete] = useState(false);

  const onOpenDeleteHandler = () => {
    setOpenDelete((prevState) => !prevState);
  };

  const deleteHandler = () => {
    dispatch(deletePost(postId) as unknown as AnyAction);
    closeUpperModal();
  };

  const title = 'Are you sure to delete this post ?';

  return (
    <Box>
      <Button variant={'contained'} color={'secondary'} onClick={onOpenDeleteHandler}>
        Delete Post
      </Button>
      <ModalWindow open={openDelete} onCloseHandler={onOpenDeleteHandler}>
        <DeleteModal title={title} onCloseHandler={onOpenDeleteHandler} deleteHandler={deleteHandler} />
      </ModalWindow>
    </Box>
  );
};
