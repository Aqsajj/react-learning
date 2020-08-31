import Person from '../persons/person/person'
const persons = (props) => {
    props.map((person, index) => {
        return <Person
            {...person}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            click={() => this.deletePersonHandler(index)} />
    });
}

export default persons;