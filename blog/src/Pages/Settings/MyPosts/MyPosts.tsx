import Box from "@mui/material/Box";
import React from "react";
import {commonPostType} from "../../../redux/CommonDataTypes/types";
import {PostCard} from "../../../Components/PostCard/PostCard";

type MyPostsType = {
    posts: commonPostType[]
}


export const MyPosts: React.FC<MyPostsType> = ({posts}) => {

    return <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, pl: 10, pr: 10, pt: 10}}>
        <Box sx={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            My Posts
        </Box>
        <Box sx={{display: 'flex', flexWrap: 'wrap', flex: 1, alignItems: 'center', justifyContent: 'center', pt: 5}}>
            {
                posts.map(item => <PostCard post={item} key={item._id}/>)
            }
        </Box>

    </Box>
}