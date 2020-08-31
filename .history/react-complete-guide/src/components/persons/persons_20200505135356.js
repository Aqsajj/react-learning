import Person from '../persons/person/person'
import React, { Component } from 'react';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("TCL: Persons -> getDerivedStateFromProps")
        return state
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("TCL: Persons ->-> shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("TCL: Persons -> getSnapshotBeforeUpdate -> getSnapshotBeforeUpdate")
    }

    componentDidUpdate() {
        console.log("TCL: Persons -> componentDidUpdate -> componentDidUpdate")

    }

    render() {
        console.log("TCL: Persons -> render -> render")
        return this.props.persons.map((person, index) => {
            return <Person
                {...person}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)} />
        });
    }
}

export default Persons;