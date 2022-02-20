// JavaScript source code
import logo from './hackathonlogo.svg';
import './LandingPage.css';
import React, { Component } from 'react'

class LandingPage extends Component {

    constructor(props) {
        super(props)

    }
    //     background-color: #282c34;

    render() {
        return (
        <div>
        <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className = "App-title-font">
                        Welcome to Wazzu Watch!
                    </p>
                    <body className="Landing-body-font"> Tracker for capacity of buildings. Useful for people to plan meal times around crowd intensity </body>
                </header>
        </div >
        )
}
}

export default LandingPage;