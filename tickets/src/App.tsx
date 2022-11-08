import React, { useCallback, useEffect } from "react";
import "./App.css";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./redux/store";
import { getSearchId, getTickets } from "./redux/Tickets/thunks";
import { AnyAction } from "redux";
import { Header } from "./Components/Header/Header";
import { TicketsPage } from "./Pages/TicketsPage/TicketsPage";

const App = React.memo(() => {
  const dispatch = useDispatch();
  const searchId = useSelector((state: AppStateType) => state.tickets.searchId);
  const tickets = useSelector((state: AppStateType) => state.tickets.tickets?.tickets);

  const getData = useCallback(async () => {
    if (!searchId) {
      await dispatch(getSearchId() as unknown as AnyAction);
    }
    if (searchId && !tickets) {
      await dispatch(getTickets(searchId) as unknown as AnyAction);
    }
  }, [searchId]);

  useEffect(() => {
    getData();
  }, [searchId]);


  if (!searchId || !tickets) return <CircularProgress />;

  return (
    <Box>
      <Header />
      <TicketsPage tickets={tickets}/>
    </Box>
  );
});

export default App;
