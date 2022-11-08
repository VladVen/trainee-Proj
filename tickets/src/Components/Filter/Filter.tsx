import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup} from "@mui/material";


export const Filter = () => {
  return <Paper sx={{p: 5, height: '250px'}}>
      <FormControl>
          <FormLabel id="filter">Количество пересадок</FormLabel>
          <RadioGroup
              aria-labelledby="filter"
              defaultValue="all"
              name="filter"
          >
              <FormControlLabel value="all" control={<Radio />} label="Все" />
              <FormControlLabel value="without" control={<Radio />} label="Без пересадок" />
              <FormControlLabel value="one" control={<Radio />} label="1 пересадка" />
              <FormControlLabel value="two" control={<Radio />} label="2 пересадки" />
              <FormControlLabel value="three" control={<Radio />} label="3 пересадки" />
          </RadioGroup>
      </FormControl>
  </Paper>
}