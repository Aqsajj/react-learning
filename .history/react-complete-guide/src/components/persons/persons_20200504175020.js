import Person from '../persons/person/person'
import React from 'react';

const Persons = (props) => {
    props.persons.map((person, index) => {
        return <Person
            {...person}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
            click={() => props.clicked(index)} />
    });
}

export default Persons;