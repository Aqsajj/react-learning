import React, { Component } from 'react';

// for lazy loading : download only code that is currently needed
const AsyncComponent = (importComponent) => {
    return (
        class extends Component {
            state = {
                component: null // currently loaded component
            }
            render() { }
        }
    );
}

export default AsyncComponent;