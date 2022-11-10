import { Box, Button } from "@mui/material";
import { ButtonsGroup } from "../ButtonsGroup/ButtonsGroup";
import React, { useState } from "react";
import { Ticket } from "../Ticket/Ticket";
import { commonTicketType } from "../../redux/Types/types";
import style from './ticketsPage.module.css'

export type TicketsType = {
  tickets: commonTicketType[];
};
export type sortStateType = "price" | "time" | "optimal"


export const Tickets: React.FC<TicketsType> = ({ tickets }) => {
  const [portion, setPortion] = useState(5);
  const [sortState, setSortState] = useState<sortStateType>("price");

  const moreHandler = () => {
    setPortion((prevState) => prevState + 5);
  };
  const sortMethods = {
    none: undefined,
    price: (a: commonTicketType, b: commonTicketType) => a.price - b.price,
    time: (a: commonTicketType, b: commonTicketType) =>
      a.segments[0].duration +
      a.segments[1].duration -
      (b.segments[0].duration + b.segments[1].duration),
    optimal: (a: commonTicketType, b: commonTicketType) =>
        a.price + (a.segments[0].duration + a.segments[1].duration) -
      b.price + (b.segments[0].duration + b.segments[1].duration),
  };
  return (
    <Box className={style.container}>
      <ButtonsGroup setSortState={setSortState} sortState={sortState} />
      <Box>
        {[...tickets]
          .sort(sortMethods[sortState])
          .slice(0, portion)
          .map((item) => (
            <Ticket ticket={item} key={item.price} />
          ))}
      </Box>

      <Button
        sx={{ width: "100%" }}
        variant={"contained"}
        onClick={moreHandler}
      >
        Показать ещё 5
      </Button>
    </Box>
  );
};
