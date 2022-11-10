import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { commonUserType } from '../../redux/CommonDataTypes/types';
import React from 'react';
import { SettingsPart } from '../Settings/SettingsPart';
import { useLocation } from 'react-router-dom';
import style from './profileDesc.module.css';
import { useWindowSize } from 'usehooks-ts';
import {AboutProfile} from "./AboutProfile/AboutProfile";

type ProfileDescriptionType = {
  profileData: commonUserType;
};

export const ProfileDescription: React.FC<ProfileDescriptionType> = ({ profileData }) => {
  const location = useLocation();
  const { width } = useWindowSize();

  const img = profileData.avatar && `http://test-blog-api.ficuslife.com${profileData.avatar}`;
  const title = location.pathname === '/settings' ? 'Profile Settings' : 'Blog';

  return (
    <Box className={style.container}>
      <Box className={style.title}>{title}</Box>
      <Box className={width > 580 ? style.itemsPosition : style.altItemsPosition}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Avatar src={img} alt={'avatar'} sx={{ width: '100px', height: '100px', mr: 3 }} />
          </Box>
          <AboutProfile profileData={profileData} />
        </Box>

        {location.pathname === '/settings' && <SettingsPart profileData={profileData} />}
      </Box>
    </Box>
  );
};
