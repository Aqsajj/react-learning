import React from 'react'

const Person = (props) => {
    const { name, age, children, click } = props
    return (
        <div>
            <p onClick={click}>I'm a {name} and i am {age} years old </p>
            <p>{children}</p>
            <input type='Text' onChange={}></input>
        </div>)
}

export default Person;