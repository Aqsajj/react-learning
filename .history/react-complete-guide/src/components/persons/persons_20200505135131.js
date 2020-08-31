import Person from '../persons/person/person'
import React, { Component } from 'react';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("TCL: Persons -> getDerivedStateFromProps", getDerivedStateFromProps)
        return state
    }

    render() {
        console.log('Persons rendering')
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