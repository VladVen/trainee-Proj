import { Box, CircularProgress } from "@mui/material";
import style from "./ticketsPage.module.css";
import { Filter } from "../../Components/Filter/Filter";
import { Tickets } from "../../Components/Tickets/Tickets";
import { commonTicketType } from "../../redux/Types/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/store";
import { getTickets } from "../../redux/Tickets/thunks";
import { AnyAction } from "redux";

type TicketsPageType = {
  searchId: string;
};

export type methodType = {
  none: boolean,
  without: boolean,
  one: boolean,
  two: boolean,
  three: boolean,
}
export type eventType = 'none' | 'without' | 'one' | 'two' | 'three'


export const TicketsPage: React.FC<TicketsPageType> = ({ searchId }) => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: AppStateType) => state.tickets.tickets);

  const [method, setMethod] = useState<methodType>( {
    none: true,
    without: false,
    one: false,
    two: false,
    three: false,
  });

  useEffect(() => {
    dispatch(getTickets(searchId) as unknown as AnyAction);
  }, []);

  useEffect(() => {
    if (Object.values(method)
        .every((item) => !item)) {
      setMethod((prevState) => ({
        ...prevState,
        none: true
      }))
    }
  }, [method]);

  if (!tickets.length) return <CircularProgress />;

  const setFilter = (tickets: commonTicketType[]) => {
    if(method.none) {
      return tickets
    } else  {
     return  tickets.filter( item => (method.without && !item.segments[0].stops.length && !item.segments[1].stops.length)
          || (method.one && item.segments[0].stops.length == 1 && item.segments[1].stops.length == 1)
          || (method.two && item.segments[0].stops.length == 2 && item.segments[1].stops.length == 2)
          || (method.three && item.segments[0].stops.length == 3 && item.segments[1].stops.length == 3)
      )
    }
  };

  const methodHandler = (name: eventType) => {
    setMethod((prevState) => ({
      ...prevState,
      ['none']: false,
      [name]: name === 'none' ? true : !prevState[name],
  }))
  }


  return (
    <Box className={style.container}>
      <Filter setMethod={methodHandler} method={method} />
      <Tickets tickets={setFilter(tickets)} />
    </Box>
  );
};
