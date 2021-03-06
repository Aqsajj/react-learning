
import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    // it executes for every render cycle 
    useEffect(() => {
        //http req
        console.log("TCL: Cockpit -> useEffect")
        setTimeout(() => {
            alert('saved data to cloud')
        }, 1000)
    }, [props.persons])

    const assignedClasses = []
    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.red
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            < h1 className={classes.red}>{props.title}</h1 >
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>)
}


export default Cockpit;