import Box from '@mui/material/Box';
import React, { useMemo } from 'react';
import { commonPostType } from '../../redux/CommonDataTypes/types';
import { PostCard } from '../PostCard/PostCard';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/Posts/thunks';
import { postsActions } from '../../redux/Posts/actions';
import style from './myPosts.module.css';
import { Pagination } from '@mui/material';
import { Preloader } from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

type MyPostsType = {
  posts: commonPostType[];
  totalCount: number | null;
  myId: string;
  altCardStyle?: boolean;
};

export const MyPosts: React.FC<MyPostsType> = ({ posts, totalCount, myId, altCardStyle = false }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [page, setPage] = React.useState(1);

  const pagesCount = useMemo(() => Math.ceil((totalCount as number) / 10), [totalCount]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    moreHandler(value);
  };

  const moreHandler = (value: number) => {
    dispatch(postsActions.clearPosts());
    const skip = (value - 1) * 10;
    dispatch(getPosts(skip, myId) as unknown as AnyAction);
  };

  if (totalCount === null) return <Preloader />;

  const noPostsLabel =
    location.pathname !== '/blog' || '/settings' ? (
      <div>Look's like this user hadn't post any yet</div>
    ) : (
      <div>It seems like you haven't posts, make some one</div>
    );

  return (
    <Box className={style.container}>
      <Box className={style.posts}>
        {posts.length
          ? posts.map((item) => <PostCard post={item} key={item._id} altStyle={altCardStyle} />)
          : noPostsLabel}
      </Box>
      {posts.length ? (
        <Box sx={{ pt: 5, pb: 3 }}>
          <Pagination
            count={pagesCount}
            color={altCardStyle ? 'secondary' : 'primary'}
            onChange={handleChange}
            page={page}
          />
        </Box>
      ) : null}
    </Box>
  );
};
