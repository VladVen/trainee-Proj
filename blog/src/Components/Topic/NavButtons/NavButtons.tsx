import { NavLink } from 'react-router-dom';
import style from '../topic.module.css';
import { Button } from '@mui/material';

export const NavButtons = () => {
  return (
    <div>
      <NavLink to={'/blog'} className={style.link}>
        <Button color="secondary" variant="contained" sx={{ mr: 1 }}>
          Blog
        </Button>
      </NavLink>
      <NavLink to={'/posts'} className={style.link}>
        <Button color="secondary" variant="contained" sx={{ mr: 1 }}>
          Posts
        </Button>
      </NavLink>
      <NavLink to={'/users'} className={style.link}>
        <Button color="secondary" variant="contained">
          Users
        </Button>
      </NavLink>
    </div>
  );
};
