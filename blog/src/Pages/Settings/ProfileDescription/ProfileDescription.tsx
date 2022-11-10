import Box from '@mui/material/Box';
import { Avatar, Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { ModalWindow } from '../../../Components/ModalWindow/ModalWindow';
import { DeleteModal } from '../../../Components/SettingsModal/Delete/DeleteModal';
import { EditModal } from '../../../Components/SettingsModal/Edit/EditModal';
import { commonUserType } from '../../../redux/CommonDataTypes/types';
import React, { useState } from 'react';

type ProfileDescriptionType = {
  authData: commonUserType;
};

export const ProfileDescription: React.FC<ProfileDescriptionType> = ({ authData }) => {
  const date = new Date(authData?.dateCreated as string);

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const onOpenDeleteHandler = () => {
    setOpenDelete((prevState) => !prevState);
  };
  const onOpenEditHandler = () => {
    setOpenEdit((prevState) => !prevState);
  };

  const img = authData.avatar && `http://test-blog-api.ficuslife.com${authData.avatar}`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, pl: 10, pr: 10, pt: 5 }}>
      <Box sx={{ mb: 5, fontWeight: '500', fontSize: '25px' }}>Profile Settings</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Avatar src={img} alt={'avatar'} sx={{ width: '100px', height: '100px', mr: 3 }} />
          </Box>
          <Box>
            <Box sx={{ mb: 3 }}>{authData?.name}</Box>
            <Box>{date.toLocaleDateString('en-GB')}</Box>
            <Box>{authData?.email}</Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button variant="contained" sx={{ mb: 1 }} startIcon={<Edit color="secondary" />} onClick={onOpenEditHandler}>
            Edit Profile
          </Button>
          <Button variant="contained" startIcon={<Delete color="secondary" />} onClick={onOpenDeleteHandler}>
            Delete Profile
          </Button>
        </Box>
      </Box>

      <Box></Box>
      <ModalWindow open={openDelete} onCloseHandler={onOpenDeleteHandler}>
        <DeleteModal onCloseHandler={onOpenDeleteHandler} />
      </ModalWindow>
      <ModalWindow open={openEdit} onCloseHandler={onOpenEditHandler}>
        <EditModal
          onCloseHandler={onOpenEditHandler}
          name={authData?.name as string}
          extra_details={authData?.extra_details as string}
          skills={authData?.skills as string}
          profession={authData?.profession as string}
          details={authData?.details as string}
        />
      </ModalWindow>
    </Box>
  );
};
