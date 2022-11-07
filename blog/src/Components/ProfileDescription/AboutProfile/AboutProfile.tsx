import React from 'react';
import { commonUserType } from '../../../redux/CommonDataTypes/types';
import Box from '@mui/material/Box'
import style from '../profileDesc.module.css'

type AboutProfileType = {
  profileData: commonUserType;
};

export const AboutProfile: React.FC<AboutProfileType> = ({ profileData }) => {

  const date = new Date(profileData.dateCreated as string);

  return (
    <Box>
      <Box sx={{ mb: 1 }}>{profileData.name}</Box>
      <Box sx={{ mb: 1 }}>{profileData.email}</Box>
        <Box  className={style.aboutProfile}>
            {profileData.extra_details && (
                <Box>
                    <strong>About me: </strong>
                    {profileData.extra_details}
                </Box>
            )}
            {profileData.skills && (
                <Box>
                    <strong>My skills: </strong>
                    {profileData.skills}
                </Box>
            )}
            {profileData.profession && (
                <Box>
                    <strong>My profession: </strong>
                    {profileData.profession}
                </Box>
            )}
            {profileData.details && (
                <Box>
                    <strong>More details: </strong>
                    {profileData.details}
                </Box>
            )}
            <Box>
                <strong>Created: </strong>
                {date.toLocaleDateString('en-GB')}
            </Box>
        </Box>

    </Box>
  );
};
