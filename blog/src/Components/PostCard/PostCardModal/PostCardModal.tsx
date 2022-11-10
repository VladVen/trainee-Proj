import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import altPhoto from '../../../assets/images/postNoImage.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { Preloader } from '../../Preloader/Preloader';
import { getCurrentComments, getCurrentPost } from '../../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import { postsActions } from '../../../redux/Posts/actions';
import { Like } from '../../Like/Like';
import { Comment } from '../../Comment/Comment';
import { PhotoChange } from '../PhotoChange/PhotoChange';
import { CommentForm } from '../../CommentForm/CommentForm';
import { commonCommentsType } from '../../../redux/CommonDataTypes/types';
import style from './postCardModal.module.css';
import { EditPost } from '../../PostManagement/EditPost';
import { DeletePost } from '../../PostManagement/DeletePost';

type PostCardModalType = {
  onCloseHandler: () => void;
  id: string;
  postLikeHandler: (id: string) => void;
  commentLikeHandler: (id: string) => void;
};

export const PostCardModal: React.FC<PostCardModalType> = ({
  onCloseHandler,
  id,
  postLikeHandler,
  commentLikeHandler,
}) => {
  const dispatch = useDispatch();

  const myId = useSelector((state: AppStateType) => state.auth.authData?._id);
  const post = useSelector((state: AppStateType) => state.posts.currentPost.post);
  const comments = useSelector((state: AppStateType) => state.posts.currentPost.comments);
  const [reply, setReply] = useState<commonCommentsType | null>(null);

  const onLeaveHandler = () => {
    dispatch(postsActions.clearCurrentPost());
  };

  useEffect(() => {
    return onLeaveHandler;
  }, []);

  useEffect(() => {
    dispatch(getCurrentPost(id) as unknown as AnyAction);
  }, []);

  useEffect(() => {
    if (post && !comments.length) {
      dispatch(getCurrentComments(post._id) as unknown as AnyAction);
    }
  }, [post]);

  const image = post?.image ? `http://test-blog-api.ficuslife.com${post.image}` : altPhoto;

  if (!post) {
    return <Preloader />;
  }

  const computeChild = (roots: commonCommentsType[]) => {
    roots.forEach((c) => {
      const child = comments.filter((cf) => cf.followedCommentID === c._id);
      c.child = child;

      computeChild(child);
    });
    return roots;
  };

  const computedComments = computeChild(comments);

  return (
    <Box className={style.container}>
      <Box>{post.title}</Box>

      {myId == post.postedBy ? (
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '500px',
            height: '300px',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PhotoChange postId={post._id} />
        </Box>
      ) : (
        <img src={image} style={{ width: '50%', height: '50%' }} alt={'Post image'} />
      )}
      {myId == post.postedBy && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>
          <EditPost post={post} />
          <DeletePost postId={post._id} closeUpperModal={onCloseHandler} />
        </Box>
      )}

      <Box>{post.description}</Box>
      <Box>{post.fullText}</Box>
      <Box>
        <Like likes={post.likes} id={post._id} dispatchMethod={postLikeHandler} />
      </Box>

      {comments.length ? (
        <Box
          sx={{
            overflowY: 'auto',
            minHeight: '10vh',
            height: '20vh',
          }}
        >
          {computedComments.map((item) => (
            <Box
              key={item._id}
              sx={{
                mb: '5px',
              }}
            >
              <Comment comment={item} setReply={setReply} commentLikeHandler={commentLikeHandler} />
            </Box>
          ))}
        </Box>
      ) : null}
      <CommentForm onCloseHandler={onCloseHandler} postId={post._id} setReply={setReply} reply={reply} />
    </Box>
  );
};
