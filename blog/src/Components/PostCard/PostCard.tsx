import { Paper } from '@mui/material';
import { commonPostType } from '../../redux/CommonDataTypes/types';
import React, { useState } from 'react';
import style from './postCard.module.css';
import Box from '@mui/material/Box';
import altPhoto from '../../assets/images/postNoImage.jpeg';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { PostCardModal } from './PostCardModal/PostCardModal';
import { Like } from '../Like/Like';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { addCommentLike, addLike, getCurrentPost } from '../../redux/Posts/thunks';

type PostCardType = {
  post: commonPostType;
  altStyle?: boolean;
};

export const PostCard: React.FC<PostCardType> = ({ post, altStyle = false }) => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const onOpenHandler = () => {
    setOpenModal((prevState) => !prevState);
  };

  const postLikeHandler = async (id: string) => {
    await dispatch(addLike(id) as unknown as AnyAction);
    await dispatch(getCurrentPost(id) as unknown as AnyAction);
  };
  const postModalLikeHandler = async (id: string) => {
    await dispatch(addLike(id) as unknown as AnyAction);
    await dispatch(getCurrentPost(id) as unknown as AnyAction);
  };
  const commentLikeHandler = async (id: string) => {
    await dispatch(addCommentLike(id) as unknown as AnyAction);
  };

  const image = post.image ? `http://test-blog-api.ficuslife.com${post.image}` : altPhoto;

  return (
    <Box>
      <Paper className={altStyle ? style.paperAlt : style.paper} onClick={onOpenHandler}>
        <Box className={style.text}>{post.title}</Box>
        <Box>
          <img src={image} alt={'photo'} className={style.img} />
        </Box>
        <Box className={style.bottomSection}>
          <Box className={style.text}>{post.description}</Box>
          <Like likes={post.likes} id={post._id} dispatchMethod={postLikeHandler} />
        </Box>
      </Paper>
      <ModalWindow open={openModal} onCloseHandler={onOpenHandler}>
        <PostCardModal
          onCloseHandler={onOpenHandler}
          id={post._id}
          postLikeHandler={postModalLikeHandler}
          commentLikeHandler={commentLikeHandler}
        />
      </ModalWindow>
    </Box>
  );
};
