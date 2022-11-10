import React, { useCallback, useEffect } from "react";
import "./App.css";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./redux/store";
import { getSearchId } from "./redux/Tickets/thunks";
import { AnyAction } from "redux";
import { Header } from "./Components/Header/Header";
import { TicketsPage } from "./Pages/TicketsPage/TicketsPage";

const App = React.memo(() => {
  const dispatch = useDispatch();
  const searchId = useSelector((state: AppStateType) => state.tickets.searchId);

  const getData = useCallback(async () => {
    if (!searchId) {
      await dispatch(getSearchId() as unknown as AnyAction);
    }
  }, [searchId]);

  useEffect(() => {
    getData();
  }, [searchId]);


  if (!searchId) return <CircularProgress />;

  return (
    <Box>
      <Header />
      <TicketsPage searchId={searchId}/>
    </Box>
  );
});

export default App;
