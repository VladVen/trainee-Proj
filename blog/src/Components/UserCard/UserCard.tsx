import { FC } from 'react';
import { Avatar, IconButton, Paper, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { Info } from '@mui/icons-material';

type userCardType = {
  name: string;
  avatar: string;
  email: string;
  status: string;
};

export const UserCard: FC<userCardType> = ({ name, avatar, email, status }) => {
  const img = avatar && `http://test-blog-api.ficuslife.com${avatar}`;

  return (
    <Paper sx={{ width: '300px', height: '100px', mb: 3, display: 'flex' }}>
      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-start', alignItems: 'center', p: '10px' }}>
        <Box>
          <Avatar src={img} alt={'avatar'} sx={{ width: 50, height: 50, mr: 2 }} />
        </Box>
        <Box>
          <Box sx={{ fontWeight: 700 }}>{name}</Box>
          <Box>{status}</Box>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <Tooltip title={email} arrow>
            <IconButton>
              <Info color="secondary" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
};
