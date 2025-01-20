import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #555;
  text-align: center;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <div>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </div>
    </LoadingContainer>
  );
};

export default LoadingScreen;
