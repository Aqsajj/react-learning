import React from 'react';
import './index.css'
import ReactDOM from 'react-dom'
import { BrowserRouter } from ' react-router-dom'

const app = (
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))