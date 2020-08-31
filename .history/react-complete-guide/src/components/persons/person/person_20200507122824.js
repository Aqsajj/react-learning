import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext
    componentDidMount() {
        // this is not optimal 
        // document.querySelector('input').focus()
        //this.inputElement.focus()
        this.inputElementRef.current.focus()
    }
    render() {
        const { name, age, children, click, changed } = this.props
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
                </AuthContext.Consumer>

                <p onClick={click}>I'm a {name} and i am {age} years old </p>
                <p>{children}</p>
                <input type='Text'
                    // i.e. we have added global property to our class this.inputElement
                    // ref={(inputElement) => { this.inputElement = inputElement }}
                    ref={this.inputElementRef}
                    onChange={changed}
                    value={name}>
                </input>
            </Aux>


        )
    }
}
Person.propTypes = { name: PropTypes.string, age: PropTypes.number, click: PropTypes.func, changed: PropTypes.func }

export default withClass(Person, classes.Person);