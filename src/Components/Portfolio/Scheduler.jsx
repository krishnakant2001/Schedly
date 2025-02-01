import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RegisterStep SchedData={SchedData} setSchedData={setSchedData} />
          }
        />
        <Route
          path="/schedule"
          element={
            <MeetScheduleStep
              SchedData={SchedData}
              setSchedData={setSchedData}
              setConfirmationMsg={setConfirmationMsg}
            />
          }
        />
        <Route
          path="/confirmation"
          element={ConfirmationMsg && <ScheduleConfirm data={SchedData} />}
        />
      </Routes>
    </Router>
  );
};

const RegisterStep = ({ SchedData, setSchedData }) => {
  const navigate = useNavigate();

  const handleRegisterChange = (updatedRegisterData) => {
    setSchedData((prevData) => ({ ...prevData, ...updatedRegisterData }));
  };

  return (
    <Register
      registerData={SchedData}
      onRegisterChange={handleRegisterChange}
      onNext={() => navigate("/schedule")}
    />
  );
};

const MeetScheduleStep = ({ SchedData, setSchedData, setConfirmationMsg }) => {
  const navigate = useNavigate();

  const handleMeetScheduleChange = (updatedScheduleData) => {
    setSchedData((prevData) => ({ ...prevData, ...updatedScheduleData }));
  };

  const showConfirmation = () => {
    setConfirmationMsg(true);
    navigate("/confirmation");
  };

  return (
    <MeetSchedule
      scheduleData={SchedData}
      onScheduleChange={handleMeetScheduleChange}
      onContinue={showConfirmation}
    />
  );
};

export default Scheduler;
