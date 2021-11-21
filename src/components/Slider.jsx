import React, {useState} from 'react'
import styled from "styled-components"
import {ArrowLeftOutlined,ArrowRightOutlined} from "@material-ui/icons";

import {sliderItems} from "../data.js"
const Container=styled.div`
height:100vh;
width:100%
display: flex;
overflow:hidden;
position:relative;
`
const Arrow=styled.div`
height:50px;
width:50px
background-color: #EADEDE;
border-radius: 50%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction==="left"&&"30px"};
right:${props=>props.direction==="right"&&"30px"};
cursor:pointer;
margin: auto;
opacity:0.75;
z-index:2;
`

const Wrapper=styled.div`
height:100%;
width:100vw;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex*(-100)}vw);
`
const ImgContainer=styled.div`
flex:1;
height:100%;
width:100vw;
`

const InfoContainer=styled.div` flex:1;
padding:50px;
`
const Title=styled.h1`
font-size:70px;`

const Desc=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;`

const Button=styled.button`
font-size:20px;
padding:10px;
background-color:transparent;
cursor:pointer;`


const Image=styled.img`
height:80%;
${'' /* width:60%; */}
padding-top:40px;
padding-left:50px;
`

const Slide=styled.div` 
display:flex;
align-items:center;
width:100%;
height:100vh;
background-color:#${props=>props.bg};

`


const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }
        else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(<Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                <Image src={item.img}/>
               </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>))}
            
          
            </Wrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}>  <ArrowRightOutlined />
            </Arrow>
            
        </Container>
    )
}



export default Slider
