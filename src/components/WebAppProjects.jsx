import styled from "styled-components";
import {Link} from "react-router-dom";

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

export default function WebAppProjects() {
    return(
        <WebAppWrapper id="web-apps">
            <h2>Web Application Development Projects</h2>

            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                WeatherApp, Boston MA
                            </h3>
                            <StyledSpanRight><h3>July 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>
                </StyledUl>

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
                        react
                        native project that was built and developed with macOS and iOS simulator.
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

                <hr/>

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
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/eburhan-portfolio.git"
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
                                Recipe-Lists, Boston MA
                            </h3>
                            <StyledSpanRight><h3>July 2024</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Open project: </strong>
                            <StyledLink to="https://recipe-lists.vercel.app"
                                        target="_blank" rel="noopener noreferrer">recipe-lists</StyledLink>
                        </StyledLi>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/recipe-lists.git"
                                        target="_blank" rel="noopener noreferrer">recipe-lists-repo</StyledLink>
                        </StyledLi>

                        <StyledLi><strong>Tech Stack: </strong>React, Vite, JavaScript, CSS-in-JS, useSWR,
                            my-json-server, GitHub
                        </StyledLi>


                        <StyledLi><strong>About</strong></StyledLi>

                        <StyledLi>
                            Creating a web app on recipes, that was based on a self-made mock API.
                        </StyledLi>

                        <StyledLi>
                            <strong>Features</strong>
                            <ul>
                                <Li>Multiple pages for displaying different types of cuisines and list of
                                    recipes based on the selected cuisine</Li>
                            </ul>

                            <StyledLi>At the bottom of each recipe page, there are two buttons:</StyledLi>

                            <ul>
                                <ul>
                                    <Li>Back button to go back to the page with list of cuisines</Li>
                                    <Li>To the top of the page shortcut</Li>
                                </ul>
                            </ul>

                            <StyledLi>Each recipe comes with the following information:</StyledLi>

                            <ul>
                                <ul>
                                    <Li>Name of dish</Li>
                                    <Li>Type of dish</Li>
                                    <Li>Prep time</Li>
                                    <Li>Cook time</Li>
                                    <Li>Number of servings</Li>
                                    <Li>Calories per serving</Li>
                                    <Li>Ingredients</Li>
                                    <Li>Instructions</Li>
                                </ul>
                            </ul>

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
                            <StyledLink to="https://tvshow-api.vercel.app"
                                        target="_blank" rel="noopener noreferrer">tvshow-api</StyledLink>
                        </StyledLi>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/tvshow-api.git"
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
                                <ul>
                                    <Li>Dark red for ratings that are 5.0 and lower</Li>
                                    <Li>Orange for ratings that are 6.5 and lower, but above 5.0</Li>
                                    <Li>Yellow for ratings that are 7.5 and lower, but above 6.5</Li>
                                    <Li>Lime green for ratings that are 8.5 and lower, but above 7.5</Li>
                                    <Li>Light green for ratings that are 10.0 and lower, but above 8.5</Li>
                                </ul>
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
                            <StyledLink to="https://cs-people.bu.edu/eburhan/cs391/projects/mini-projects/mp1/home/ellen-burhansjah-resume.html"
                                        target="_blank" rel="noopener noreferrer">eburhan-portfolio</StyledLink>
                        </StyledLi>
                        <StyledLi><strong>Open project repo: </strong>
                            <StyledLink to="https://github.com/eburhansjah/eburhan-web-resume.git"
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

    );
}