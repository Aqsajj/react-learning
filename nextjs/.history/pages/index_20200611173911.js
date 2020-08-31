import React, { Component } from 'react';
import Link from 'next/link'

const indexpage = () => {
    return (
        <div>
            <h1>
                The Main Page
            </h1>

            <p>Go to <Link href='/auth'>Auth</Link></p>
        </div>
    );
}

export default indexpage;