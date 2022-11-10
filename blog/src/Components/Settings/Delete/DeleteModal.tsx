import { Button } from '@mui/material';
import React from 'react';
import style from './deleteModal.module.css';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../../../redux/Login/thunks';
import { AnyAction } from 'redux';

type DeleteModalType = {
  onCloseHandler: () => void;
};

export const DeleteModal: React.FC<DeleteModalType> = ({ onCloseHandler }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteAccount() as unknown as AnyAction);
  };

  return (
    <Box>
      <Box className={style.title}>Are you sure to delete your account ?</Box>
      <Box className={style.buttonContainer}>
        <Button color="secondary" variant="contained" onClick={onCloseHandler}>
          Cancel
        </Button>
        <Button color="secondary" variant="contained" onClick={deleteHandler}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};
