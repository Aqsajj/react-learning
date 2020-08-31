import React, { Component } from 'react';

// for lazy loading : download only code that is currently needed
const AsyncComponent = (importComponent) => {
    return (
        class extends Component {
            state = {
                component: null // currently loaded component
            }

            componentDidMount() {
                importComponent().then((cmp) => {
                    this.setState({ component: cmp.default })
                })
            }
            render() { }
        }
    );
}

export default AsyncComponent;