import React from 'react'
import styled from 'styled-components'

const StyledDiv = style.div` width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;`

const Person = (props) => {
    const { name, age, children, click, changed } = props
    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }
    return (
        <StyledDiv>
            <p onClick={click}>I'm a {name} and i am {age} years old </p>
            <p>{children}</p>
            <input type='Text' onChange={changed} value={props.name}></input>
        </StyledDiv>)
}

export default Person;