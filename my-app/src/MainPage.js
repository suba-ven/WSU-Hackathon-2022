// JavaScript source code
import logo from './hackathonlogo.svg';
import './App.js'
import React, { Component } from 'react'
import './MainPage.css'
import FoodService from './FoodService.js';


class MainPage extends Component {

    constructor(props) {
        super(props)

    }
    //     background-color: #282c34;

    render() {
        return (
            <div maxHeight="1000px">
                <header className="Main-header">
                    <div className = "Main-text-header"> Wazzu Watch</div>
                    <img src={logo} className="Main-img" alt="logo" size = "10px"/>
                </header>
                <body className="Main-body">
                    <div className="Main-map">
                        <FoodService name = "Northside Cafe"/>
                        <FoodService name = "Southside Cafe"/>
                        <FoodService name = "Hillside Cafe "/>
                    </div>
                </body>
            </div >
        )
    }
}

export default MainPage;