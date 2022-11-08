import { Box, Paper } from "@mui/material";
import { commonTicketType } from "../../redux/Types/types";
import React from "react";
import logo from "../../assets/companyLogo.png";
import { Segment } from "./Segment/Segment";

type TicketType = {
  ticket: commonTicketType;
};

export const Ticket: React.FC<TicketType> = ({ ticket }) => {
  return (
    <Paper sx={{ p: "20px", m: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
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
