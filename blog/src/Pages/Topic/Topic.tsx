import style from './topic.module.css'
import {Button} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {TopicMenu} from "../../Components/TopicMenu/TopicMenu";
import {loginActions} from "../../redux/Login/actions";
import {AnyAction} from "redux";

export const Topic = () => {

    const name = useSelector((state: AppStateType) => state.auth.authData?.name)
    const avatar = useSelector((state: AppStateType) => state.auth.authData?.avatar)
    const dispatch = useDispatch()

    const errorCleaner = () => {
        dispatch(loginActions.clearError() as unknown as AnyAction)
    }

    const location = useLocation();


    return (
        <div className={style.container}>
            <div className={style.leftRightSide}>
                <div style={{color: 'white', marginRight: 40}}>Logo</div>
                {
                    name && <div>
                        <Button color='secondary'
                                variant='contained'
                                sx={{mr: 1}}>Ficus</Button>
                        <NavLink to={'/posts'} className={style.link}>
                            <Button color='secondary'
                                    variant='contained'
                                    sx={{mr: 1}}>
                                Posts
                            </Button>
                        </NavLink>
                        <NavLink to={'/users'} className={style.link}>
                            <Button color='secondary'
                                    variant='contained'>
                                Users
                            </Button>
                        </NavLink>
                    </div>

                }
            </div>

            <div className={style.leftRightSide}>

                <Button variant="contained" color='secondary'>
                    {
                        name
                            ? <TopicMenu name={name} avatar={avatar}/>
                            : location.pathname === '/signin'
                                ? <NavLink to={'/signup'}
                                           className={style.link}
                                           onClick={errorCleaner}
                                >Sign Up </NavLink>
                                : <NavLink to={'/signin'}
                                           className={style.link}
                                           onClick={errorCleaner}
                                >Sign In </NavLink>
                    }


                </Button>
            </div>
        </div>
    )
}


