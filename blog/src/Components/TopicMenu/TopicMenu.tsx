import {TopicTooltip} from "./TopicTooltip";
import Box from "@mui/material/Box";
import {Avatar, Tooltip} from "@mui/material";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {loginActions} from "../../redux/Login/actions";
import {postsActions} from "../../redux/Posts/actions";
import {usersActions} from "../../redux/Users/actions";

type TopicMenu = {
    name: string
    avatar: string | undefined
}

export const TopicMenu: FC<TopicMenu> = ({name, avatar}) => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(loginActions.logout())
        dispatch(postsActions.logout())
        dispatch(usersActions.logout())
    }

    const img = avatar && `http://test-blog-api.ficuslife.com${avatar}`

    return <Tooltip title={<TopicTooltip logoutHandler={logoutHandler}/>} arrow>
        <Box sx={{display: 'flex'}}>
            <Avatar
                alt="avatar"
                src={img}
                sx={{width: 24, height: 24, mr: 2}}
            />
            <Box>{name}</Box>
        </Box>
    </Tooltip>
}