// JavaScript source code
import logo from './hackathonlogo.svg';
import './App.js'
import React, { Component } from 'react'
import './MainPage.css'
import FoodService from './FoodService.js';
import { Button } from '@mui/material';


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
                    <img src={logo} className="Main-img" alt="logo" size = "20px"/>
                </header>
                <body className="Main-body">
                    <div className="Main-map">

                        <Button variant="text" style={{ maxWidth: '300px', minWidth: '49%', fontSize: '50px', color: "grey"}}> Dining Halls </Button>
                        <Button variant="text" style={{ maxWidth: '300px', minWidth: '49%', fontSize: '50px', color: "grey"}}> Vendors </Button>
                        
                    </div>
                </body>
            </div >
        )
    }
}

export default MainPage;


// <FoodService name = "Northside Cafe" percentCapacity = "50"/>
                        //<FoodService name = "Southside Cafe"/>
                        //<FoodService name = "Hillside Cafe "/>