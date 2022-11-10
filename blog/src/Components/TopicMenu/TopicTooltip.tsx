import { TopicMenu } from './TopicMenu';
import Box from '@mui/material/Box';
import { Avatar, Tooltip } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../redux/Login/actions';
import { postsActions } from '../../redux/Posts/actions';
import { usersActions } from '../../redux/Users/actions';

type TopicTooltip = {
  name: string;
  avatar: string | undefined;
};

export const TopicToolTip: FC<TopicTooltip> = ({ name, avatar }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loginActions.logout());
    dispatch(postsActions.logout());
    dispatch(usersActions.logout());
    localStorage.clear();
  };

  const img = avatar && `http://test-blog-api.ficuslife.com${avatar}`;

  return (
    <Tooltip
      title={<TopicMenu logoutHandler={logoutHandler} />}
      enterTouchDelay={0}
      leaveDelay={5000}
      leaveTouchDelay={5000}
      arrow
    >
      <Box sx={{ display: 'flex' }}>
        <Avatar alt="avatar" src={img} sx={{ width: 24, height: 24, mr: 2 }} />
        <Box>{name}</Box>
      </Box>
    </Tooltip>
  );
};
