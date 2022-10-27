import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import React, {useEffect, useMemo, useState} from "react";
import {AnyAction} from "redux";
import useOnScreen from "../../Hooks/useOnScreen";
import Box from "@mui/material/Box";
import {Preloader} from "../../Components/Preloader/Preloader";
import {PostCard} from "../../Components/PostCard/PostCard";
import {getPosts} from "../../redux/Posts/thunks";
import {postsActions} from "../../redux/Posts/actions";
import {SpeedDial, SpeedDialAction} from "@mui/material";
import {Add} from "@mui/icons-material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import {ModalWindow} from "../../Components/ModalWindow/ModalWindow";
import {AddPostModal} from "../../Components/addModal/AddPost/AddPostModal";
import {AddPhotoModal} from "../../Components/addModal/addPhoto/AddPhotoModal";


export const Posts = () => {

    const [intersecting, currentElement] = useOnScreen();
    const [startValue, setStartValue] = useState(0)
    const [openAddPost, setOpenAddPost] = useState(false)
    const [openAddPhoto, setOpenAddPhoto] = useState(false)


    const dispatch = useDispatch()
    const posts = useSelector((state: AppStateType) => state.posts.posts)

    const totalCount = useMemo(() => posts.pagination.total as number, [posts.pagination.total])
    const portion = useMemo(() => posts.pagination.limit as number, [posts.pagination.limit])
    const pagesCount = useMemo(() => Math.ceil(totalCount / portion), [totalCount, portion])

    const onLeaveHandler = () => {
        dispatch(postsActions.clearPosts())
    }

    useEffect(() => {
        return onLeaveHandler
    }, [])

    const moreHandler = () => {
        if (intersecting) {
            if (!posts.data.length) {
                dispatch(getPosts(startValue) as unknown as AnyAction)
                setStartValue(prevState => prevState + 10)
            } else if (pagesCount > startValue / 10) {
                dispatch(getPosts(startValue) as unknown as AnyAction)
                setStartValue(prevState => prevState + 10)
            }
        }
    }

    useEffect(() => {
        moreHandler()
    }, [intersecting])

    useEffect(() => {
        setStartValue(0)
    }, [openAddPhoto])


    const onOpenAddPostHandler = () => {
        setOpenAddPost(prevState => !prevState)
    }
    const onOpenAddPhotoHandler = () => {
        setOpenAddPhoto(prevState => !prevState)
    }

    if (!posts.data.length && !openAddPhoto) {
        return <Box ref={currentElement}><Preloader/></Box>
    }

    return (
        <Box>
            <Box sx={{position: 'fixed', bottom: 40, right: 15}}>
                <SpeedDial
                    color={'error'}
                    icon={<Add/>}
                    direction={'up'}
                    ariaLabel="Add">
                    <SpeedDialAction
                        onClick={onOpenAddPostHandler}
                        icon={<LibraryAddIcon/>}
                        tooltipTitle={'Add Post'}
                    />
                    <SpeedDialAction
                        onClick={onOpenAddPhotoHandler}
                        icon={<AddPhotoAlternateIcon/>}
                        tooltipTitle={'Add Photo'}
                    />
                </SpeedDial>
            </Box>
            {
                openAddPhoto ? <Box><Preloader/></Box>
                    : <Box>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: '5% 5% 0 5%'
                        }}>
                            {
                                posts.data.length && posts.data.map(item => <PostCard post={item} key={item._id}/>)
                            }
                        </Box>
                        <Box>
                            {pagesCount > startValue / 10 && <Box ref={currentElement}><Preloader/></Box>}
                        </Box>
                    </Box>
            }


            <ModalWindow open={openAddPost} onCloseHandler={onOpenAddPostHandler}>
                <AddPostModal onCLose={onOpenAddPostHandler}/>
            </ModalWindow>
            <ModalWindow open={openAddPhoto} onCloseHandler={onOpenAddPhotoHandler}>
                <AddPhotoModal />
            </ModalWindow>
        </Box>
    )
}