import { SpeedDial, SpeedDialAction } from '@mui/material';
import { Add } from '@mui/icons-material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { AddPostModal } from './AddPost/AddPostModal';
import { AddPhotoModal } from './addPhoto/AddPhotoModal';

export const AddSpeedDial = () => {
  const [openAddPost, setOpenAddPost] = useState(false);
  const [openAddPhoto, setOpenAddPhoto] = useState(false);

  const onOpenAddPostHandler = () => {
    setOpenAddPost((prevState) => !prevState);
  };
  const onOpenAddPhotoHandler = () => {
    setOpenAddPhoto((prevState) => !prevState);
  };

  return (
    <Box>
      <Box sx={{ position: 'fixed', bottom: 40, right: 15 }}>
        <SpeedDial icon={<Add />} direction={'up'} ariaLabel="Add">
          <SpeedDialAction onClick={onOpenAddPostHandler} icon={<LibraryAddIcon />} tooltipTitle={'Add Post'} />
          <SpeedDialAction
            onClick={onOpenAddPhotoHandler}
            icon={<AddPhotoAlternateIcon />}
            tooltipTitle={'Add Photo'}
          />
        </SpeedDial>
      </Box>
      <ModalWindow open={openAddPost} onCloseHandler={onOpenAddPostHandler}>
        <AddPostModal onCLose={onOpenAddPostHandler} />
      </ModalWindow>
      <ModalWindow open={openAddPhoto} onCloseHandler={onOpenAddPhotoHandler}>
        <AddPhotoModal />
      </ModalWindow>
    </Box>
  );
};
