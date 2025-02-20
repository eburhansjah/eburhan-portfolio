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
                </StyledUl>

                <hr/>

                <StyledUl>
                    <StyledLi>
                        <StyledProjectTitle>
                            <h3>
                                Chip-Seq to Study TF Binding Sites, Boston MA
                            </h3>
                            <StyledSpanRight><h3>Sep - Dec 2022</h3></StyledSpanRight>
                        </StyledProjectTitle>
                    </StyledLi>

                    <StyledUl>
                        <StyledLi><strong>Tech Stack: </strong>Matlab</StyledLi>
                    </StyledUl>

                    <StyledUl>
                        <StyledLi><strong>Wet lab: </strong>cell culture, molecular cloning, ChIP-Seq</StyledLi>
                    </StyledUl>

                    <StyledLi><strong>About</strong></StyledLi>

                    <StyledLi>
                        Analyzed sequencing data of 2 novel transcription factors (TFs) experimentally and computationally
                        in a team of 6. We applied ChIP-Seq to globally map and characterize the binding sites for
                        <i> E. coli</i>: nac and iclR
                    </StyledLi>

                </StyledUl>
            </StyledNav>

        </OtherWrapper>
    );
}