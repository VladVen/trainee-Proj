import Box from "@mui/material/Box";
import {MyPosts} from "../../MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {useEffect} from "react";
import {postsActions} from "../../../redux/Posts/actions";
import {Preloader} from "../../Preloader/Preloader";
import {getPosts} from "../../../redux/Posts/thunks";
import {AnyAction} from "redux";


export const AddPhotoModal = () => {

    const dispatch = useDispatch()

    const posts = useSelector((state: AppStateType) => state.posts.posts )
    const id = useSelector((state: AppStateType) => state.auth.authData?._id )

    useEffect(() => {
        dispatch(postsActions.clearPosts())
    }, [])

    useEffect(() => {
        dispatch(getPosts(0, id as string) as unknown as AnyAction)
    }, [])

    if(!posts) return <Preloader />

  return <Box sx={{overflowY: 'auto' , height: '600px', width: '1000px'}}>
      <Box sx={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', pt: 5}}>
          Select post to change it's image
      </Box>
      <MyPosts posts={posts.data}
               totalCount={posts.pagination.total as number}
               skip={posts.pagination.skip as number + 10}
               myId={id as string}
               altCardStyle={true}
      />
  </Box>
}