import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {useEffect, useMemo, useState} from "react";
import {getUsers} from "../../redux/Users/thunks";
import {AnyAction} from "redux";
import useOnScreen from "../../Hooks/useOnScreen";
import Box from "@mui/material/Box";
import {UserCard} from "../../Components/UserCard/UserCard";
import {Preloader} from "../../Components/Preloader/Preloader";
import {usersActions} from "../../redux/Users/actions";


export const Users = () => {

    const dispatch = useDispatch()

    const users = useSelector((state: AppStateType) => state.users.users)

    const [startValue, setStartValue] = useState(0)

    const [intersecting, currentElement] = useOnScreen();

    const totalCount = useMemo(() => users.pagination.total as number, [users.pagination.total])
    const portion = useMemo(() => users.pagination.limit as number, [users.pagination.limit])

    const pagesCount = useMemo(() => Math.ceil( totalCount / portion), [totalCount, portion] )

    const onLeaveHandler = () => {
        dispatch(usersActions.clearUsers())
    }

    useEffect(() => {
        return onLeaveHandler
    }, [])


    const moreHandler = () => {
        if (intersecting) {
            if(!users.data.length) {
                dispatch(getUsers(startValue) as unknown as AnyAction)
                setStartValue(prevState => prevState + 10)
            } else if(pagesCount > startValue/10) {
                dispatch(getUsers(startValue) as unknown as AnyAction)
                setStartValue(prevState => prevState + 10)
            }
        }
    }

    useEffect(() => {
        moreHandler()
    }, [intersecting])

    if (!users.data.length) {
        return <Box ref={currentElement}><Preloader /></Box>
    }
    return (
        <Box>
            <Box sx={{mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {users.data.map(item => <UserCard key={item._id} name={item.name} avatar={item.avatar}
                                             email={item.email} status={item.extra_details}/>)}
            </Box>
            <Box sx={{mb: 5, display: 'flex', flex: 1, justifyContent: 'center'}}>
                <CircularProgress ref={currentElement}/>
            </Box>
        </Box>
    )
}