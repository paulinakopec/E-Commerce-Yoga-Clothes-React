import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 90px);
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none"})}
`;

const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: calc(100vh - 90px);
    display: flex;
    align-items: center;
    position: relative;
`

const ImgContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 90px);
`

const Image = styled.img`
    width: 100vw;
    height: calc(100vh - 90px);
    object-fit: cover;
    opacity: 80%;
`

const InfoContainer = styled.div`
    position: absolute;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    color: ${props => props.color}
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    color: black;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid black;

    &:hover {
        background-color: black;
        color: white;
        transition: 1.5s ease-in-out;
    }
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    z-index: 2;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
            <ArrowBackIosOutlined style={{cursor: 'pointer'}}></ArrowBackIosOutlined>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (    
                <Slide key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer color={item.color}>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button><Link to="/productlist" className="link">SHOP NOW</Link></Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
            <ArrowForwardIosOutlined style={{cursor: 'pointer'}}></ArrowForwardIosOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider
