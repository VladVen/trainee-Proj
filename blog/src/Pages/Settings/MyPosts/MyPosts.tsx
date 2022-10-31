import Box from "@mui/material/Box";
import React, {useEffect, useMemo, useState} from "react";
import {commonPostType} from "../../../redux/CommonDataTypes/types";
import {PostCard} from "../../../Components/PostCard/PostCard";
import useOnScreen from "../../../Components/Hooks/useOnScreen";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";
import {getMyPosts} from "../../../redux/Posts/thunks";
import {Preloader} from "../../../Components/Preloader/Preloader";

type MyPostsType = {
    posts: commonPostType[]
    totalCount: number
    skip: number
}


export const MyPosts: React.FC<MyPostsType> = ({posts, totalCount, skip}) => {

    const [startValue, setStartValue] = useState(10)

    const dispatch = useDispatch()

    const [intersecting, currentElement] = useOnScreen();


    const pagesCount = useMemo(() => Math.ceil(totalCount / skip), [totalCount, skip])

    const moreHandler = () => {
        if (intersecting) {
            if (!posts.length) {
                dispatch(getMyPosts(startValue) as unknown as AnyAction)
                setStartValue(prevState => prevState + 10)
            } else if (pagesCount > startValue / 10) {
                dispatch(getMyPosts(startValue) as unknown as AnyAction)
                setStartValue(prevState => prevState + 10)
            }
        }
    }

    useEffect(() => {
        moreHandler()
    }, [intersecting])


    return <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, pl: 10, pr: 10, pt: 10}}>
        <Box sx={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            My Posts
        </Box>
        <Box sx={{display: 'flex', flexWrap: 'wrap', flex: 1, alignItems: 'center', justifyContent: 'center', pt: 5}}>
            {
                posts.length
                    ? posts.map(item => <PostCard post={item} key={item._id}/>)
                    : <div>It seems like you haven't posts, make some one</div>
            }
        </Box>
        <Box>
            {pagesCount > startValue / 10 && <Box ref={currentElement}><Preloader/></Box>}
        </Box>
    </Box>
}