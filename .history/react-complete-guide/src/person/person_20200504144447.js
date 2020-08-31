import React from 'react'
import styled from 'styled-components'
import classes from './Person.css'

const Person = (props) => {
    const { name, age, children, click, changed } = props
    return (
        <div className={classes.Person}>
            <p onClick={click}>I'm a {name} and i am {age} years old </p>
            <p>{children}</p>
            <input type='Text' onChange={changed} value={props.name}></input>
        </div>)
}

export default Person;