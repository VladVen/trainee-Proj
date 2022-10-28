import Box from "@mui/material/Box";
import {commonCommentsType} from "../../redux/CommonDataTypes/types";
import React from "react";
import {Like} from "../Like/Like";
import {Avatar, Button} from "@mui/material";
import style from './comment.module.css'

type CommentType = {
    comment: commonCommentsType
    commentLikeHandler: (id: string) => void
    nestedComments: commonCommentsType[]
    deepNestedComments: commonCommentsType[]
    setReply: (reply: commonCommentsType) => void
}

export const Comment: React.FC<CommentType> = ({
                                                   comment, commentLikeHandler,
                                                   nestedComments, deepNestedComments,
                                                   setReply
                                               }) => {

    const comments = [...nestedComments, ...deepNestedComments]

    const moreNestedComments = (id: string) => comments.filter(item => item.followedCommentID == id)
    const moreDeepNestedComments = (id: string) => comments.filter(item => item.followedCommentID !== id && true)


    return <Box className={style.container}>
        <Box sx={{
            border: 1,
            minWidth: '300px',
            borderColor: 'secondary.main',
            p: '5px'
        }}>
            <Box className={style.ava}>
                <Box>
                    <Avatar/>
                </Box>
            </Box>
            <Box className={style.comment}>
                {comment.text}
            </Box>
            <Box className={style.bottomBtn}>
                <Button color={'secondary'}
                        onClick={() => setReply(comment)}
                >
                    Reply
                </Button>
                <Like likes={comment.likes} id={comment._id} dispatchMethod={commentLikeHandler}/>
            </Box>

        </Box>

        <Box sx={{ml: 5}}>
            {
                nestedComments.map((item => <Box key={item._id}

                >
                    <Comment comment={item}
                             setReply={setReply}
                             commentLikeHandler={commentLikeHandler}
                             nestedComments={moreNestedComments(item._id)}
                             deepNestedComments={moreDeepNestedComments(item._id)}/>
                </Box>))
            }
        </Box>
    </Box>
}