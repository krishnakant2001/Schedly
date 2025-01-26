import React, { useState } from "react";
import Register from "../Schedly/Register";
import MeetSchedule from "../Schedly/MeetSchedule";
import ScheduleConfirm from "../Schedly/ScheduleConfirm";

const Scheduler = () => {
  const [SchedData, setSchedData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkdinUrl: "",
    selectedDate: null,
    selectedTime: null,
  });
  const [ConfirmationMsg, setConfirmationMsg] = useState(false);

  const handleRegisterChange = (updatedRegisterData) => {
    setSchedData((prevData) => ({ ...prevData, ...updatedRegisterData }));
  };
  const handleMeetScheduleChange = (updatedScheduleData) => {
    setSchedData((prevData) => ({ ...prevData, ...updatedScheduleData }));
  };
  const handleContinue = () => {
    console.log(SchedData);
  };
  const showConfimationHandler = () => {
    setConfirmationMsg(true);
  };
  const hideConfirmationHandler = () => {
    setConfirmationMsg(false);
  };

  return (
    <div>
      <Register
        registerData={SchedData}
        onRegisterChange={handleRegisterChange}
      />
      <MeetSchedule
        scheduleData={SchedData}
        onScheduleChange={handleMeetScheduleChange}
        onContinue={showConfimationHandler}
        // onShowConfirmation={}
      />
      {ConfirmationMsg && (
        <ScheduleConfirm
          data={SchedData}
          onCloseConfirmation={hideConfirmationHandler}
        />
      )}
    </div>
  );
};

export default Scheduler;
