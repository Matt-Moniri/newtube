import React from "react";
import styled from "styled-components";
// Need to write component code for StyledIcon using styled component by replacing `null` value
export const StyledIcon = styled.div`
  width: 10px;
  height: 10px;
  /* background-image: url("search.jpg");
  background-size: contain;
  background-repeat: no-repeat; */
`;

const Icon = ({ onClick, children, className }) => {
  return <StyledIcon className={className} onClick={onClick} />;
};

export default Icon;
