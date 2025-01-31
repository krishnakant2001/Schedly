import React from 'react'
import ScheduleConfirmMod from '../../Mod/ScheduleConfirmMod';
import styled from 'styled-components';

const Section = styled.div`
  max-height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 1rem;
`;
const Button = styled.button`
  width: 36%;
  font-size: 16px;
  font-weight: 400;
  background-color: #c7f2f3;
  color: #333;
  padding: 12px;
  border-radius: 50px;
  border: 1px solid #093b43;
  outline: none;
  transition: all 0.3s ease;
  margin-top: 12px;
  &:hover {
    background-color: #98cecf;
    cursor: pointer;
    border: 1px solid #7be7ff;
  }
`;
const handleSubmit = async (data) => {
  console.log(data);
  const userData = data;
  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error submitting data:", error);
  }
}
const ScheduleConfirm = (props) => {
  return (
    <ScheduleConfirmMod onClose={props.onCloseConfirmation}>
      <Section>
        <Title>Confirmation Message</Title>
      </Section>
      <Container>{props.data.firstName}</Container>
      <Button onClick={() => handleSubmit(props.data)}>Submit</Button>
    </ScheduleConfirmMod>
  );
}

export default ScheduleConfirm