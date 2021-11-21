import React from 'react'
import styled from "styled-components";

const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)) ,url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60");
display:flex;
align-items:center;
justify-content:center;
background-size:cover;
`

const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;

`

const Title=styled.h1`
font-size:24px;
font-weight:300;
`

const Form=styled.form`
display:flex;
flex-direction:column;
`

const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`

const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`
const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
&:hover{
    color:teal;
}
`

const Login = () => {
    return (
        <Container>
           <Wrapper>
                <Title>
            SIGN IN
                </Title>
                <Form>
                  
                    <Input placeholder="Username"></Input>
                   
                    <Input placeholder="Password"></Input>
                    
                    
                    <Button>LOGIN</Button>
                    <Link>Forgot Password?</Link>
                    <Link>Create New Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
