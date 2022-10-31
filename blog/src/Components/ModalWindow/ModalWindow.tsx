import {Modal, Paper} from "@mui/material";
import React from "react";
import style from './modalWindow.module.css'


type DeleteModalType = {
    open: boolean,
    onCloseHandler: () => void,
    children: React.ReactNode,
}

export const ModalWindow: React.FC<DeleteModalType> = ({open, onCloseHandler, children}) => {

    return <Modal
        open={open}
        onClose={onCloseHandler}
    >
        <Paper className={style.paper}>
            {children}
        </Paper>

    </Modal>
}