import Box from '@mui/material/Box';
import { MyPosts } from '../../MyPosts/MyPosts';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { useEffect } from 'react';
import { postsActions } from '../../../redux/Posts/actions';
import { Preloader } from '../../Preloader/Preloader';
import { getPosts } from '../../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import style from './addPhotoModal.module.css';

export const AddPhotoModal = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: AppStateType) => state.posts.posts);
  const id = useSelector((state: AppStateType) => state.auth.authData?._id);

  useEffect(() => {
    dispatch(postsActions.clearPosts());
  }, []);

  useEffect(() => {
    dispatch(getPosts(0, id as string) as unknown as AnyAction);
  }, []);

  if (!posts.data) return <Preloader color={'secondary'} />;

  return (
    <Box className={style.container}>
      <Box className={style.title}>Select post to change it's image</Box>
      <MyPosts
        posts={posts.data}
        totalCount={posts.pagination.total as number}
        myId={id as string}
        altCardStyle={true}
      />
    </Box>
  );
};
