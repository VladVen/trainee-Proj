import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {useEffect, useState} from "react";
import {getUsers} from "../../redux/Users/thunks";
import {AnyAction} from "redux";
import useOnScreen from "../../Components/Hooks/useOnScreen";
import Box from "@mui/material/Box";
import {UserCard} from "../../Components/UserCard/UserCard";


export const Users = () => {

    const dispatch = useDispatch()

    const users = useSelector((state: AppStateType) => state.users.users)

    const [startValue, setStartValue] = useState(0)

    const [intersecting, currentElement] = useOnScreen();

    const moreHandler = () => {
        if (intersecting) {
            dispatch(getUsers(startValue) as unknown as AnyAction)
            setStartValue(prevState => prevState + 10)
        }
    }

    useEffect(() => {
        moreHandler()
    }, [intersecting])

    if (!users.length) {
        return <Box sx={{mt: 4, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress ref={currentElement}/>
        </Box>
    }
    return (
        <Box>
            <Box sx={{mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {users.map(item => <UserCard key={item._id} name={item.name} avatar={item.avatar}
                                             email={item.email} status={item.extra_details}/>)}
            </Box>
            <Box sx={{mb: 5, display: 'flex', flex: 1, justifyContent: 'center'}}>
                <CircularProgress ref={currentElement}/>
            </Box>
        </Box>
    )
}