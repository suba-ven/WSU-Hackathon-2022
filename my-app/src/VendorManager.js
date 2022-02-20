// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './Vendor.css'
import FoodService from './FoodService.js';
import { Button } from '@mui/material';


const VendorManager = () => {
    return (
        <div maxHeight="800px">
            <FoodService name="Northside Cafe " />
        </div >
    )
}

export default VendorManager;

/*
            <FoodService name = "Southside Cafe" percentCapacity = "50"/>
            <FoodService name = "Hillside Cafe "/>*/