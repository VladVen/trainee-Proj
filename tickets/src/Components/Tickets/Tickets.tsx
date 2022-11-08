import { Box, Button } from "@mui/material";
import { ButtonsGroup } from "../ButtonsGroup/ButtonsGroup";
import React, { useState } from "react";
import { TicketsType } from "../../Pages/TicketsPage/TicketsPage";
import { Ticket } from "../Ticket/Ticket";

export const Tickets: React.FC<TicketsType> = ({ tickets }) => {
  const [portion, setPortion] = useState(5);

  const moreHandler = () => {
    setPortion((prevState) => prevState + 5);
  };

  return (
    <Box sx={{ p: "0 20px 20px 20px" }}>
      <ButtonsGroup />
      <Box>
        {tickets.slice(0, portion).map((item) => (
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
