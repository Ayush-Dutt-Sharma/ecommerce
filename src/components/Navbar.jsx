
import { Badge } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import{Search,ShoppingBasketOutlined} from "@material-ui/icons"
import{mobile} from "../responsive"
const Container=styled.div`
height:60px;
${mobile({height:"50px"})}
`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items:Center;
${mobile({padding:"10px 0px"})};
`
const Left=styled.div`
flex:1;
display: flex;
align-items:Center;`

const Language=styled.span`
font-size:14;
cursor:pointer;
${mobile({display:"none"})};
`
const SearchContainer=styled.div`
border:0.5px solid lightgray;
margin-left:25px;
padding:5px;
display: flex;
align-items:Center;`

const Input=styled.input`
border: none;
${mobile({width:"50px"})};
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;

`

const MenuItem=styled.div`
font-szie:14;
cursor:pointer;
margin-left:25px;
`

const Center=styled.div`
flex:1;
text-align:center;
`

const Logo=styled.h1`
font-weight:bold;

`



const Navbar = () => {
    return (
        <Container>
        <Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer><Input palceolder="Search"/><Search style= {{color:"gray",fontsize:16 }}/></SearchContainer>
        </Left>
        <Center><Logo>MyShop</Logo></Center>
            <Right><MenuItem>Register</MenuItem>
            <MenuItem>Sign IN</MenuItem>
            <MenuItem><Badge badgeContent={4} color="primary">
  <ShoppingBasketOutlined/>
</Badge></MenuItem></Right>
            
            </Wrapper>
        </Container>
    )
}

export default Navbar;
