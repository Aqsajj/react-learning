import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router';

const indexpage = () => {
    return (
        <div>
            <h1>
                The Main Page
            </h1>

            <p>Go to <Link href='/auth'><a>Auth</a></Link></p>

            <button onClick={() => {
                Router.push('/auth')
            }}>
                Auth Button
            </button>
        </div>
    );
}

export default indexpage;