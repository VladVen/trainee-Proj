import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { commonUserType } from '../../redux/CommonDataTypes/types';
import React, { useEffect } from 'react';
import { getPosts } from '../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import { Blog } from '../../Components/Blog/Blog';

export const Settings = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state: AppStateType) => state.auth.authData);
  const posts = useSelector((state: AppStateType) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts(0, authData?._id as string) as unknown as AnyAction);
  }, []);

  return <Blog profileData={authData as commonUserType} posts={posts} />;
};
