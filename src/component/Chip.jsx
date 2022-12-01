import React from "react";
import styled from "styled-components";
// import { darkTheme, lightTheme } from "../theme/themes";
// Need to write component code for ChipWrapper using styled component by replacing `null` value
export const ChipWrapper = styled.span`
  background-color: ${(props) => props.theme.colors.bg1};
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
`;

const Chip = ({ onClick, isSelected, children }) => {
  return <ChipWrapper onClick={onClick}>{children}</ChipWrapper>;
};

export default Chip;
