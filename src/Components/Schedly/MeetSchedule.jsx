import React, { useState } from "react";
import styled from "styled-components";
// import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Fab, TextField } from "@mui/material";
import SchedlyDatePicker from "./DatePicker";
import TimeSelect from "./TimeSelect";
import RippleButton from "./RippleButton";
// import googleLogo from "../assets/google.png";

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
const Icon = styled.div`
  margin-top: 12px;
  padding: 4px;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 400;
  padding: 2px;
`;
// const Subtitle = styled.div`
//   width: 80%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 4px;
//   color: #545454;
//   margin-bottom: 12px;
// `;
// const Google = styled.button`
//   width: 60%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
//   font-size: 16px;
//   font-weight: 400;
//   color: #333;
//   background-color: transparent;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 50px;
//   &:hover {
//     background-color: #dbdbdb;
//     cursor: pointer;
//     border: 1px solid #9a9a9a;
//   }
// `;
// const Img = styled.img`
//   width: 24px;
// `;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ScheduleSection = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

`
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



const MeetSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Wrapper>
        {/* <Icon><BlurOnIcon fontSize="large" /></Icon> */}
        <Form onSubmit={handleSubmit}>
          <ScheduleSection>
            <SchedlyDatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <TimeSelect selectedDate={selectedDate} />
          </ScheduleSection>
          <Btns>
            <Button>Previous</Button>
            <RippleButton children={"Continue"}/>
          </Btns>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default MeetSchedule;
