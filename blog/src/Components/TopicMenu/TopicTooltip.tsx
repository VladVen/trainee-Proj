import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import style from "../../Pages/Topic/topic.module.css";
import {NavLink} from "react-router-dom";
import {FC} from "react";


type TopicMenuType = {
    logoutHandler: () => void
}

export const TopicTooltip: FC<TopicMenuType> = ({logoutHandler}) => {


    return <Box sx={{display: 'flex', flexDirection: 'column'}} >
        <Button>
            <NavLink to={'/settings'} className={style.link}>
                Settings</NavLink></Button>
        <Button>
            <NavLink to={'/signin'} className={style.link}
                     onClick={logoutHandler}>
                Log out</NavLink>
        </Button>

    </Box>
}