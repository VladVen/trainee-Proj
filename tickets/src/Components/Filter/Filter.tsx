import { Checkbox, FormControlLabel, FormLabel, Paper } from "@mui/material";
import { eventType, methodType } from "../../Pages/TicketsPage/TicketsPage";
import React from "react";

type FilterType = {
  method: methodType;
  setMethod: (name: eventType) => void;
};

export const Filter: React.FC<FilterType> = ({ setMethod, method }) => {
  return (
    <Paper sx={{ p: 5, height: "250px", display:'flex', flexDirection: 'column', mb: 5}}>
        <FormLabel id="filter">Количество пересадок</FormLabel>
          <FormControlLabel
            value="none"
            checked={method.none}
            onChange={() => setMethod('none')}
            control={<Checkbox />}
            label="Все"
          />
          <FormControlLabel
            value="without"
            checked={method.without}
            onChange={() => setMethod('without')}
            control={<Checkbox />}
            label="Без пересадок"
          />
          <FormControlLabel
            value="one"
            checked={method.one}
            onChange={() => setMethod('one')}
            control={<Checkbox />}
            label="1 пересадка"
          />
          <FormControlLabel
            value="two"
            checked={method.two}
            onChange={() => setMethod('two')}
            control={<Checkbox />}
            label="2 пересадки"
          />
          <FormControlLabel
            value="three"
            checked={method.three}
            onChange={() => setMethod('three')}
            control={<Checkbox />}
            label="3 пересадки"
          />
    </Paper>
  );
};
