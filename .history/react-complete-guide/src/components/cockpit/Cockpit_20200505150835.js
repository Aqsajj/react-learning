
import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    // it executes for every render cycle 
    useEffect(() => {
        //http req
        console.log("TCL: Cockpit -> useEffect")
        const timer = setTimeout(() => {
            alert('saved data to cloud')
        }, 1000)
        // allows us when it execute
        //[] for first time only
        return () => {
            clearTimeout(timer)
            console.log('cleaning cockpit here')
        }
        // cleanUp
    }, [])

    useEffect(() => {
        //http req
        console.log("TCL: Cockpit -> 2nd useEffect")

        return () => { // now as there is no second argument , this will run for every update cycle
            console.log('cleaning cockpit here 2')
        }
        // cleanUp
    })

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