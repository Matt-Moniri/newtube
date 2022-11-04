import React from "react";
import styled from "styled-components";
import Icon from "../component/Icon";
import Input from "../component/Input";

function Header(props) {

    // Need to write component code for Container using styled component by replacing `null` value
    const Container =  ()=> <div></div>

    // Need to write component code for Container, Wrapper, Menu, SearchBar, QuickIcon, LogoTitle, StyledInput, using styled component by replacing `null` value
    const Wrapper = ()=> <div></div>

    // Need to write component code for Menu using styled component by replacing `null` value
    const Menu =()=> <div></div>

    // Need to write component code for SearchBar using styled component by replacing `null` value
    const SearchBar = ()=> <div></div>

    // Need to write component code for QuickIcon using styled component by replacing `null` value
    const QuickIcon = ()=> <div></div>

    // Need to write component code for LogoTitle using styled component by replacing `null` value
    const LogoTitle = ()=> <div></div>

    // Need to write component code for StyledInput using styled component by replacing `null` value
    const StyledInput = ()=> <div></div>

    return (
        <Container>
            <Wrapper>
                <Menu>
                    <LogoTitle>ViewTube</LogoTitle>
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
                    <Icon className="fa fa-microphone" />
                </SearchBar>
                <QuickIcon>
                    <Icon onClick={props.toggleTheme} className="fa fa-adjust" />
                    <Icon className="fa fa-bell" />
                    <Icon className="fa fa-th" />
                    <Icon className="fa fa-user" />
                </QuickIcon>
            </Wrapper>
        </Container>
    )
}
export default Header