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
const ScheduleConfirm = (props) => {
  return (
    <ScheduleConfirmMod onClose={props.onCloseConfirmation}>
        <Section>
            <Title>Confirmation Message</Title>
        </Section>
            <Container>
                {props.data.firstName} 
            </Container>
    </ScheduleConfirmMod>
  )
}

export default ScheduleConfirm