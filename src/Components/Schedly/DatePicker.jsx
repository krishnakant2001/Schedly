import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const SchedlyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  if(selectedDate !== null) console.log(selectedDate.format("DD-MM-YYYY"));

  // Function to disable all days except Friday, Saturday, and Sunday
  const disableNonWeekendAndPastDays = (date) => {
    const day = dayjs(date).day();
    const isWeekend = (day === 1 || day === 2 || day === 3 || day === 4)
    const isPastDate = dayjs(date).isBefore(dayjs(), "day");
    return isWeekend || isPastDate
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Please Select Date"
          value={selectedDate}
          onChange={(newValue) =>
            setSelectedDate(newValue)
          }
          shouldDisableDate={disableNonWeekendAndPastDays}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default SchedlyDatePicker;
