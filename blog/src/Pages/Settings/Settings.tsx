import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { commonUserType } from '../../redux/CommonDataTypes/types';
import React, { useEffect } from 'react';
import { getPosts } from '../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import { MyPosts } from '../../Components/MyPosts/MyPosts';

export const Settings = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state: AppStateType) => state.auth.authData);
  const posts = useSelector((state: AppStateType) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts(0, authData?._id as string) as unknown as AnyAction);
  }, []);

  return (
    <Box>
      <Box sx={{ mb: 10 }}>
        <ProfileDescription authData={authData as commonUserType} />
      </Box>

      <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>My Posts</Box>
      <MyPosts posts={posts.data} totalCount={posts.pagination.total} myId={authData?._id as string} />
    </Box>
  );
};
