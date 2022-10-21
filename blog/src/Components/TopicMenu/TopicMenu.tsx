import {TopicTooltip} from "./TopicTooltip";
import Box from "@mui/material/Box";
import {Avatar, Tooltip} from "@mui/material";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/Login/actions";

type TopicMenu = {
    name: string
}

export const TopicMenu: FC<TopicMenu> = ({name}) => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(actions.logout())
    }
    return <Tooltip title={<TopicTooltip logoutHandler={logoutHandler}/>} arrow>
        <Box sx={{display: 'flex'}}>
            <Avatar
                alt="avatar"
                src=""
                sx={{width: 24, height: 24, mr: 2}}
            />
            <Box>{name}</Box>
        </Box>
    </Tooltip>
}