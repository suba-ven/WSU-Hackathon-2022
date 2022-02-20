// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './DiningHallManager.css'
import FoodService from './FoodService.js';
import Button from '@mui/material/Button';

const DiningHallManager = (props) => {
    return (

        <div className= "DiningHall">
            <FoodService name="Southside Cafe" pf={50} co={35} mo={70} />
            <FoodService name="Hillside Cafe" pf={75} co={60} mo={80}/>
            <FoodService name="Northside Cafe" pf={25} co={25} mo={100}/>

        </div>
    );
}

export default DiningHallManager;