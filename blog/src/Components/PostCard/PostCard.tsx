import {Button, Paper} from "@mui/material";
import {commonPostType} from "../../redux/CommonDataTypes/types";
import React, {useEffect, useState} from "react";
import style from './postCard.module.css'
import Box from "@mui/material/Box";
import altPhoto from '../../assets/images/postNoImage.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch, useSelector} from "react-redux";
import {addLike} from "../../redux/Posts/thunks";
import {AnyAction} from "redux";
import {AppStateType} from "../../redux/store";

type PostCardType = {
    post: commonPostType
}

export const PostCard: React.FC<PostCardType> = ({post}) => {

    const dispatch = useDispatch()

    const [likesCount, setLikesCount] = useState(post.likes.length)
    const [likeColor, setLikeColor] = useState<'secondary' | 'error'>('secondary')

    const id = useSelector((state: AppStateType) => state.auth.authData?._id)

    const likeHandler = async () => {
        if(post.likes.length === likesCount) {
            if(post.likes.find(item => item == id)) {
                await dispatch(addLike(post._id) as unknown as AnyAction)
                setLikesCount(prevState => prevState - 1)
                setLikeColor('secondary')
            } else {
                await dispatch(addLike(post._id) as unknown as AnyAction)
                setLikesCount(prevState => prevState + 1)
                setLikeColor('error')
            }
        } else {
            await dispatch(addLike(post._id) as unknown as AnyAction)
            setLikesCount(prevState => prevState - 1)
            setLikeColor('secondary')
        }
    }

    useEffect(() => {
      if(post.likes.find(item => item == id)) {
          setLikeColor('error')
      }
    }, [post.likes])

    return <Paper className={style.paper}>
        <Box>{post.title}</Box>
        <Box><img src={post.image || altPhoto} alt={'photo'} className={style.img}/></Box>
        <Box className={style.bottomSection}>
            <Box>
                {post.description}
            </Box>
            <Button endIcon={<FavoriteIcon color={likeColor}/>}
                    color={'secondary'}
                    onClick={likeHandler}
            >
                {likesCount}
            </Button>
        </Box>
    </Paper>
}