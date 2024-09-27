import styled from "styled-components";
import {Link} from "react-router-dom";
import MachineLearningProjects from "./MachineLearningProjects.jsx";
import WebAppProjects from "./WebAppProjects.jsx";
import OtherProjects from "./OtherProjects.jsx";

const ProjectsWrapper = styled.div`
    background-color: #202020;
    color: lightsteelblue;
    padding: 25px 40px;
    font-family: 'Arial', sans-serif;
`;

const BackToTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #555;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
`;

const Menu = styled.nav`
    background-color: #202020; //#333;
    padding: 20px;
    margin: 20px 15vw;
    text-decoration: none;
    font-weight: bold;
    
    align-items: center;
    

    &:hover {
        text-decoration: underline;
    }
`;

const MachineLearningLink = styled.a`
    color: pink;
    margin: 20px;
    padding: 20px;
    //text-decoration: none;
    font-weight: bold;
    display: inline;

    &:hover {
        text-decoration: underline;
    }
`;

const WebAppLink = styled.a`
    color: limegreen;
    margin: 20px;
    //text-decoration: none;
    font-weight: bold;
    padding: 20px;
    display: inline;

    &:hover {
        text-decoration: underline;
    }
`;

const OtherLink = styled.a`
    color: indianred;
    margin: 20px;
    //text-decoration: none;
    font-weight: bold;
    padding: 20px;
    display: inline;

    &:hover {
        text-decoration: underline;
    }
`;


export default function Projects(){
    return(
        <ProjectsWrapper>
            <Menu>
                <MachineLearningLink href="#machine-learning">Machine Learning / Deep Learning</MachineLearningLink>
                <WebAppLink href="#web-apps">Web App Dev</WebAppLink>
                <OtherLink href="#other-projects">Other Projects</OtherLink>
            </Menu>

            <MachineLearningProjects />
            <WebAppProjects/>
            <OtherProjects/>

            <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</BackToTopButton>
        </ProjectsWrapper>
    );
}