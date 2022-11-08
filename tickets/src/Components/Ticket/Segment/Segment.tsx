import { commonSegmentType } from "../../../redux/Types/types";
import React from "react";
import { Box } from "@mui/material";

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
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <Box>
          {segment.origin} - {segment.destination}
        </Box>
        <Box>
          {date} - {arrivalTime()}
        </Box>
      </Box>
      <Box>
        <Box>В пути</Box>
        <Box>
          {hours}ч {minutes}м{" "}
        </Box>
      </Box>
      {segment.stops.length ? (
        <Box>
          <Box>
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
      ) :  <Box>
        Без Пересадок
      </Box>}
    </Box>
  );
};
