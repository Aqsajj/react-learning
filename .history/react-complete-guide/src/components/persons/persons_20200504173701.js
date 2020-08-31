import Person from '../persons/person/person'
const persons = (props) => {
    props.map((person, index) => {
        return <Person
            {...person}
            key={person.id}
            changed={(event) => props.clicked(event, person.id)}
            click={() => props.changed(index)} />
    });
}

export default persons;