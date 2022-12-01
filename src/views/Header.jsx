import React from "react";
import styled from "styled-components";
import Icon from "../component/Icon";
import Input from "../component/Input";
export default function Header(props) {
  // Need to write component code for Container using styled component by replacing `null` value

  const Container = styled.header`
    bbackground-color: darkgoldenrod;
    height: 120px;
  `;

  //    ({ children }) => (
  //     <div className="header-container">{children}</div>
  //   );
  // Need to write component code for Container, Wrapper, Menu, SearchBar, QuickIcon, LogoTitle, StyledInput, using styled component by replacing `null` value
  const Wrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5px 3px;
    bborder: blue solid 1px;
  `;

  // Need to write component code for Menu using styled component by replacing `null` value
  const Menu = styled.nav`
    bborder: solid violet 1px;
    text-align: right;
    padding: 5px;
    bbackground-color: yellow;
  `;
  // Need to write component code for SearchBar using styled component by replacing `null` value
  const SearchBar = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    bborder: solid violet 1px;
    display: flex; /* or inLine—fLeX */
    flex-flow: row wrap; /*main axis and wrap*/
    justify-content: center; /* along main axis*/
    align-items: center; /*along cross axis*/
    align-content: center; /*the lines inside*/
    gap: 10px; /*min space between items not border*/
    bborder-top: 1px solid;
    background-color: grey;
    padding: 5px;
  `;

  // Need to write component code for QuickIcon using styled component by replacing `null` value
  const QuickIcon = styled.div`
    bborder: solid violet 1px;
    display: flex; /* or inLine—fLeX */
    flex-flow: row wrap; /*main axis and wrap*/
    justify-content: flex-end; /* along main axis*/
    align-items: center; /*along cross axis*/
    align-content: center; /*the lines inside*/
    gap: 10px; /*min space between items not border*/
    padding: 5px;
  `;

  // Need to write component code for LogoTitle using styled component by replacing `null` value
  const LogoTitle = styled.div`
    height: 100%;
    background-image: url("logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    bborder: solid purple 1px;
    bbackground-color: orange;
  `;

  // Need to write component code for StyledInput using styled component by replacing `null` value
  const StyledInput = styled.span`
    bborder: black solid;
    display: flex; /* or inLine—fLeX */
    flex-flow: row wrap; /*main axis and wrap*/
    justify-content: center; /* along main axis*/
    align-items: center; /*along cross axis*/
    align-content: center; /*the lines inside*/
    bbackground-color: yellow;
  `;

  return (
    <Container>
      <Wrapper>
        <SearchBar>
          <Icon className="fa fa-search" />
          <Icon className="fa fa-microphone" />
          <StyledInput className={"inputWithIcon"}>
            <Input
              type="text"
              placeholder="Search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            />
          </StyledInput>
        </SearchBar>
        <Menu>
          <LogoTitle></LogoTitle>
        </Menu>
        <QuickIcon>
          <Icon onClick={props.toggleTheme} className="fa fa-adjust" />
          <Icon className="fa fa-bell" />
          <Icon className="fa fa-th" />
          <Icon className="fa fa-user" />
        </QuickIcon>
      </Wrapper>
    </Container>
  );
}
