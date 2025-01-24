import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  overflow: hidden; /* Ensures ripple stays within button bounds */
  width: 36%;
  font-size: 16px;
  font-weight: 400;
  background-color: #b1e0ff;
  color: #333;
  padding: 12px;
  border-radius: 50px;
  border: 1px solid #45b5ff;
  outline: none;
  transition: all 0.3s ease;
  margin-top: 12px;
  &:hover {
    background-color: #5ebfff;
    cursor: pointer;
    border: 1px solid #45b5ff;
  }

  /* Ripple styles */
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.069);
    transform: scale(0);
    animation: ripple-animation 1.4s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const RippleButton = ({ children }) => {
  const createRipple = (event) => {
    const button = event.currentTarget;

    // Create ripple element
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    // Calculate size and position
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append ripple to button
    button.appendChild(ripple);

    // Remove ripple after animation
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return <Button onClick={createRipple}>{children}</Button>;
};

export default RippleButton;
