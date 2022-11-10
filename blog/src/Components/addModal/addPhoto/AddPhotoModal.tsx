import Box from '@mui/material/Box';
import { MyPosts } from '../../MyPosts/MyPosts';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { Preloader } from '../../Preloader/Preloader';
import style from './addPhotoModal.module.css';

export const AddPhotoModal = () => {
  const posts = useSelector((state: AppStateType) => state.posts.posts);
  const id = useSelector((state: AppStateType) => state.auth.authData?._id);

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
