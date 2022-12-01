import React from "react";
import styled from "styled-components";
// Need to write component code for StyledInput using styled component by replacing `null` value
export const StyledInput = styled.input`
  font-size: 25px;
  width: 9rem;
  border-radius: 10px;
  border: 0;
  padding: 0.2rem 1rem 0.2rem 1rem;
`;

const Input = ({ type, placeholder, onSubmit, children }) => {
  return (
    <StyledInput onSubmit={onSubmit} placeholder={placeholder} type={type} />
  );
};

export default Input;
