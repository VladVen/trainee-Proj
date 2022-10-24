import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";


export const Settings = () => {

    const authData = useSelector((state: AppStateType) => state.auth.authData)

    if (!authData) {
        return <Navigate to={'/signin'}/>
    }

    return (
        <Box>
            Settings
        </Box>
    )
}

