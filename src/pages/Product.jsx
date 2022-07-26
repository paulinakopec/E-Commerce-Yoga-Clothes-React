import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import pp1 from '../img/pp1.jpeg';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useState } from 'react';

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile ({flexDirection: "column", padding: "10px"})};
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile ({height: "40vh"})};
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px  50px; 
    ${mobile ({padding: "10px"})};
`

const Title = styled.h1`
    font-weight: 200;
`

const Description = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile ({width:"100%"})}
    `

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;    
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile ({width:"100%"})}    
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid black;
    background-color: transparent;
    color: black;
    cursor: pointer;
    font-weight: 500;
    
    &:hover{
        background-color: black;
        color: white;
        transition: 1.5s ease-in-out;
    }
    `

const Product = () => {
  const [value, setValue] = useState(1);

  const decreaseAmount = () => {
    if (value <= 1) {
        setValue(1);
    } else {
        setValue(value-1);
    }
  }

  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <ImgContainer>
                <Image src={pp1}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Basic Top
                </Title>
                <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Incidunt voluptatem blanditiis eveniet quam. 
                    Porro quasi ullam aspernatur nesciunt, 
                    praesentium error eligendi nobis at voluptate maiores reiciendis quia labore sapiente cum.
                </Description>
                <Price>
                    89 PLN
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="lightsteelblue"></FilterColor>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="pink"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize style={{cursor: "pointer"}}>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor: "pointer"}} onClick={decreaseAmount}></Remove>
                        <Amount>{value}</Amount>
                        <Add style={{cursor: "pointer"}} onClick={()=>setValue(value+1)}></Add>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default Product
