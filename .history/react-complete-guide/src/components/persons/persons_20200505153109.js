import Person from '../persons/person/person'
import React, { Component } from 'react';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("TCL: Persons -> getDerivedStateFromProps")
    //     return state
    // }
    // componentWillReceiveProps(props) {
    //     console.log("TCL: Persons -> componentWillReceiveProps -> componentWillReceiveProps")

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("TCL: Persons ->-> shouldComponentUpdate")
        // if (nextProps.persons !== this.props.persons) {
        return true
        // }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TCL: Persons -> getSnapshotBeforeUpdate -> getSnapshotBeforeUpdate")
        return { message: 'Snapshot' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("TCL: Persons -> componentDidUpdate -> componentDidUpdate")
        console.log("TCL: Persons-> snapshot", snapshot)

    }

    componentWillMount() {
        console.log("TCL: Persons -> componentWillMount -> componentWillMount")

    }
    // componentWillUpdate() {
    //     console.log("TCL: Persons -> componentWillUpdate -> componentWillUpdate")

    // }

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