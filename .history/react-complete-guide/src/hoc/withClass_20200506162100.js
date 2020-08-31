import React from 'react';

// const WithClass = (props) => {
//     return (
//         <div className={props.className}>{props.children}</div>
//     );
// }

// another way - a function that return a functional component
const withClass = (WrappedComponent, className) => {
    return (props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    ));
}
export default withClass;