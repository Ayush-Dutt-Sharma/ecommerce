import React from 'react'
import {Send} from "@material-ui/icons";
import styled from "styled-components";

const Container=styled.div`
background-color:#F7F7F7;
height:60vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`

const Title=styled.h1`
font-size:70px;
margin-bottom:20px;
`

const Desp=styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
`

const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
border:1px solid lightgray;

`

const Input=styled.input`
border:none;
flex:8;
padding-left:20px;
`

const Button=styled.button`
flex:1;
background-color:teal;
color:white;
border:none;
height:100%;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desp>Get Timely updates from your favorite products.</Desp>
            <InputContainer>
                <Input placeholder="Your Email." />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
