import style from './topic.module.css'
import {Button} from "@mui/material";


export const Topic = () => {
    return (
        <div className={style.container}>
            <div style={{color: '#ADEFD1FF'}}>Logo</div>
            <div>
                <Button variant="contained" className={style.signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}