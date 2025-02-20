import styled from "styled-components";
import {Link} from "react-router-dom";

const MobileDevWrapper = styled.div`
    border: #fff15b 1px inset;
    padding: 20px;
    margin: 20px 15vw;

    h2{
        font-family: 'Monaco', monospace;
        color: #fff15b;
    }

    hr{
        background: #fff15b;
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

const P = styled.p`
    text-align: center;
    margin: 5px 0;
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

export default function MobileDevelopmentProjects() {
    return(
        <MobileDevWrapper id="mobile-development">
            <h2>Mobile Development Projects</h2>

            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Image Encoder, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Sep - Dec 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/ec504_ImageEncoder.git"
                                        target="_blank" rel="noopener noreferrer">image-encoder-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Open Android mobile app repo: </strong>
                            <StyledLink to="https://github.com/Phosphorus15/ec504_AndroidCV/"
                                        target="_blank" rel="noopener noreferrer">Android-mobile-app-repo</StyledLink>/
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>C, CMake, stb_image.h, AndroidStudio</StyledLi>

                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledImage src="/mpeg1_encoder_decoder.png" alt="mpeg-1 encoder decoder pipeline" />

                        <P>MPEG-1 encoding decoding pipeline</P>

                        <StyledLi>
                            This video encoder was designed as part of a final project for Advanced Data Structures
                            and Algorithms class (EC504) at Boston University in a team of 4.
                            The pipeline of MPEG-1 encoder and decoder can be observed on the figure above.

                            <br/><br/>
                            The core encoder was entirely made from scratch in C. We sourced the compression equations,
                            VLC codes, bitwise logic, matrix coefficients, coding structure parameters, and semantics all
                            from the official International Organization for Standardization (ISO) guidelines from 1993.

                            <br/><br/>
                            For a test set of 30 JPEG images, totalling 1,168 kB of data, the final compressed file
                            is 18.2 kB for a spectacular 64x overall compression, and performs the entire encoding
                            process in under 1 second total runtime.
                        </StyledLi>



                        <StyledLi>
                            <strong>Features</strong>
                            <ul>
                                <li>Encoder is fully MPEG-1 compliant. Video files are compatible with any mainstream
                                MPEG-1 video decoder</li>
                                <li>Encodes up to 100 JPEG images of the same dimensions in under 5 minutes,
                                with the final file size being at most the sum of the sizes of the individual images</li>
                                <li>Playback rate is at video speed of about 30 frames per second</li>
                                <li>Has a simple, reliable command line interface (CLI) for encoding and viewing</li>
                                <li>A fully functional Android mobile application that allows user to encode images easily</li>
                            </ul>
                        </StyledLi>
                    </StyledUl>
                </StyledUl>

                <hr/>

                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                WeatherApp, Boston MA
                            </h3>
                            <StyledSpanRight><h3>July 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project repo: </strong>
                                    <StyledLink to="https://github.com/eburhansjah/WeatherApp.git"
                                                target="_blank" rel="noopener noreferrer">weather-app-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>React Native, Xcode, JavaScript, useSWR,
                            axios, Open Weather Map API, GitHub
                        </StyledLi>

                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledLi>
                            Creating a mobile application that allows the user to select one of the cities in the US, and
                            displays its corresponding current weather information, as well as a 5-day forecast. It is a
                            react native project that was built and developed with macOS and iOS simulator.
                        </StyledLi>

                        <StyledLi>
                            <strong>Features</strong>

                            <ul>
                                <Li>Drop down menu to select other major cities in US</Li>
                                <Li>Display of the app dims at night time</Li>
                                <Li>Interactive switch that allows users to toggle unit of temperature between Celsius and
                                    Fahrenheit</Li>
                            </ul>

                            <StyledLi>Displaying current weather information:</StyledLi>

                            <ul>
                                <ul>
                                    <Li>Weather icon</Li>
                                    <Li>Weather condition and description</Li>
                                    <Li>Current temperature</Li>
                                    <Li>Minimum and maximum temperature</Li>
                                    <Li>Feels like temperature</Li>
                                </ul>
                            </ul>

                            <StyledLi>Displaying 5-day forecast weather information:</StyledLi>
                            <ul>The weather predicted for each day is according to the most prevalent condition on that day</ul>

                            <ul>
                                <ul>
                                    <Li>Weather icon</Li>
                                    <Li>Weather description</Li>
                                    <Li>Minimum and maximum temperature</Li>
                                </ul>
                            </ul>

                            <StyledLi>Dynamic animated backgrounds according to the current weather condition:</StyledLi>

                            <ul>
                                <ul>
                                    <Li>Clouds</Li>
                                    <Li>Rain</Li>
                                    <Li>Drizzle</Li>
                                    <Li>Thunderstorm</Li>
                                    <Li>Snow</Li>
                                    <Li>Clear</Li>
                                </ul>
                            </ul>

                        </StyledLi>

                    </StyledUl>
                </StyledUl>

                <hr/>

                <StyledUl>
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

        </MobileDevWrapper>

    );
}