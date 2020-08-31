import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';
import PropTypes from 'prop-types'

class Person extends Component {
    componentDidMount() {
        document.querySelector('input').focus()
    }
    render() {
        console.log(' person is rendering')
        const { name, age, children, click, changed } = this.props
        return (
            <Aux>
                <p onClick={click}>I'm a {name} and i am {age} years old </p>
                <p>{children}</p>
                <input type='Text'
                    onChange={changed}
                    value={name}>
                </input>
            </Aux>
        )
    }
}
Person.propTypes = { name: PropTypes.string, age: PropTypes.number, click: PropTypes.func, changed: PropTypes.func }

export default withClass(Person, classes.Person);