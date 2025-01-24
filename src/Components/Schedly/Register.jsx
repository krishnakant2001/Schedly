import { TextField } from "@mui/material";
import React, { useState } from "react";
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

const Title = styled.div`
  font-size: 36px;
  font-weight: 400;
  padding: 2px;
`;

const Section = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 80%;
  /* border: 1px solid black; */
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

const Register = () => {
  const [cred, setCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    lkdUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCred((prev) => {
      console.log(prev);
      return { ...prev, [name]: value };
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    // console.log(event);

    console.log("Form Submitted");
    console.log("FirstName: ", cred.firstName);
    console.log("LastName: ", cred.lastName);
    console.log("Email: ", cred.email);
    console.log("LinkdIn URL: ", cred.lkdUrl);
  };
  return (
    <Container>
      <Wrapper>
        {/* <Title>Sign In</Title> */}
        <Section onClick={handleClick}>
          <Input>
            <Hinput>
              <TextField
                name="firstName"
                id="fname"
                label="First name"
                variant="outlined"
                value={cred.firstName}
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                id="lname"
                label="Last name"
                variant="outlined"
                value={cred.lastName}
                onChange={handleChange}
              />
            </Hinput>
            <TextField
              name="email"
              id="email"
              label="Email address"
              type="email"
              variant="outlined"
              value={cred.email}
              onChange={handleChange}
            />
            <TextField
              name="lkdUrl"
              id="lkdUrl"
              label="LinkedIn Profile URL"
              type="url"
              variant="outlined"
              value={cred.lkdUrl}
              onChange={handleChange}
            />
          </Input>
          <Button onClick={handleClick}>Next</Button>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Register;
