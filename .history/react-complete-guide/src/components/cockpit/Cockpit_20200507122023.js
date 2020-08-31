
import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null)
    // Error toggleButtonRef.current.click()
    // it executes for every render cycle 
    useEffect(() => {
        //http req
        toggleButtonRef.current.click()

        // allows us when it execute
        //[] for first time only
        return () => {
            console.log(' cleanup in useEffect')
        }
        // cleanUp
    }, [])

    useEffect(() => {
        //http req
        return () => { // now as there is no second argument , this will run for every update cycle
            //console.log('cleaning cockpit here 2')
        }
        // cleanUp
    })

    const assignedClasses = []
    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.red
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            < h1 className={classes.red}>{props.title}</h1 >
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
                </button>

            <button onClick={props.login} >
                Log in
                </button>
        </div>)
}


export default React.memo(Cockpit);