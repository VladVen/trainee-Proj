import { Box, Paper } from "@mui/material";
import { commonTicketType } from "../../redux/Types/types";
import React from "react";
import logo from "../../assets/companyLogo.png";
import { Segment } from "./Segment/Segment";
import style from './ticket.module.css'

type TicketType = {
  ticket: commonTicketType;
};

export const Ticket: React.FC<TicketType> = ({ ticket }) => {
  return (
    <Paper className={style.paper}>
      <Box
          className={style.container}
      >
        <Box color={"#2196F3"}>{ticket.price} P</Box>
        <Box>
          <img src={logo} alt={"logo"} style={{ width: "110px" }} />
        </Box>
      </Box>
      <Box>
        {ticket.segments.map((item) => (
          <Segment segment={item} key={item.date} />
        ))}
      </Box>
    </Paper>
  );
};
