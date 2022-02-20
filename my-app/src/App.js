
import './App.css';
import LandingPage from './LandingPage.js'
import React, { Component } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';


const App =(props)=>{
    const [showSelect, setShowSelect] = useState(true);

        return (
            <div className="App">
                {showSelect && <LandingPage props={showSelect} />}
                <Button variant="contained"
                    onClick={() => setShowSelect(false)}
                > Enter
                </Button>
            </div>
        );
}

export default App;
