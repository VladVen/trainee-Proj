import Box from '@mui/material/Box';
import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import { commonUserType, postsResponseType } from '../../redux/CommonDataTypes/types';
import { MyPosts } from '../MyPosts/MyPosts';
import React, { useCallback, useEffect } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { AddSpeedDial } from '../addModal/AddSpeedDial';
import { useLocation } from 'react-router-dom';
import { postsActions } from '../../redux/Posts/actions';
import { useDispatch } from 'react-redux';

type BlogType = {
  profileData: commonUserType | null;
  posts: postsResponseType;
};

export const Blog: React.FC<BlogType> = ({ profileData, posts }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const onLeaveHandler = useCallback(() => {
    dispatch(postsActions.clearPosts());
  }, []);

  useEffect(() => {
    return onLeaveHandler;
  }, [location.pathname]);

  if (!profileData) {
    return <Preloader />;
  }
  return (
    <Box>
      <Box sx={{ mb: 10 }}>
        <ProfileDescription profileData={profileData} />
      </Box>
      {location.pathname === '/blog' && <AddSpeedDial />}
      <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>Posts</Box>
      <MyPosts posts={posts.data} totalCount={posts.pagination.total} myId={profileData?._id as string} />
    </Box>
  );
};
