import React from 'react'
import error from '/errors/error.js'
import classes from './Person.module.css'

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