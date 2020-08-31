import React, { Component } from 'react'
import classes from './Person.module.css'

class Person extends Component {
    render() {
        console.log(' person is rendereding')
        const { name, age, children, click, changed } = this.props
        return (
            <p onClick={click}>I'm a {name} and i am {age} years old </p>
            <p>{children}</p>
            <input type='Text' onChange={changed} value={name}></input>
        )
    }
}
export default Person;