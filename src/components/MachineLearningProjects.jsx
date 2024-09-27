import styled from "styled-components";
import {Link} from "react-router-dom";

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

export default function MachineLearningProjects() {
    return(
        <MachineLearningWrapper id="machine-learning">
            <h2>Machine Learning / Deep Learning Projects</h2>

            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Reconstructing 3D Volume with Low Signal-To-Background Ratio (SBR), Boston MA
                            </h3>
                            <StyledSpanRight><h3>Jun 2024 - Aug 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong><StyledLink to="https://github.com/eburhansjah/SBR_Net.git"
                                                                                  target="_blank" rel="noopener noreferrer">SBR-Net-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>Python, Pytorch, YAML, Bash, wandb, GitHub, BU SCC
                        </StyledLi>


                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledLi>
                            This project was focused on implementing conformal prediction using the SBR-Net architecture,
                            with the goal of quantifying uncertainty for better model explainability and interpretability.
                            Though the final results were not as conclusive as hoped, it provided valuable experience, particularly
                            using tools like <strong>wandb</strong> for experiment tracking and model performance visualization.

                            The SBR-Net model is based on this <StyledLink to="https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-4-6241"
                                                                           target="_blank" rel="noopener noreferrer">paper.</StyledLink>

                            <br /> <br />
                            I later applied the insights gained to my current graduate research project in
                            <StyledLink
                            to="https://sites.bu.edu/tianlab/"
                            target="_blank" rel="noopener noreferrer"> Computational Imaging Systems Lab
                            </StyledLink>
                            , where I am now continuing to address similar challenges
                            in a denoising model called DeepVID v2 (September 2024 - Present).
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
                            to="https://github.com/wtzheng99/EC500_Project7.git"
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
                            to="https://github.com/yunyunh123/EC523-SER.git"
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
                            to="https://github.com/MohamedAbdelnaby7/Stock-Prices-predication-.git"
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
    );
}