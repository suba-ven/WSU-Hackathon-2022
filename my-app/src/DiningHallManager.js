// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './DiningHallManager.css'
import FoodService from './FoodService.js';
import Button from '@mui/material/Button';

const DiningHallManager = (props) => {
    return (

        <div>
            <FoodService name="Southside Cafe" pf={50} />
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