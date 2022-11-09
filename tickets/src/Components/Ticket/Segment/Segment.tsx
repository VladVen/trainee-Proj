import { commonSegmentType } from "../../../redux/Types/types";
import React from "react";
import { Box } from "@mui/material";
import style from './segment.module.css'

type SegmentType = {
  segment: commonSegmentType;
};

export const Segment: React.FC<SegmentType> = ({ segment }) => {
  const date = new Date(segment.date).toLocaleTimeString().slice(0, -3);

  const arrivalTime = () => {
    const date = new Date(segment.date);
    date.setMinutes(date.getMinutes() + segment.duration);
    return date.toLocaleTimeString().slice(0, -3);
  };

  const hours = Math.floor(segment.duration / 60);
  const minutes = segment.duration % 60;

  return (
    <Box className={style.container}>
      <Box>
        <Box className={style.title}>
          {segment.origin} - {segment.destination}
        </Box>
        <Box>
          {date} - {arrivalTime()}
        </Box>
      </Box>
      <Box>
        <Box className={style.title}>В пути</Box>
        <Box>
          {hours}ч {minutes}м{" "}
        </Box>
      </Box>
      {segment.stops.length ? (
        <Box>
          <Box className={style.title}>
            Пересадки
          </Box>
          <Box sx={{ display: "flex" }}>
            {segment.stops.map((item, index) =>
              index === 0 ? (
                <Box key={index}>{item}</Box>
              ) : (
                <Box key={index}>,{item}</Box>
              )
            )}
          </Box>
        </Box>
      ) :  <Box className={style.title}>
        Без Пересадок
      </Box>}
    </Box>
  );
};
