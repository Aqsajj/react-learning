import React from 'react';

// const WithClass = (props) => {
//     return (
//         <div className={props.className}>{props.children}</div>
//     );
// }

// another way - a function that return a functional component
const WithClass = (WrappedComponent, className) => {
    return (props => {
        <div className={className}>
            <WrappedComponent />
        </div>
    });
}
export default WithClass;