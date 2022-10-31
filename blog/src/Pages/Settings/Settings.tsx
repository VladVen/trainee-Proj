import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import {commonUserType} from "../../redux/CommonDataTypes/types";
import {useEffect} from "react";
import {getMyPosts} from "../../redux/Posts/thunks";
import {AnyAction} from "redux";
import {MyPosts} from "./MyPosts/MyPosts";
import {Preloader} from "../../Components/Preloader/Preloader";


export const Settings = () => {

    const dispatch = useDispatch()
    const authData = useSelector((state: AppStateType) => state.auth.authData)
    const posts = useSelector((state: AppStateType) => state.posts.myPosts)

    useEffect(() => {
        if (posts.pagination.total === null) {
            dispatch(getMyPosts(0) as unknown as AnyAction)
        }
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
                    />
            }
        </Box>
    )
}


