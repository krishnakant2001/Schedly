import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

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

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 80%;
`;

const Hinput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Register = ({registerData, onRegisterChange, onNext}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onRegisterChange({ [name]: value });
  };
  return (
    <Container>
      <Wrapper>
        <Input>
          <Hinput>
            <TextField
              name="firstName"
              id="fname"
              label="First name"
              required
              variant="outlined"
              value={registerData.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              id="lname"
              label="Last name"
              variant="outlined"
              value={registerData.lastName}
              onChange={handleChange}
            />
          </Hinput>
          <TextField
            name="email"
            id="email"
            label="Email address"
            type="email"
            required
            variant="outlined"
            value={registerData.email}
            onChange={handleChange}
          />
          <TextField
            name="linkdinUrl"
            id="linkdinUrl"
            label="LinkedIn Profile URL"
            type="url"
            required
            variant="outlined"
            value={registerData.lkdUrl}
            onChange={handleChange}
          />
        </Input>
        <Button onClick={onNext}>Next</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
