// JavaScript source code
import './App.js'
import React, { Component, useState } from 'react'
import './Vendor.css'
import FoodService from './FoodService.js';
import { Button } from '@mui/material';

const VendorManager = (props) => {
    return (
        <div className = "Vendor">
            <FoodService name="Carlitas" pf={50} co={2} mo={70} />
            <FoodService name="Subway" pf={75} co={3} mo={80} />
            <FoodService name="Panda Express" pf={25} co={4} mo={90} />
        </div >
    )
}

export default VendorManager;
