import { Box } from "@mui/material";
import style from "./tickets.module.css";
import { Filter } from "../../Components/Filter/Filter";
import { Tickets } from "../../Components/Tickets/Tickets";
import {commonTicketType} from "../../redux/Types/types";
import React from "react";

export type TicketsType = {
    tickets: commonTicketType[]
}

export const TicketsPage: React.FC<TicketsType> = ({tickets}) => {
  return (
    <Box className={style.container}>
      <Filter />
      <Tickets tickets={tickets}/>
    </Box>
  );
};
