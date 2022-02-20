import logo from './hackathonlogo.svg';
import './App.js'
import React, { Component, useState } from 'react'
import DiningHallManager from './DiningHallManager.js'
import VendorManager from './VendorManager.js'
import './MainPage.css'
import FoodService from './FoodService.js';
import { Button } from '@mui/material';


const Clock = (props) => {
   
    return (
            <header className="Main-header">
            <div className="Main-text-header"> Snapshot at {props.Hour}:{props.Minute}, refresh for a more up-to-date time</div>
            </header>
    )
}

export default Clock;

//<div className="Main-text-header"> {this.prop.Hour}:{this.prop.Minute}</div>