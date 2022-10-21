import style from './topic.module.css'
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {TopicMenu} from "../../Components/TopicMenu/TopicMenu";

export const Topic = () => {

    const name = useSelector((state: AppStateType) => state.auth.authData?.name)

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
                                variant='contained'>
                            <NavLink to={'/users'} className={style.link}>Users </NavLink>
                        </Button>
                    </div>

                }
            </div>

            <div className={style.leftRightSide}>


                <Button variant="contained" color='secondary'>
                    {
                        name
                            ? <TopicMenu name={name}/>
                            : <NavLink to={'/signin'} className={style.link}>Sign In </NavLink>
                    }


                </Button>
            </div>
        </div>
    )
}