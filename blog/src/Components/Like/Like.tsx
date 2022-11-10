import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';

type LikeType = {
  likes: string[];
  id: string;
  color?: 'secondary' | 'primary';
  dispatchMethod: (id: string) => void;
};

export const Like: React.FC<LikeType> = ({ dispatchMethod, likes, id, color = 'secondary' }) => {
  const [likesCount, setLikesCount] = useState(likes.length);
  const [likeColor, setLikeColor] = useState<'secondary' | 'primary' | 'error'>(() => color);
  const myId = useSelector((state: AppStateType) => state.auth.authData?._id) as string;

  useEffect(() => {
    setLikesCount(likes.length);
  }, [likes.length]);

  const likeHandler = async () => {
    if (likeColor === 'error') {
      await dispatchMethod(id);
      setLikeColor(color);
    } else {
      await dispatchMethod(id);
      setLikeColor('error');
    }
  };

  useEffect(() => {
    if (likes.find((item) => item == myId)) {
      setLikeColor('error');
    } else {
      setLikeColor(color);
    }
  }, [likes.length]);

  return (
    <Button
      endIcon={<FavoriteIcon color={likeColor} />}
      color={color}
      onClick={async (event) => {
        event.stopPropagation();
        await likeHandler();
      }}
    >
      {likesCount}
    </Button>
  );
};
