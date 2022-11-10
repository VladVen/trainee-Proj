import { FC } from 'react';
import { Avatar, IconButton, Paper, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { Info } from '@mui/icons-material';
import style from './userCard.module.css';
import { NavLink } from 'react-router-dom';

type userCardType = {
  name: string;
  avatar: string;
  email: string;
  status: string;
  id: string;
};

export const UserCard: FC<userCardType> = ({ name, avatar, email, status, id }) => {
  const img = avatar && `http://test-blog-api.ficuslife.com${avatar}`;

  return (
    <NavLink to={'/blog/' + id} className={style.navLink}>
      <Paper className={style.paper}>
        <Box className={style.container}>
          <Box>
            <Avatar src={img} alt={'avatar'} className={style.avatar} />
          </Box>
          <Box>
            <Box sx={{ fontWeight: 700 }}>{name}</Box>
            <Box>{status}</Box>
          </Box>
          <Box className={style.tooltip}>
            <Tooltip title={email} arrow>
              <IconButton>
                <Info color="secondary" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>
    </NavLink>
  );
};
