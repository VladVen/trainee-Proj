import { Button } from '@mui/material';
import React from 'react';
import style from './deleteModal.module.css';
import Box from '@mui/material/Box';

type DeleteModalType = {
  title: string;
  onCloseHandler: () => void;
  deleteHandler: () => void;
};

export const DeleteModal: React.FC<DeleteModalType> = ({ title, onCloseHandler, deleteHandler }) => {
  return (
    <Box>
      <Box className={style.title}>{title}</Box>
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
