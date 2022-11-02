import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import React, { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { EditModal } from './Edit/EditModal';
import { commonUserType } from '../../redux/CommonDataTypes/types';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../../redux/Login/thunks';
import { AnyAction } from 'redux';

type SettingsPartType = {
  profileData: commonUserType;
};

export const SettingsPart: React.FC<SettingsPartType> = ({ profileData }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  const onOpenDeleteHandler = () => {
    setOpenDelete((prevState) => !prevState);
  };

  const onOpenEditHandler = () => {
    setOpenEdit((prevState) => !prevState);
  };

  const deleteHandler = () => {
    dispatch(deleteAccount() as unknown as AnyAction);
    onOpenDeleteHandler();
  };

  const title = 'Are you sure to delete this account ?';

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="contained" sx={{ mb: 1 }} startIcon={<Edit color="secondary" />} onClick={onOpenEditHandler}>
          Edit Profile
        </Button>
        <Button variant="contained" startIcon={<Delete color="secondary" />} onClick={onOpenDeleteHandler}>
          Delete Profile
        </Button>
      </Box>

      <ModalWindow open={openDelete} onCloseHandler={onOpenDeleteHandler}>
        <DeleteModal title={title} onCloseHandler={onOpenDeleteHandler} deleteHandler={deleteHandler} />
      </ModalWindow>

      <ModalWindow open={openEdit} onCloseHandler={onOpenEditHandler}>
        <EditModal
          onCloseHandler={onOpenEditHandler}
          name={profileData?.name as string}
          extra_details={profileData?.extra_details as string}
          skills={profileData?.skills as string}
          profession={profileData?.profession as string}
          details={profileData?.details as string}
        />
      </ModalWindow>
    </Box>
  );
};
