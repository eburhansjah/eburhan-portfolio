// This file is Header. The part that remains displayed and will be displayed when seen first
// Contains: navigation as well as the about me section (Navigation.jsx - dis5)
import{NavLink} from "react-router-dom";
import {styled, keyframes} from "styled-components";

const HomeWrapper = styled.div`
    background-color: #000000;
    text-align: center;
    max-height: 100vh;
    font-family: 'Monaco', monospace;
`;

const StyledHeader = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 0;

    // To have header in different colors:
    span:nth-child(1) {
        color: #fff15b;
    }
    span:nth-child(2) {
        color: pink;
    }
    span:nth-child(3) {
        color: indianred;
    }
    span:nth-child(4) {
        color: #80ff80;
    }
    span:nth-child(5) {
        color: #fff15b;
    }
    span:nth-child(6) {
        color: pink;
    }
    span:nth-child(7) {
        color: indianred;
    }
    span:nth-child(8) {
        color: black;
    }
    span:nth-child(9) {
        color: #fff15b;
    }
    span:nth-child(10) {
        color: pink;
    }
    span:nth-child(11) {
        color: indianred;
    }
    span:nth-child(12) {
        color: #80ff80;
    }
    span:nth-child(13) {
        color: #fff15b;
    }
    span:nth-child(14) {
        color: pink;
    }
    span:nth-child(15) {
        color: indianred;
    }
    span:nth-child(16) {
        color: #80ff80;
    }
    span:nth-child(17) {
        color: #fff15b;
    }
`;

// Styling unordered list
const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    margin: 0;
    
    h2{
        color: mediumaquamarine;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    padding: 1px;
    margin: 0 10px;
`;

const StyledLi = styled.li`
    margin: 0 20px;
`;

// Styling rotating image
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const RotatingImage = styled.img`
    display: block;
    margin: 0 auto; // Centers the image
    //padding-top: 30px;
    animation: ${rotate} 30s linear infinite;
`;

export default function Home(){

    return(
        <HomeWrapper>
            <br/>
            <RotatingImage src="/honey_circle_blackbg.png" alt="Rotating image of a cat" width="100" height="auto"/>

            <StyledHeader><span>E</span>
                        <span>L</span>
                        <span>L</span>
                        <span>E</span>
                        <span>N</span>
                        <span>&apos;</span>
                        <span>S</span>
                        <span>&nbsp;</span>
                        <span>P</span>
                        <span>O</span>
                        <span>R</span>
                        <span>T</span>
                        <span>F</span>
                        <span>O</span>
                        <span>L</span>
                        <span>I</span>
                        <span>O</span>
            </StyledHeader>

            <StyledNav>
                <StyledUl>
                    <StyledLi><NavLink to="/"><h2>Home</h2></NavLink></StyledLi>
                    <StyledLi><NavLink to="/components/Projects"><h2>Projects</h2></NavLink></StyledLi>
                    {/*<li><NavLink to="/components/Education">Education</NavLink></li>*/}
                </StyledUl>
            </StyledNav>
        </HomeWrapper>
    );
}