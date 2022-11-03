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
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import style from './posts.module.css';

export const Posts = () => {
  const [intersecting, currentElement] = useOnScreen();
  const [startValue, setStartValue] = useState(0);
  const [searchValue, setSearchValue] = useState('');

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
        dispatch(getPosts(startValue, '', searchValue) as unknown as AnyAction);
        setStartValue((prevState) => prevState + 10);
      } else if (pagesCount > startValue / 10) {
        dispatch(getPosts(startValue, '', searchValue) as unknown as AnyAction);
        setStartValue((prevState) => prevState + 10);
      }
    }
  };

  useEffect(() => {
    setStartValue(0);
  }, [searchValue]);

  useEffect(() => {
    moreHandler();
  }, [intersecting]);

  return (
    <Box sx={{ p: '1% 5% 0 5%' }}>
      <SearchForm setSearchValue={setSearchValue} clearPosts={onLeaveHandler} searchValue={searchValue} />
      {posts.pagination.total === null ? (
        <Box ref={currentElement}>
          <Preloader />
        </Box>
      ) : posts.pagination.total === 0 ? (
        <Box className={style.posts}>Unfortunately we haven't found anything similar to '{searchValue}'</Box>
      ) : (
        <Box>
          <Box className={style.posts}>
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
      )}
    </Box>
  );
};
