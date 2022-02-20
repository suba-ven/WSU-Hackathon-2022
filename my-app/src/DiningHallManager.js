// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './DiningHallManager.css'
import FoodService from './FoodService.js';
import Button from '@mui/material/Button';

const DiningHallManager = (props) => {
    return (

        <div className= "DiningHall">
            <FoodService name="Southside Cafe" pf={70} co={35} mo={50} />
            <FoodService name="Hillside Cafe" pf={100} co={70} mo={70}/>
            <FoodService name="Northside Cafe" pf={50} co={30} mo={60}/>

        </div>
    );
}

export default DiningHallManager;