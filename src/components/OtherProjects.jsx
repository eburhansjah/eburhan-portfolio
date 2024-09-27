import styled from "styled-components";
import {Link} from "react-router-dom";

const OtherWrapper = styled.div`
    border: indianred 1px inset;
    padding: 20px;
    margin: 20px 15vw;

    h2{
        font-family: 'Monaco', monospace;
        color: indianred;
    }

    hr{
        background: indianred;
        height: 1px;
        border: 0;
        margin: 20px 0;
    }
`;

const StyledProjectTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledNav = styled.nav`
    width: 100%;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 1px;
    margin: 0 10px;
`;

const StyledLi = styled.li`
    margin: 15px 0;
    position: relative;
    padding-left: 20px;
`;

const StyledSpanRight = styled.span`
    text-align: right;
`;

const StyledLink = styled(Link)`
    color: mediumaquamarine;
    font-weight: bold;
    margin: 10px 0;
`;

const Li = styled.li`
    margin: 10px 0;
`;

export default function OtherProjects() {
    return(
        <OtherWrapper id="other-projects">
            <h2>Other Projects</h2>

            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Autopilot Dashboard, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Sep 2024 - Present</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/EC528-Fall-2024/autopilot-dashboard.git"
                                        target="_blank" rel="noopener noreferrer">autopilot-dashboard-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>Python, Go, React, Kubernetes,
                            OpenShift, Grafana, Prometheus</StyledLi>

                        <StyledLi><strong>About</strong></StyledLi>
                        <StyledLi>
                            Developing a fully functional UI dashboard for Autopilot which is a Kubernetes-native daemon
                            that continuously monitors and evaluates GPUs, network and storage health, designed to detect
                            and report infrastructure-level issues during lifetime of AI workloads. It is an open-resource
                            project developed by IBM Research.<br/>
                            <br/>
                            Working in a team of 6, we are guided by mentors from IBM.
                        </StyledLi>

                        <StyledLi>
                            <strong>Features</strong>
                            <ul>
                                <Li>Agile driven development methodology</Li>
                            </ul>

                            <StyledLi><strong><u>Login Page</u></strong></StyledLi>
                            <ul>
                                <Li>Setting up front-end components</Li>
                                <Li>Connecting to Kubernetes cluster authentification</Li>
                            </ul>

                            <StyledLi><strong><u>Monitoring Page</u></strong></StyledLi>
                            <ul>
                                <Li>Displaying real-time node status and health check information</Li>
                                <Li>Expandable boxes for displaying detailed information for each node</Li>
                                <Li>Search box for quick search on nodes based on their IDs </Li>
                            </ul>

                            <StyledLi><strong><u>Testing Page</u></strong></StyledLi>
                            <ul>
                                <Li>Drop down feature to select types of health checks</Li>
                                <Li>Selection of group of nodes to run the tests on</Li>
                                <Li>Calling Autopilot’s RESTful API for test runs</Li>
                                <Li>Displaying test results to user</Li>
                            </ul>
                        </StyledLi>
                    </StyledUl>

                    <hr/>

                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Verilog Calculator, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Jan - May 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/VerilogCalculator.git"
                                        target="_blank" rel="noopener noreferrer">Verilog-Calculator-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>Verilog, Xilinx Vivado (CAD tool),
                            FPGA (Digilent Nexys A7-100T: FPGA Trainer Board)
                        </StyledLi>


                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledLi>
                            A basic ALU calculator that is similar to that found in a computer processor.
                            Not only does this calculator supports boolean operations, but it also does
                            arithmetic operations with a led indicator for the presence of an overflow.
                        </StyledLi>

                        <StyledLi>
                            <strong>Features</strong>
                            <StyledLi>Inputs:</StyledLi>
                            <ul>
                                <Li>4 switches each for A value, B value and operator code (4-bits)</Li>
                                <Li>A RESET button</Li>
                            </ul>

                            <StyledLi>Outputs:</StyledLi>
                            <ul>
                                <Li>1 led to show overflow</Li>
                                <Li>7 segment display:</Li>
                                <ul>
                                    <Li>LHS displays the opcode in hex (4-bits)</Li>
                                    <Li>RHS displays result of boolean/arithmetic operation in decimal
                                        (unsigned 4-bits)</Li>
                                </ul>
                            </ul>
                        </StyledLi>
                    </StyledUl>

                    <hr/>

                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                MyRecipes, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Jun - Aug 2023</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/MyRecipes.git"
                                        target="_blank" rel="noopener noreferrer">MyRecipes-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>PostgreSQL, Lucidchart</StyledLi>

                        <StyledLi><strong>About</strong></StyledLi>
                        <StyledLi>
                            A database for an app that saves and manages recipes across different platforms for
                            the user’s personal usage. The app would be an all-in-one app for the user to manage
                            recipes, and create meal plans. Aside from this, users would be able to look up the
                            nutritional content of each recipe. There are two plans. Basic plans are free of charge,
                            but are not free of advertisements. Premium plans would be free of advertisements.<br/>
                            <br/>
                            The reason for doing so is because I have been handwriting online recipes,
                            manually organizing, and creating meal plans on my tablet.
                            That is why I would like to learn how I could develop a database that simplifies this
                            process and potentially assist users to plan their meals. Such a database would also be
                            useful for users to plan their next grocery visit, ensuring that they have gotten a
                            proper amount of ingredients to minimize food waste.
                        </StyledLi>

                        <StyledLi>
                            <strong>Feature</strong>
                            <ul>
                                <Li>A history table that would enable users to edit the information they have
                                    entered previously. Examples would be when users wish to have a different
                                    recipe name, change serving size of the recipe, cook time, and many more</Li>
                            </ul>
                        </StyledLi>
                    </StyledUl>

                    <hr/>

                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Image Editing App, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Jan - May 2023</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/IFP.git"
                                        target="_blank" rel="noopener noreferrer">Image-Editing-App-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>Java, AndroidStudio, Gitlab</StyledLi>

                        <StyledLi>
                            <strong>About</strong>
                        </StyledLi>
                        <StyledLi>
                            A user-friendly android app that modifies uploaded images.
                            Images can be in the form of .png files or .text files.
                            The app displays the image/modified image on the screen.
                        </StyledLi>
                        <StyledLi>
                            <strong>Features</strong>
                            <StyledLi>Design decisions:</StyledLi>
                            <ul>
                                <Li>Scrolling layout for a better user experience</Li>
                                <Li>Separated the upload image and upload text features into two different buttons</Li>
                                <Li>Displayed text based buttons for user-specified inputs</Li>
                                <Li>Implemented toast for error checking</Li>
                            </ul>

                            <StyledLi>Image modification features:</StyledLi>
                            <ul>
                                <Li>Uploading stored image and image based on a text file</Li>
                                <Li>Zero GB:</Li>
                                <ul>
                                    <Li>Recolors the uploaded image by zero-ing out all green and blue components
                                        of pixels. As a result, the modified image will have different shades of
                                        red, ranging from black to full red</Li>
                                </ul>
                                <Li>Resizing</Li>
                                <Li>Rotating</Li>
                                <Li>Blurring</Li>
                                <Li>Grayscaling</Li>
                                <Li>Recoloring:</Li>
                                <ul>
                                    <Li>Recolors the uploaded image based on user input</Li>
                                </ul>
                                <Li>Generating histogram on RGB content of the uploaded image</Li>
                            </ul>
                        </StyledLi>

                    </StyledUl>

                </StyledUl>
            </StyledNav>

        </OtherWrapper>
    );
}