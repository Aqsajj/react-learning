import React from 'react'
import './Person.css'
import Radium, { styleRoot } from 'radium'


const Person = (props) => {
    const { name, age, children, click, changed } = props
    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }
    return (
        <styleRoot>
            <div className='Person' style={style}>
                <p onClick={click}>I'm a {name} and i am {age} years old </p>
                <p>{children}</p>
                <input type='Text' onChange={changed} value={props.name}></input>
            </div>)
        </styleRoot>
}

export default Radium(Person);