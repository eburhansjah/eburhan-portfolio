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

const StyledImage = styled.img`
    display: block;
    margin: 10px 10px 10px 60px;
    width: 50vw;
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

const P = styled.p`
    text-align: center;
    margin: 5px 0;
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
                                Uncertainty Quantification, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Sep 2024 - Present</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Tech Stack: </strong>Python, Pytorch, Bash, JupyterLab, BU SCC</StyledLi>

                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledImage src="/UQ-DeepVID-framework.png" alt="UQ-DeepVID-framework" />

                        <P>Block diagram of DeepVIDv2 + UQ framework</P>

                        <StyledLi>
                            This project is about the implementation of distribution-free uncertainty quantification (UQ)
                            in a self-supervised denoising algorithm (DeepVIDv2) that infers fluorescence from shot-noise-limited
                            signals. The main objective is to have an additional validation method to ascertain the reliability of
                            a self-supervised model that has no access to ground truth.
                            <br/><br/>
                            Using conformal prediction frameworks, this project estimates uncertainty at the pixel level,
                            providing confidence intervals for the model's point predictions across both the temporal and spatial
                            dimensions. Quantile regression is used to define the prediction intervals. Mathematical details
                            are illustrated below with a chosen user-defined risk level of 0.1
                        </StyledLi>

                        <StyledImage src="/quantile-regression.png" alt="Quantile Regression" />

                        <P>Visualization of lower and upper quantiles for uncertainty interval of 90%</P>

                        <StyledLi><strong>References</strong></StyledLi>
                        <ul>
                            <li>
                                Angelopoulos, A. N., Kohli, A. P., Bates, S., Jordan, M. I., Malik, J., Alshaabi, T., … Romano, Y. (2022).
                                Image-to-Image Regression with Distribution-Free Uncertainty Quantification and Applications in
                                Imaging. arXiv [Cs.LG]. Retrieved from http://arxiv.org/abs/2202.05265
                            </li>
                            <li>
                                Platisa, J., Ye, X., Ahrens, A. M., Liu, C., Chen, I. A., Davison, I. G., ... & Chen, J. L. (2023). High-speed
                                low-light in vivo two-photon voltage imaging of large neuronal populations. Nature Methods, 1-9
                            </li>
                            <li>
                                Liu, C., Lu, J., Wu, Y., Ye, X., Ahrens, A. M., Platisa, J., … Tian, L. (2024). DeepVID v2: self-supervised
                                denoising with decoupled spatiotemporal enhancement for low-photon voltage imaging. Neurophotonics,
                                11(4), 045007
                            </li>
                        </ul>
                    </StyledUl>
                </StyledUl>

                <hr/>

                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Reconstructing 3D Volume, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Jun 2024 - Aug 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong><StyledLink to="https://github.com/eburhansjah/SBR_Net.git"
                                                                                  target="_blank" rel="noopener noreferrer">SBR-Net-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>Python, Pytorch, Parquet, YAML, Bash, wandb, GitHub, BU SCC
                        </StyledLi>

                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledLi>
                            This project was focused on implementing conformal prediction using the SBR-Net architecture,
                            with the goal of quantifying uncertainty for better model explainability and interpretability.
                            <br/><br/>
                            SBR-Net is a model that does descattering and reconstructing of 3D volume from single-shot
                            light-field measurement with low signal-to-background ratio (SBR).
                            <br/>
                            Although the final results were not as conclusive as hoped, it provided valuable experience, particularly
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
                </StyledUl>

                <hr/>

                <StyledUl>
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
                </StyledUl>

                <hr/>

                <StyledUl>
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
                </StyledUl>

                <hr/>

                <StyledUl>
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