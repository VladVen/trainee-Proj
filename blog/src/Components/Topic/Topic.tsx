import style from './topic.module.css'
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {actions} from "../../redux/reducers/authReducer";


export const Topic = () => {

    const dispatch = useDispatch()
    const token = useSelector((state: AppStateType) => state.auth.token)

    const logoutHandler = () => {
        dispatch(actions.logout())
    }

    return (
        <div className={style.container}>
            <div style={{color: 'white'}}>Logo</div>
            <div>
                <Button variant="contained" className={style.signIn}
                >
                    {
                        token
                            ? <NavLink to={'/login'} className={style.link}
                                       onClick={logoutHandler}>
                                Log out</NavLink>
                            : <NavLink to={'/login'} className={style.link}>Sign In </NavLink>
                    }

                </Button>
            </div>
        </div>
    )
}