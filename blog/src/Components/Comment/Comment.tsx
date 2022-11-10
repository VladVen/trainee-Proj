import Box from '@mui/material/Box';
import { commonCommentsType } from '../../redux/CommonDataTypes/types';
import React from 'react';
import { Like } from '../Like/Like';
import { Avatar, Button } from '@mui/material';
import style from './comment.module.css';

type CommentType = {
  comment: commonCommentsType;
  commentLikeHandler: (id: string) => void;
  setReply: (reply: commonCommentsType) => void;
};

export const Comment: React.FC<CommentType> = ({ comment, commentLikeHandler, setReply }) => {
  return (
    <Box>
      <Box
        sx={{
          border: 1,
          minWidth: '10%',
          borderColor: 'secondary.main',
          p: '5px',
        }}
      >
        <Box>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Box>
        <Box className={style.comment}>{comment.text}</Box>
        <Box className={style.bottomBtn}>
          <Button color={'secondary'} onClick={() => setReply(comment)}>
            Reply
          </Button>
          <Like likes={comment.likes} id={comment._id} dispatchMethod={commentLikeHandler} />
        </Box>
      </Box>

      <Box sx={{ ml: 2 }}>
        {comment.child.map((item) => (
          <Box key={item._id}>
            <Comment comment={item} setReply={setReply} commentLikeHandler={commentLikeHandler} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
