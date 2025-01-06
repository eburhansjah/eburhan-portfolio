import styled from "styled-components";
import {Link} from "react-router-dom";

const AboutWrapper = styled.div`
    background-color: #202020;
    color: lightsteelblue;
    padding: 25px 40px;
    font-family: 'Arial', sans-serif;
`;

const BioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px 0;
    color: mediumpurple;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    //padding: 10px;
    margin: 10px auto;
`;

const StyledHeader = styled.h2`
    color: pink;
    text-align: center;
    margin: 10px 20px;
    font-family: 'Monaco', monospace;
`;

const StyledImage = styled.img`
    display: block;
    margin: 0 20px;
    width: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 8px pink;
`;

const StyledContent = styled.p`
    max-width: 600px;
`;

// Styling unordered list
const StyledNav = styled.nav`
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 1px;
    margin: 0 10px;
`;

const StyledLi = styled.li`
    margin: 10px 0;
`;

const StyledLink = styled(Link)`
    color: violet;
    font-weight: bold;
    margin: 10px 0;
`;

export default function About(){

    return(
        <AboutWrapper>
            <StyledHeader>About Me</StyledHeader>

            <BioWrapper>
                <StyledImage src="/profile.jpg" alt="Ellen Burhansjah"/>

                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <StyledLink to="https://www.linkedin.com/in/eburhansjah" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to="https://github.com/eburhansjah" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </StyledLink>
                        </StyledLi>

                        <StyledLi><p><strong>Company:</strong> Boston University</p></StyledLi>
                        <StyledLi><p><strong>Location:</strong> Boston, MA</p></StyledLi>
                        <StyledLi><p><strong>Email:</strong> eburhan@bu.edu</p></StyledLi>
                        <StyledLi><p><strong>Phone:</strong> +1 (617) 817-9971</p></StyledLi>
                        {/*<li><NavLink to="/components/Education">Education</NavLink></li>*/}
                    </StyledUl>
                </StyledNav>
            </BioWrapper>

            <ContentWrapper>
                <StyledContent>
                    <h1>Hi! I&apos;m Ellen Burhansjah</h1>

                    <p>
                        I am a full-time Master&apos;s student at Boston University College of Engineering,
                        specializing in Data Analytics within the Electrical and Computer Engineering department.
                        <br/><br/><br/>
                        I have a strong passion for Machine Learning and Software Engineering.
                        I bring expertise in Python, C++/C, SQL, JavaScript, and Matlab along with experience in frameworks
                        and tools like PyTorch, React, React Native, Kubernetes, and Docker. With strong
                        problem-solving skills and a growth mindset, I strive to create impactful solutions that align
                        with my passion for technology and innovation.
                        <br/><br/><br/>
                        I completed my undergraduate studies in Biochemistry, and
                        my journey into Data Analytics was driven by my undergraduate research experience, where
                        I worked in both experimental and computational research and discovered
                        my passion for computational research.
                        <br/><br/><br/>
                        Welcome to my page! Explore my projects, and please contact me for career opportunities,
                        collaborations or just a chat!
                    </p>
                </StyledContent>
            </ContentWrapper>
        </AboutWrapper>
    );
}