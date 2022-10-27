import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import altPhoto from "../../../assets/images/postNoImage.jpeg";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Preloader} from "../../Preloader/Preloader";
import {getCurrentComments, getCurrentPost} from "../../../redux/Posts/thunks";
import {AnyAction} from "redux";
import {postsActions} from "../../../redux/Posts/actions";
import {Like} from "../../Like/Like";
import {Comment} from "../../Comment/Comment";


type PostCardModalType = {
    onCloseHandler: () => void
    id: string
    postLikeHandler: (id: string) => void
    commentLikeHandler: (id: string) => void
}

export const PostCardModal: React.FC<PostCardModalType> = ({
                                                               onCloseHandler,
                                                               id,
                                                               postLikeHandler,
                                                               commentLikeHandler
                                                           }) => {

    const dispatch = useDispatch()

    const myId = useSelector((state: AppStateType) => state.auth.authData?._id)
    const post = useSelector((state: AppStateType) => state.posts.currentPost.post)
    const comments = useSelector((state: AppStateType) => state.posts.currentPost.comments)

    const onLeaveHandler = () => {
        dispatch(postsActions.clearCurrentPost())
    }

    useEffect(() => {
        return onLeaveHandler
    }, [])

    useEffect(() => {
        dispatch(getCurrentPost(id) as unknown as AnyAction)
    }, [])

    useEffect(() => {
        if (post && !comments.length) {
            console.log('fetched')
            dispatch(getCurrentComments(post._id) as unknown as AnyAction)
        }
    }, [post])

    const image = post?.image ? `http://test-blog-api.ficuslife.com${post.image}` : altPhoto

    if (!post) {
        return <Preloader/>
    }

    return <Box>
        <Box>{post.title}</Box>

        {
            myId == post.postedBy
                ? <Box sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '800px',
                    height: '600px',
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}> <Button variant={'contained'}
                            color={'secondary'}>
                    Change
                </Button> </Box>
                : <img src={image} style={{width: '50%', height: '50%'}} alt={'Post image'}/>
        }


        <Box>{post.description}</Box>
        <Box>{post.fullText}</Box>
        <Box>
            <Like likes={post.likes} id={post._id} dispatchMethod={postLikeHandler}/>
        </Box>

        {
            comments.length
                ? <Box sx={{overflowY: 'auto', height: '200px'}}>
                    {[...comments]
                        .reverse()
                        .map(item => <Comment comment={item} key={item._id} />)} </Box>
                : null
        }


        <Box>
            <Button color={"secondary"}
                    variant={'contained'}
                    onClick={onCloseHandler}>Close</Button>
        </Box>
    </Box>
}