import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import {commonUserType} from "../../redux/CommonDataTypes/types";
import {useEffect} from "react";
import {getMyPosts} from "../../redux/Posts/thunks";
import {AnyAction} from "redux";
import {MyPosts} from "./MyPosts/MyPosts";
import {CircularProgress} from "@mui/material";


export const Settings = () => {

    const dispatch = useDispatch()
    const authData = useSelector((state: AppStateType) => state.auth.authData)
    const posts = useSelector((state: AppStateType) => state.posts.myPosts)

    useEffect(() => {
        dispatch(getMyPosts() as unknown as AnyAction)
    }, [])

    return (
        <Box>
            <ProfileDescription authData={authData as commonUserType}/>
            {
                !posts.length
                    ? <CircularProgress />
                    : <MyPosts posts={posts}/>
            }
        </Box>
    )
}


