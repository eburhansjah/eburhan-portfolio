import styled from "styled-components";

const ProjectsWrapper = styled.div`
    background-color: #202020;
    color: lightsteelblue;
    padding: 25px 40px;
    font-family: 'Arial', sans-serif;
`;

const MachineLearningWrapper = styled.div`
    border: pink 1px inset;
    padding: 20px;
    margin: 20px 15vw;

    h2 {
        font-family: 'Monaco', monospace;
        color: pink;
    }

    hr {
        background: pink;
        height: 1px;
        border: 0;
        margin: 20px 0;
    }
`;

const WebAppWrapper = styled.div`
    border: limegreen 1px inset;
    padding: 20px;
    margin: 20px 15vw;

    h2{
        font-family: 'Monaco', monospace;
        color: limegreen;
    }

    hr{
        background: limegreen;
        height: 1px;
        border: 0;
        margin: 20px 0;
    }
`;

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
    margin: 10px 0;
    position: relative;
    padding-left: 20px;
`;

const StyledSpanRight = styled.span`
    text-align: right;
`;

const StyledLink = styled.a`
    color: mediumaquamarine;
    font-weight: bold;
    margin: 10px 0;
`;

const Li = styled.li`
    margin: 10px 0;
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
            <MachineLearningWrapper id="machine-learning">
                <h2>Machine Learning / Deep Learning Projects</h2>

                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    Reconstructing 3D Volume with Low Signal-To-Background Ratio (SBR), Boston MA
                                </h3>
                                <StyledSpanRight><h3>June 2024 - Present</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi><strong>Open project repo: </strong><StyledLink href="https://github.com/eburhansjah/SBR_Net.git"
                                                                                      target="_blank" rel="noopener noreferrer">SBR-Net-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>Python, Pytorch, YAML, Bash, wandb, GitHub, BU SCC
                            </StyledLi>


                            <StyledLi><strong>About</strong></StyledLi>

                            <StyledLi>
                                Implementing conformational prediction on the SBR-Net architecture with the goal of
                                quantifying model&apos;s uncertainty for a more explainable and interpretable model.
                                The base model is based on this <StyledLink href="https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-4-6241"
                                                                            target="_blank" rel="noopener noreferrer">paper.</StyledLink>
                            </StyledLi>
                        </StyledUl>

                        <hr/>

                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    Predicting Lung Histology Inflammation Scores, Boston MA
                                </h3>
                                <StyledSpanRight><h3>Jan - May 2024</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi>
                                <strong>Open project repo: </strong><StyledLink
                                href="https://github.com/wtzheng99/EC500_Project7.git"
                                target="_blank" rel="noopener noreferrer">Lung-Histology-Scoring-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>Python, PyTorch, Jupyter Notebook, Sklearn, Scipy,
                                Matplotlib, OpenSlide, GitHub, BU SCC
                            </StyledLi>

                            <StyledLi><strong>About</strong></StyledLi>
                            <ul>
                                <Li>Developed a semi-supervised deep learning model to
                                    predict inflammation level in a team of 2</Li>
                                <Li>Implemented nuclei segmentation (HoVer-Net) and
                                    feature extraction (ResNet50 & PLIP) techniques</Li>
                                <Li>Explored various methods for classification:
                                    Deep Sets, Set Transformer, and other 6 classifiers</Li>
                            </ul>
                        </StyledUl>

                        <hr/>

                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    A Multilingual Speech Emotion Recognition (SER) Model, Boston MA
                                </h3>
                                <StyledSpanRight><h3>Jan - May 2024</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi>
                                <strong>Open project repo: </strong><StyledLink
                                href="https://github.com/yunyunh123/EC523-SER.git"
                                target="_blank" rel="noopener noreferrer">SER-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>Python, PyTorch, Jupyter Notebook, Sklearn,
                                Librosa, Matplotlib, GitHub, BU SCC
                            </StyledLi>

                            <StyledLi><strong>About</strong></StyledLi>

                            <ul>
                                <Li>Developed SER models to classify 4 emotions in
                                    multilingual audio samples in a team of 4</Li>
                                <Li>Implemented and analyzed three deep learning models:
                                    Wav2Vec, 2D-CNN/LSTM with attention, and S4</Li>
                                <Li>Utilized extensive pre-processing techniques to
                                    standardize audio samples and augment Mel spectrograms</Li>
                            </ul>
                        </StyledUl>

                        <hr/>

                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    Time-Series Forecasting on Global Economic Data, Boston MA
                                </h3>
                                <StyledSpanRight><h3>Sep - Dec 2023</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi>
                                <strong>Open project: </strong><StyledLink
                                href="https://github.com/MohamedAbdelnaby7/Stock-Prices-predication-.git"
                                target="_blank" rel="noopener noreferrer">Time-Series-Forecasting-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>Python, SciKit, statsmodels, Numpy, Matplotlib, GitHub
                            </StyledLi>

                            <StyledLi><strong>About</strong></StyledLi>

                            <ul>
                                <Li>Analyzed the efficacy of ARIMA, and RLS algorithms
                                    for short and long term forecasting in a team of 3</Li>
                                <Li>Conducted statistical analysis to evaluate model
                                    performance and interpret results accurately</Li>
                                <Li>Produced a comprehensive final report and presented findings,
                                    providing insights and fostering discussion</Li>
                            </ul>
                        </StyledUl>

                    </StyledUl>
                </StyledNav>

            </MachineLearningWrapper>

            <WebAppWrapper id="web-apps">
                <h2>Web Application Development Projects</h2>

                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    Project Portfolio, Boston MA
                                </h3>
                                <StyledSpanRight><h3>July 2024</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi><strong>Open project: </strong>
                                <StyledLink href="https://github.com/eburhansjah/eburhan-portfolio.git"
                                            target="_blank" rel="noopener noreferrer">eburhan-portfolio-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>React, Vite, CSS-in-JS, React Router, GitHub
                            </StyledLi>


                            <StyledLi><strong>About</strong></StyledLi>

                            <StyledLi>
                                Creating a react based web page on my personal portfolio. This project is built with
                                React and powered by Vite.
                            </StyledLi>
                        </StyledUl>

                        <hr/>

                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    TV Show API, Boston MA
                                </h3>
                                <StyledSpanRight><h3>July 2024</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi><strong>Open project: </strong>
                                <StyledLink href="https://cs-people.bu.edu/eburhan/cs391/projects/mini-projects/mp2/dist/"
                                            target="_blank" rel="noopener noreferrer">tvshow-api</StyledLink>
                            </StyledLi>
                            <StyledLi><strong>Open project repo: </strong>
                                <StyledLink href="https://github.com/eburhansjah/tvshow-api.git"
                                            target="_blank" rel="noopener noreferrer">tvshow-api-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>React, Vite, JavaScript, CSS-in-JS, useSWR,
                                open-source API from TV-Maze, GitHub
                            </StyledLi>


                            <StyledLi><strong>About</strong></StyledLi>

                            <StyledLi>
                                Creating a web API that fetches and shows details about TV shows from the US and Canada.
                            </StyledLi>
                            <StyledLi>
                                <strong>Features</strong>
                                <ul>
                                    <Li>Font color by default is ivory.
                                        When the status of the TV show is running, font of &apos;running&apos;
                                        will be displayed in cyan</Li>
                                </ul>

                                <StyledLi>Meanwhile, the ratings of the shows are also color coded:</StyledLi>

                                <ul>
                                    <Li>Dark red for ratings that are 5.0 and lower</Li>
                                    <Li>Orange for ratings that are 6.5 and lower, but above 5.0</Li>
                                    <Li>Yellow for ratings that are 7.5 and lower, but above 6.5</Li>
                                    <Li>Lime green for ratings that are 8.5 and lower, but above 7.5</Li>
                                    <Li>Light green for ratings that are 10.0 and lower, but above 8.5</Li>
                                </ul>

                            </StyledLi>
                        </StyledUl>

                        <hr/>

                        <StyledLi>
                            <StyledProjectTitle>
                                <h3>
                                    Web Resume, Boston MA
                                </h3>
                                <StyledSpanRight><h3>July 2024</h3></StyledSpanRight>
                            </StyledProjectTitle>
                        </StyledLi>

                        <StyledUl>
                            <StyledLi><strong>Open project: </strong>
                                <StyledLink href="https://cs-people.bu.edu/eburhan/cs391/projects/mini-projects/mp1/home/ellen-burhansjah-resume.html"
                                            target="_blank" rel="noopener noreferrer">eburhan-portfolio</StyledLink>
                            </StyledLi>
                            <StyledLi><strong>Open project repo: </strong>
                                <StyledLink href="https://github.com/eburhansjah/eburhan-web-resume.git"
                                            target="_blank" rel="noopener noreferrer">eburhan-portfolio-repo</StyledLink>
                            </StyledLi>

                            <StyledLi><strong>Tech Stack: </strong>HTML, CSS, JavaScript, GitHub
                            </StyledLi>


                            <StyledLi><strong>About</strong></StyledLi>

                            <StyledLi>
                                Creating a responsive web page based on my most recent personal professional resume.
                            </StyledLi>
                            <StyledLi>
                                <strong>Features</strong>
                                <ul>
                                    <Li>Article based page for hobbies and interests</Li>
                                    <Li>A simple interactive calculator</Li>
                                </ul>
                            </StyledLi>
                        </StyledUl>

                    </StyledUl>
                </StyledNav>

            </WebAppWrapper>

            <OtherWrapper id="other-projects">
                <h2>Other Projects</h2>

                <StyledNav>
                    <StyledUl>
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
                                <StyledLink href="https://github.com/eburhansjah/VerilogCalculator.git"
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
                                <StyledLink href="https://github.com/eburhansjah/MyRecipes.git"
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
                                <StyledLink href="https://github.com/eburhansjah/IFP.git"
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

            <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</BackToTopButton>
        </ProjectsWrapper>
    );
}