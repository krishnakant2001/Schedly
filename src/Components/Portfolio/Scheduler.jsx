import React, { useState } from "react";
import Register from "../Schedly/Register";
import MeetSchedule from "../Schedly/MeetSchedule";

const Scheduler = () => {
  const [SchedData, setSchedData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkdinUrl: "",
    selectedDate: null,
    selectedTime: null,
  });

  const handleRegisterChange = (updatedRegisterData) => {
    setSchedData((prevData) => ({ ...prevData, ...updatedRegisterData }));
  };
  const handleMeetScheduleChange = (updatedScheduleData) => {
    setSchedData((prevData) => ({ ...prevData, ...updatedScheduleData }));
  };
  const handleContinue = () => {
    console.log(SchedData);
  }
  
  return (
    <div>
      <Register
        registerData={SchedData}
        onRegisterChange={handleRegisterChange}
      />
      <MeetSchedule
        scheduleData={SchedData}
        onScheduleChange={handleMeetScheduleChange}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default Scheduler;
