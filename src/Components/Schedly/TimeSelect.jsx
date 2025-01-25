
import React, { useState } from 'react'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from 'dayjs';


const TimeSelect = ({ selectedDate, setSelectedTime }) => {
  const [slot, setSlot] = useState("");

  const handleChange = (event) => {
    setSlot(event.target.value);
    setSelectedTime(event.target.value);
  };

  const isFriday = selectedDate && dayjs(selectedDate).day() === 5;

  return (
    <Box sx={{ minWidth: 230 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={slot}
          label="Time Slot"
          onChange={handleChange}
        >
          <MenuItem value={"12:00 PM to 12:30 PM"} disabled={isFriday}>
            12:00 PM to 12:30 PM
          </MenuItem>
          <MenuItem value={"6:30 PM to 7:00 PM"}>6:30 PM to 7:00 PM</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TimeSelect
