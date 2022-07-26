import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BaliShorts from '../img/Bali_shorts.jpeg';
import SaharaLeggings from '../img/pp2.jpeg';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile ({padding: "10px"})};
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "2px solid black"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};

    &:hover {
        background-color: ${props=>props.type === "filled" ? "transparent" : "black"};
        color: ${props=>props.type === "filled" ? "black" : "white"};
        border: ${props=>props.type === "filled" ? "2px solid black" : "2px solid black"};
        transition: 1.5s ease-in-out;
    }
`

const TopTexts = styled.div`
    ${mobile ({display: "none"})};
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile ({flexDirection: "column"})};
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile ({flexDirection: "column"})};
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 250px;
    object-fit: cover;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({marginTop: "20px"})};
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})};
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})};
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"}
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    border: 2px solid black; 
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 2px solid black;
        transition: 1.5s ease-in-out;
    }
`

const Cart = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <Title>
                YOUR CART
            </Title>
            <Top>
                <TopButton><Link to="/" className="link">CONTINUE SHOPPING</Link></TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={BaliShorts}></Image>
                            <Details>
                                <ProductName><b>Product:</b> BALI TOP</ProductName>
                                <ProductId><b>ID:</b> 85897389492</ProductId>
                                <ProductColor color="lightseagreen"></ProductColor>
                                <ProductSize><b> Size:</b> S</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{cursor: "pointer"}}></Remove>
                                <ProductAmount>1</ProductAmount>
                                <Add style={{cursor: "pointer"}}></Add>
                            </ProductAmountContainer>
                            <ProductPrice>189 PLN</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr></Hr>
                    <Product>
                        <ProductDetail>
                            <Image src={SaharaLeggings}></Image>
                            <Details>
                                <ProductName><b>Product:</b> SAHARA LEGGINGS</ProductName>
                                <ProductId><b>ID:</b> 265594867840</ProductId>
                                <ProductColor color="rosybrown"></ProductColor>
                                <ProductSize><b> Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{cursor: "pointer"}}></Remove>
                                <ProductAmount>1</ProductAmount>
                                <Add style={{cursor: "pointer"}}></Add>
                            </ProductAmountContainer>
                            <ProductPrice>229 PLN</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>418 PLN</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping</SummaryItemText>
                        <SummaryItemPrice>20 PLN</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Additional Discount</SummaryItemText>
                        <SummaryItemPrice>0 PLN</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>438 PLN</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default Cart
