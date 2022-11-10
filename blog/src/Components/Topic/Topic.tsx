import style from './topic.module.css';
import { Button, Tooltip } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { TopicToolTip } from '../TopicMenu/TopicTooltip';
import { loginActions } from '../../redux/Login/actions';
import { AnyAction } from 'redux';
import { NavButtons } from './NavButtons/NavButtons';
import { MenuOutlined } from '@mui/icons-material';
import { useWindowSize } from 'usehooks-ts';

export const Topic = () => {
  const name = useSelector((state: AppStateType) => state.auth.authData?.name);
  const avatar = useSelector((state: AppStateType) => state.auth.authData?.avatar);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  const errorCleaner = () => {
    dispatch(loginActions.clearError() as unknown as AnyAction);
  };

  const location = useLocation();

  return (
    <div className={style.container}>
      <div className={style.leftRightSide}>
        <div style={{ color: 'white', marginRight: 40 }}>Logo</div>
        {name && width < 720 ? (
          <Tooltip title={<NavButtons />} enterTouchDelay={0} arrow>
            <MenuOutlined color={'secondary'} />
          </Tooltip>
        ) : (
          <NavButtons />
        )}
      </div>

      <div className={style.leftRightSide}>
        <Button variant="contained" color="secondary">
          {name ? (
            <TopicToolTip name={name} avatar={avatar} />
          ) : location.pathname === '/signup' ? (
            <NavLink to={'/signin'} className={style.link} onClick={errorCleaner}>
              Sign In{' '}
            </NavLink>
          ) : (
            <NavLink to={'/signup'} className={style.link} onClick={errorCleaner}>
              Sign Up{' '}
            </NavLink>
          )}
        </Button>
      </div>
    </div>
  );
};
