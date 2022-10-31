import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import style from './preloader.module.css'


export const Preloader = () => {
  return <Box className={style.preloader}>
      <CircularProgress />
  </Box>
}