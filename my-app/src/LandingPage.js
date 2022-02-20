// JavaScript source code
import logo from './hackathonlogo.svg';
import './LandingPage.css';
import Button from '@mui/material/Button';
import React, { Component } from 'react'


class LandingPage extends Component {

    render() {
        return (
        <div>
        <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload!woah!
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
        <Button variant="contained">Hello World</Button>;
        </div >
        )
}
}

export default LandingPage;