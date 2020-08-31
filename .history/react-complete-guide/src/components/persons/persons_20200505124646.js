import Person from '../persons/person/person'
import React from 'react';

const Persons = (props) =>
    console.log('persons rendering')
props.persons.map((person, index) => {
    console.log('p=> ', person)
    return <Person
        {...person}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
        click={() => props.clicked(index)} />
});

export default Persons;