import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { sortStateType } from "../Tickets/Tickets";
import style from "./buttonsGroup.module.css";

type ButtonsGroupType = {
  setSortState: (sort: sortStateType) => void;
  sortState: sortStateType;
};

export const ButtonsGroup: React.FC<ButtonsGroupType> = ({
  setSortState,
  sortState,
}) => {
  const variant = (name: string) => {
    return sortState == name ? "contained" : "outlined";
  };

  return (
    <Box>
      <ButtonGroup
        variant="outlined"
        aria-label="sort"
        className={style.btnGroup}
      >
        <Button
          onClick={() => setSortState("price")}
          variant={variant("price")}
        >
          Самый дешeвый
        </Button>
        <Button onClick={() => setSortState("time")} variant={variant("time")}>
          Самый быстрый
        </Button>
        <Button
          onClick={() => setSortState("optimal")}
          variant={variant("optimal")}
        >
          Оптимальный
        </Button>
      </ButtonGroup>
    </Box>
  );
};
