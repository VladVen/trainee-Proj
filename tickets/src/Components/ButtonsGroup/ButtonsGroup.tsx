import {Box, Button, ButtonGroup} from "@mui/material";


export const ButtonsGroup = () => {
  return <Box>
    <ButtonGroup variant="outlined" aria-label="sort">
      <Button>Самый дешёвый</Button>
      <Button>Самый быстрый</Button>
      <Button>Оптимальный</Button>
    </ButtonGroup>
  </Box>
}