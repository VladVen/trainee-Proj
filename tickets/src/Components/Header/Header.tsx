import { Box } from "@mui/material";
import headerPhoto from "../../assets/headerPhoto.png";
import style from "./header.module.css";

export const Header = () => {
  return (
    <Box className={style.container}>
      <img src={headerPhoto} alt={"headerPhoto"} className={style.img} />
    </Box>
  );
};
