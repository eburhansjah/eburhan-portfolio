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
    
    h2{
        font-family: 'Monaco', monospace;
        color: pink;
    }
    
    hr{
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
    margin: 20px;
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
    color: violet;
    font-weight: bold;
    margin: 10px 0;
`;

const Li = styled.li`
    margin: 10px 0;
`;

export default function Projects(){
    return(
        <ProjectsWrapper>
            <MachineLearningWrapper>
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
                                <StyledLi><strong>Open project: </strong><StyledLink href="https://github.com/eburhansjah/SBR_Net.git"
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
                                    <strong>Open project: </strong><StyledLink
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
                                <strong>Open project: </strong><StyledLink
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

            <WebAppWrapper>
                <h1>Web Application Development Projects</h1>

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
                            <StyledLi><strong>Open project: </strong><StyledLink href="https://github.com/eburhansjah/SBR_Net.git"
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

                    </StyledUl>
                </StyledNav>

            </WebAppWrapper>

            <OtherWrapper>
                <h1>Other Projects</h1>

            </OtherWrapper>

        </ProjectsWrapper>
    );
}