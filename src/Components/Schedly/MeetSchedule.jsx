import React from "react";
import styled from "styled-components";
import SchedlyDatePicker from "./DatePicker";
import TimeSelect from "./TimeSelect";
import RippleButton from "./RippleButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  border: 2px solid #ccc;
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  padding: 4px;
`;

const ScheduleSection = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const Btns = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  width: 36%;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  color: #333;
  padding: 12px;
  border-radius: 50px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s ease;
  margin-top: 12px;
  &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
    border: 1px solid #9a9a9a;
  }
`;

const MeetSchedule = ({ scheduleData, onScheduleChange, onContinue }) => {
  const handleDateChange = (date) => {
    onScheduleChange({ selectedDate: date });
  };
  const handleTimeChange = (timeSlot) => {
    onScheduleChange({ selectedTime: timeSlot });
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <ScheduleSection>
          <SchedlyDatePicker
            selectedDate={scheduleData.selectedDate}
            setSelectedDate={handleDateChange}
          />
          <TimeSelect
            selectedDate={scheduleData.selectedDate}
            setSelectedTime={handleTimeChange}
          />
        </ScheduleSection>
        <Btns>
          <Button onClick={() => navigate('/')}>Previous</Button>
          <RippleButton onClickButton={onContinue} children={"Continue"} />
        </Btns>
      </Wrapper>
    </Container>
  );
};

export default MeetSchedule;
