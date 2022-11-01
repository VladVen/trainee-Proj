import { Modal, Paper } from '@mui/material';
import React, { useRef } from 'react';
import style from './modalWindow.module.css';
import { useOnClickOutside } from 'usehooks-ts';

type DeleteModalType = {
  open: boolean;
  onCloseHandler: () => void;
  children: React.ReactNode;
};

export const ModalWindow: React.FC<DeleteModalType> = ({ open, onCloseHandler, children }) => {
  const ref = useRef(null);

  useOnClickOutside(ref, onCloseHandler);

  return (
    <Modal open={open} onClose={onCloseHandler}>
      <Paper
        ref={ref}
        className={style.paper}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          event.stopPropagation();
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
};
