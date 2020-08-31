import Person from '../persons/person/person'
import React, { Component } from 'react';
import AuthContext from '../../context/auth-context'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("TCL: Persons -> getDerivedStateFromProps")
    //     return state
    // }
    // componentWillReceiveProps(props) {
    //     console.log("TCL: Persons -> componentWillReceiveProps -> componentWillReceiveProps")

    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.persons !== this.props.persons) {// shallow comparison
            return true
        }
        return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return { message: 'Snapshot' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("TCL: Persons-> snapshot", snapshot)

    }

    componentWillMount() {
        //console.log("TCL: Persons -> componentWillMount -> componentWillMount")

    }
    // componentWillUpdate() {
    //     console.log("TCL: Persons -> componentWillUpdate -> componentWillUpdate")

    // }

    render() {
        //console.log("TCL: Persons -> render -> render")
        return (
            this.props.persons.map((person, index) => {
                return
                <Person
                    {...person}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    click={() => this.props.clicked(index)}
                    isAuth={this.props.isAuthenticated} />
            })

        )
    }
}
export default Persons;