import React, { Component } from 'react';

const User = (props) => {
    return (
        <div>
            <h1> {props.name}</h1>
            <p>{props.age}</p>
            <style jsx>
                {
                    `
                    div{
                        border:1px solid blue;
                        box-shadow:0 2p 3px #ccc;
                        padding:20px;
                        text-align:center;
                    }`
                }
            </style>
        </div>
    );
}

export default User;