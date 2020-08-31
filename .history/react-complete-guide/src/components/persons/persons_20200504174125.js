import Person from '../persons/person/person'

const persons = (props) => {
    props.map((person, index) => {
        return <Person
            {...person}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
            click={() => props.clicked(index)} />
    });
}

export default persons;