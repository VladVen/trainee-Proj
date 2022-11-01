import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { commonUserType } from '../../redux/CommonDataTypes/types';
import React from 'react';
import { SettingsPart } from '../Settings/SettingsPart';
import {useLocation} from "react-router-dom";
import style from './profileDesc.module.css'

type ProfileDescriptionType = {
  profileData: commonUserType;
};

export const ProfileDescription: React.FC<ProfileDescriptionType> = ({ profileData }) => {
  const date = new Date(profileData?.dateCreated as string);

  const img = profileData.avatar && `http://test-blog-api.ficuslife.com${profileData.avatar}`;
  let location = useLocation()

  const title = location.pathname === '/settings' ? 'Profile Settings' : 'Blog'
  
  return (
    <Box className={style.container}>
      <Box className={style.title}>{title}</Box>
      <Box className={style.itemsPosition}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Avatar src={img} alt={'avatar'} sx={{ width: '100px', height: '100px', mr: 3 }} />
          </Box>
          <Box>
            <Box sx={{ mb: 3 }}>{profileData?.name}</Box>
            <Box>{date.toLocaleDateString('en-GB')}</Box>
            <Box>{profileData?.email}</Box>
          </Box>
        </Box>

        {location.pathname === '/settings' && <SettingsPart profileData={profileData} />}
      </Box>
    </Box>
  );
};
