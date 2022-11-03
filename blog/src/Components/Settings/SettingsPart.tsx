import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import React, { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { EditProfileModal } from './EditProfile/EditProfileModal';
import { commonUserType } from '../../redux/CommonDataTypes/types';
import { useDispatch } from 'react-redux';
import { deleteAccount, updateAvatar } from '../../redux/Login/thunks';
import { AnyAction } from 'redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SecondStepForm } from '../addModal/AddPost/PostSteps/SecondStepForm';

type SettingsPartType = {
  profileData: commonUserType;
};

export const SettingsPart: React.FC<SettingsPartType> = ({ profileData }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);

  const dispatch = useDispatch();

  const onOpenDeleteHandler = () => {
    setOpenDelete((prevState) => !prevState);
  };

  const onOpenEditHandler = () => {
    setOpenEdit((prevState) => !prevState);
  };
  const onOpenAvatarHandler = () => {
    setOpenAvatar((prevState) => !prevState);
  };

  const deleteHandler = () => {
    dispatch(deleteAccount() as unknown as AnyAction);
    onOpenDeleteHandler();
  };

  const addPhotoHandler = async (file: File, id: string) => {
    await dispatch(updateAvatar(file, id) as unknown as AnyAction);
  };

  const title = 'Are you sure to delete this account ?';

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="contained" sx={{ mb: 1 }} startIcon={<Edit color="secondary" />} onClick={onOpenEditHandler}>
          Edit Profile
        </Button>
        <Button
          variant="contained"
          sx={{ mb: 1 }}
          startIcon={<AccountCircleIcon color="secondary" />}
          onClick={onOpenAvatarHandler}
        >
          Change Avatar
        </Button>
        <Button variant="contained" startIcon={<Delete color="secondary" />} onClick={onOpenDeleteHandler}>
          Delete Profile
        </Button>
      </Box>

      <ModalWindow open={openDelete} onCloseHandler={onOpenDeleteHandler}>
        <DeleteModal title={title} onCloseHandler={onOpenDeleteHandler} deleteHandler={deleteHandler} />
      </ModalWindow>

      <ModalWindow open={openEdit} onCloseHandler={onOpenEditHandler}>
        <EditProfileModal
          onCloseHandler={onOpenEditHandler}
          name={profileData.name}
          extra_details={profileData.extra_details}
          skills={profileData.skills}
          profession={profileData.profession}
          details={profileData.details}
        />
      </ModalWindow>
      <ModalWindow open={openAvatar} onCloseHandler={onOpenAvatarHandler}>
        <SecondStepForm onCLose={onOpenAvatarHandler} onSubmit={addPhotoHandler} id={profileData._id} />
      </ModalWindow>
    </Box>
  );
};
