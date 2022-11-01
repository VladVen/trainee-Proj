import Box from '@mui/material/Box';
import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import { commonUserType, postsResponseType } from '../../redux/CommonDataTypes/types';
import { MyPosts } from '../MyPosts/MyPosts';
import React from 'react';
import { Preloader } from '../Preloader/Preloader';

type BlogType = {
  profileData: commonUserType | null;
  posts: postsResponseType;
};

export const Blog: React.FC<BlogType> = ({ profileData, posts }) => {
  if (!profileData) {
    return <Preloader />;
  }
  return (
    <Box>
      <Box sx={{ mb: 10 }}>
        <ProfileDescription profileData={profileData} />
      </Box>

      <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>Posts</Box>
      <MyPosts posts={posts.data} totalCount={posts.pagination.total} myId={profileData?._id as string} />
    </Box>
  );
};
