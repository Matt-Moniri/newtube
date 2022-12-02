import React from "react";
import styled from "styled-components";
// import { darkTheme, lightTheme } from "../theme/themes";
// Need to write component code for ChipWrapper using styled component by replacing `null` value
export const ChipWrapper = styled.button`
  background-color: ${(props) => props.theme.colors.bg1};
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid;
`;

const Chip = ({ onClick, isSelected, children }) => {
  return <ChipWrapper onClick={onClick}>{children}</ChipWrapper>;
};

export default Chip;
