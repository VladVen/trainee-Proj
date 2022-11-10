import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import style from './preloader.module.css';
import React from 'react';

type Preloader = {
  color?: 'primary' | 'secondary';
};

export const Preloader: React.FC<Preloader> = ({ color = 'primary' }) => {
  return (
    <Box className={style.preloader}>
      <CircularProgress color={color} />
    </Box>
  );
};
