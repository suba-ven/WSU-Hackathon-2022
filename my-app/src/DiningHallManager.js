// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './DiningHallManager.css'
import FoodService from './FoodService.js';
import Button from '@mui/material/Button';

const DiningHallManager = (props) => {
    const names = new Array();
    const DiningHalls = new Array();

    names = ["Northside", "Hillside", "Southside"];
    names.forEach((name) => {
       var newFoodService = new FoodService(props);
        newFoodService.setName(name);
        DiningHalls.push(newFoodService);
        newFoodService.readFile()
    })
    //forea
    //const DiningHalls = new Array();

    //tempFoodService = new FoodService();

    //DiningHalls.push(tempFoodService);

    return (
        <div className="DiningHall">
            {DiningHalls.map((hall, index) => (
            <FoodService name={hall.name} pf={} />
            ))}

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