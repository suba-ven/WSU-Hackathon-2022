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
                    <p className = "App-title-font">
                        Welcome to Wazzu Watch!
                    </p>
                    <body className = "Landing-body-font"> This project (descr.) </body>
                    <Button variant="contained"> Enter
                    </Button>
                </header>
        </div >
        )
}
}

export default LandingPage;