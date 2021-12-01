import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({ title, p, leftbuttonText, rightbuttonText, bgImage }) => {
    return (
        <Wrap bgImage={bgImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{p}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftbuttonText}
                        </LeftButton>
                        {rightbuttonText && 
                        <RightButton>
                            {rightbuttonText}
                        </RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/downarrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`

const Buttons = styled.div`
    text-align: center
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animationDown infinite 1.5s;
`