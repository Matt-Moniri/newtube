import React from "react";
import styled from "styled-components";
import Icon from "../component/Icon";
import Input from "../component/Input";

export default function Header(props) {
  // Need to write component code for Container using styled component by replacing `null` value

  const Container = styled.header`
    background-color: darkgoldenrod;
    height: 6rem;
  `;

  //    ({ children }) => (
  //     <div className="header-container">{children}</div>
  //   );
  // Need to write component code for Container, Wrapper, Menu, SearchBar, QuickIcon, LogoTitle, StyledInput, using styled component by replacing `null` value
  const Wrapper = styled.div``;

  // Need to write component code for Menu using styled component by replacing `null` value
  const Menu = styled.nav``;
  // Need to write component code for SearchBar using styled component by replacing `null` value
  const SearchBar = styled.div`
    border: solid red;
  `;

  // Need to write component code for QuickIcon using styled component by replacing `null` value
  const QuickIcon = null;

  // Need to write component code for LogoTitle using styled component by replacing `null` value
  const LogoTitle = styled.div`
    width: 150px;
    height: 50px;
    background-image: url("logo.png");
    background-size: contain;
    background-repeat: no-repeat;
  `;

  // Need to write component code for StyledInput using styled component by replacing `null` value
  const StyledInput = styled.div`
    border: black solid;
  `;

  return (
    <Container>
      <Wrapper>
        <Menu>
          <LogoTitle></LogoTitle>
        </Menu>
        <SearchBar>
          <StyledInput className={"inputWithIcon"}>
            <Input
              type="text"
              placeholder="Search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            />
          </StyledInput>
          <Icon className="fa fa-search" />
          <br></br>
          <Icon className="fa fa-microphone" />
          <Icon className="fa fa-like" />
          {/*
           */}
        </SearchBar>
        {/* 
        
        <QuickIcon>
          <Icon onClick={props.toggleTheme} className="fa fa-adjust" />
          <Icon className="fa fa-bell" />
          <Icon className="fa fa-th" />
          <Icon className="fa fa-user" />
        </QuickIcon> */}
      </Wrapper>
    </Container>
  );
}
