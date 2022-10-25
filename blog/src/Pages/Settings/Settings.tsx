import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import {commonUserType} from "../../redux/CommonDataTypes/types";
import {useEffect} from "react";
import {getPosts} from "../../redux/Posts/thunks";
import {AnyAction} from "redux";
import {MyPosts} from "./MyPosts/MyPosts";
import {Preloader} from "../../Components/Preloader/Preloader";


export const Settings = () => {

    const dispatch = useDispatch()
    const authData = useSelector((state: AppStateType) => state.auth.authData)
    const posts = useSelector((state: AppStateType) => state.posts.posts)

    useEffect(() => {
            dispatch(getPosts(0, authData?._id as string) as unknown as AnyAction)
    }, [])

    return (
        <Box>
            <ProfileDescription authData={authData as commonUserType}/>
            {
                posts.pagination.total === null
                    ? <Preloader/>
                    : <MyPosts posts={posts.data}
                               totalCount={posts.pagination.total}
                               skip={posts.pagination.skip as number}
                               myId={authData?._id as string}
                    />
            }
        </Box>
    )
}


