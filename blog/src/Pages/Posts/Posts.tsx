import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import React, { useEffect, useMemo, useState } from 'react';
import { AnyAction } from 'redux';
import useOnScreen from '../../Hooks/useOnScreen';
import Box from '@mui/material/Box';
import { Preloader } from '../../Components/Preloader/Preloader';
import { PostCard } from '../../Components/PostCard/PostCard';
import { getPosts } from '../../redux/Posts/thunks';
import { postsActions } from '../../redux/Posts/actions';

export const Posts = () => {
  const [intersecting, currentElement] = useOnScreen();
  const [startValue, setStartValue] = useState(0);

  const dispatch = useDispatch();
  const posts = useSelector((state: AppStateType) => state.posts.posts);

  const totalCount = useMemo(() => posts.pagination.total as number, [posts.pagination.total]);
  const portion = useMemo(() => posts.pagination.limit as number, [posts.pagination.limit]);
  const pagesCount = useMemo(() => Math.ceil(totalCount / portion), [totalCount, portion]);

  const onLeaveHandler = () => {
    dispatch(postsActions.clearPosts());
  };

  useEffect(() => {
    return onLeaveHandler;
  }, []);

  const moreHandler = () => {
    if (intersecting) {
      if (!posts.data.length) {
        dispatch(getPosts(startValue) as unknown as AnyAction);
        setStartValue((prevState) => prevState + 10);
      } else if (pagesCount > startValue / 10) {
        dispatch(getPosts(startValue) as unknown as AnyAction);
        setStartValue((prevState) => prevState + 10);
      }
    }
  };

  useEffect(() => {
    moreHandler();
  }, [intersecting]);

  if (!posts.data.length) {
    return (
      <Box ref={currentElement}>
        <Preloader />
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          p: '5% 5% 0 5%',
        }}
      >
        {posts.data.length && posts.data.map((item) => <PostCard post={item} key={item._id} />)}
      </Box>
      <Box>
        {pagesCount > startValue / 10 && (
          <Box ref={currentElement}>
            <Preloader />
          </Box>
        )}
      </Box>
    </Box>
  );
};
