import Box from '@mui/material/Box';
import style from '../commentForm.module.css';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Button } from '@mui/material';
import React from 'react';
import { EditOutlined } from '@mui/icons-material';

type ReplyType = {
  text: string;
  cancelAction: () => void;
  method: 'reply' | 'edit';
};

export const ReplyEdit: React.FC<ReplyType> = ({ text, cancelAction, method }) => {
  return (
    <Box>
      <Box className={style.replyContainer}>
        {method === 'reply' ? (
          <Box className={style.titleIcon}>
            Reply <ReplyIcon />
          </Box>
        ) : (
          <Box className={style.titleIcon}>
            Edit <EditOutlined />
          </Box>
        )}
        <Button color={'secondary'} onClick={cancelAction}>
          Cancel
        </Button>
      </Box>
      <Box className={style.comment}>
        <Avatar />
        <div>{text}</div>
      </Box>
    </Box>
  );
};
