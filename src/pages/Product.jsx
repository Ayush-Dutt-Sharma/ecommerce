import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"
import { Add, Remove } from '@material-ui/icons';



const Container=styled.div``;

const Wrapper=styled.div`
padding:50px;
display:flex;
`;

const ImgContainer=styled.div`
flex:1
`;

const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;

const Price=styled.span`
font-weight:100;
font-size:40px;

`;

const Title=styled.h1`
font-weight:200;
`;

const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;

`;

const Desp=styled.p`
margin: 20px 0px;

`
const FilterConatiner=styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
width:50%;
`

const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`

const FilterSizeOption=styled.option``

const Filter=styled.div`
display:flex;
align-items:center;
`

const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`


const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
margin:0px 5px;
cursor:pointer;
background-color:${(props)=>props.color};
`
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;

`

const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`

const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 0px 5px;
`

const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
`

const Product = () => {
    return (
        <Container>
            <Announcements/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        Denim Jumpsuit
                    </Title>
                    <Desp>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Desp>
                    <Price>₹ 999</Price>
                <FilterConatiner>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                    <FilterColor color="Black"/>
                    <FilterColor color="DarkBlue"/>
                    <FilterColor color="Gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>

                    </FilterSize>
                   
                    </Filter>
                </FilterConatiner>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
               
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
