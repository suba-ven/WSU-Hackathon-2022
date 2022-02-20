// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './DiningHallManager.css'
import FoodService from './FoodService.js';
import Button from '@mui/material/Button';

const DiningHallManager = (props) => {
    return (

        <div className= "DiningHall">
            <FoodService name="Southside Cafe" pf={50} co={2} mo={70} />
            <FoodService name="Hillside Cafe" pf={75} co={3} mo={80}/>
            <FoodService name="Northside Cafe" pf={25} co={4} mo={90}/>

        </div>
    );
}

export default DiningHallManager;

/*
            <FoodService name = "Southside Cafe" percentCapacity = "50"/>
            <FoodService name = "Hillside Cafe "/>
            <FoodService name="Northside Cafe" percentCapacity = "50"/>
             <FoodService name="Hillside Cafe" percentCapacity = "50"/>
             name={'Southside Cafe'}
*/