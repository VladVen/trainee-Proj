import React, { ChangeEvent, useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addPhoto, getCurrentPost } from '../../../redux/Posts/thunks';
import { AnyAction } from 'redux';
import Box from '@mui/material/Box';

type PhotoChangeType = {
  postId: string;
};

export const PhotoChange: React.FC<PhotoChangeType> = ({ postId }) => {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const inputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    setSubmitting(true);
    const file = event.currentTarget.files as FileList;
    await dispatch(addPhoto(file[0], postId) as unknown as AnyAction);
    await dispatch(getCurrentPost(postId) as unknown as AnyAction);

    setSubmitting(false);
  };

  return (
    <Box>
      <input
        id="file"
        name="file"
        type="file"
        hidden
        onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event)}
      />
      <label htmlFor="file">
        <Button variant="contained" color="secondary" component={'span'} disabled={submitting}>
          Change Photo
        </Button>
      </label>
    </Box>
  );
};
