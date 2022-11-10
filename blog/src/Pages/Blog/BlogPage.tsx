import Box from '@mui/material/Box';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getPosts} from "../../redux/Posts/thunks";
import {AnyAction} from "redux";
import {Blog} from "../../Components/Blog/Blog";
import {commonUserType} from "../../redux/CommonDataTypes/types";
import {getCurrentUser} from "../../redux/Users/thunks";
import {usersActions} from "../../redux/Users/actions";

export const BlogPage = () => {

    const location = useLocation()
    const dispatch = useDispatch();
    const authData = useSelector((state: AppStateType) => state.auth.authData);
    const userData = useSelector((state: AppStateType) => state.users.currentUser);
    const posts = useSelector((state: AppStateType) => state.posts.posts);

    useEffect(() => {
        if(location.pathname === '/blog') {
            dispatch(getPosts(0, authData?._id as string) as unknown as AnyAction);
        } else {
            const userId = location.pathname.substring(6)
            dispatch(getPosts(0, userId) as unknown as AnyAction);
            dispatch(getCurrentUser(userId) as unknown as AnyAction);
        }
    }, [location.pathname])

    const onLeaveHandler = () => {
        dispatch(usersActions.clearCurrentUser());
    }

    useEffect(() => {
        return onLeaveHandler
    }, [])

    if(location.pathname !== '/blog') {
        return <Box>
            <Blog profileData={userData as commonUserType} posts={posts} />
        </Box>
    }
  return (
    <Box>
       <Blog profileData={authData as commonUserType} posts={posts} />
    </Box>
  );
};
