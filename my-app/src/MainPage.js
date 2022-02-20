// JavaScript source code
import logo from './hackathonlogo.svg';
import './App.js'
import React, { Component, useState } from 'react'
import DiningHallManager from './DiningHallManager.js'
import VendorManager from './VendorManager.js'
import './MainPage.css'
import FoodService from './FoodService.js';
import { Button } from '@mui/material';


const MainPage = (props) => {
    const [showDiningMenu, setShowDiningMenu] = useState(false);
    const [showVendorMenu, setShowVendorMenu] = useState(false);
    const [changeMenu, setChangeMenu] = useState(false);

        return (
            <div maxHeight="800px">
                <header className="Main-header">
                    <div className = "Main-text-header"> Wazzu Watch</div>
                    <img src={logo} className="Main-img" alt="logo" size = "20px"/>
                </header>
                <body className="Main-body">
                    <div className="Main-map">

                        {!changeMenu && <Button variant="text" style={{ maxWidth: '300px', minWidth: '49%', fontSize: '50px', color: "grey" }}
                            onClick={() => {
                                setShowDiningMenu(true);
                                setChangeMenu(true);
                            }}> Dining Halls </Button>}
                        {!changeMenu && <Button variant="text" style={{ maxWidth: '300px', minWidth: '49%', fontSize: '50px', color: "grey" }}
                            onClick={() => {
                                setShowVendorMenu(true);
                                setChangeMenu(true);
                            }}>  Vendors </Button>}

                        {showDiningMenu && <DiningHallManager />}
                        {showVendorMenu && <VendorManager />}

                    </div>
                </body>
            </div >
        )
}

export default MainPage;


// <FoodService name = "Northside Cafe" percentCapacity = "50"/>
                        //<FoodService name = "Southside Cafe"/>
                        //<FoodService name = "Hillside Cafe "/>