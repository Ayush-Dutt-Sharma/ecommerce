import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
background:teal;
height:30px;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14;
font-weight:500;`
const Announcements = () => {
    return (
        <Container>
            Super Awesome Deal!!!
        </Container>
    )
}

export default Announcements
