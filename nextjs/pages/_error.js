import React, { Component } from 'react';
import Link from 'next/link';

const errorPage = () => {
    return (
        <div>
            <h1> Opps something went wrong</h1>
            <p>
                Try <Link href="/"><a>Going Back</a></Link>
            </p>
        </div>
    );
}

export default errorPage;