import React from 'react'
import {categories} from "../data"
import styled from "styled-components";
import CategoryItem from "./CategoryItem"
const Container=styled.div`
padding:20px;
display:flex;
justify-content:space-between;

`

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
