import style from './topic.module.css'
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {actions} from "../../redux/Login/actions";

export const Topic = () => {

    const dispatch = useDispatch()
    const token = useSelector((state: AppStateType) => state.auth.token)
    const name = useSelector((state: AppStateType) => state.auth.authData?.name)

    const logoutHandler = () => {
        dispatch(actions.logout())
    }

    return (
        <div className={style.container}>
            <div className={style.leftRightSide}>
                <div style={{color: 'white', marginRight: 40}}>Logo</div>
                {
                    name && <div>
                        <Button color='secondary'
                                variant='contained'
                                sx={{mr: 1}}>Ficus</Button>
                        <Button color='secondary'
                                variant='contained'
                                sx={{mr: 1}}>Posts</Button>
                        <Button color='secondary'
                                variant='contained'>Users</Button>
                    </div>

                }
            </div>

            <div className={style.leftRightSide}>
                {name && <div>{name}</div>}

                <Button variant="contained" color='secondary'>
                    {
                        token
                            ? <NavLink to={'/signin'} className={style.link}
                                       onClick={logoutHandler}>
                                Log out</NavLink>
                            : <NavLink to={'/signin'} className={style.link}>Sign In </NavLink>
                    }


                </Button>
            </div>
        </div>
    )
}