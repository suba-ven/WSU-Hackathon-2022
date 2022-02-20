
import './App.css';
import LandingPage from './LandingPage.js'
import MainPage from './MainPage.js'
import React, { Component } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    button: {
        main: '#A61D2F',
    },
});
const App =(props)=>{
    const [showSelect, setShowSelect] = useState(true);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {showSelect && <LandingPage props={showSelect} />}
                {showSelect && <Button variant="contained" size="large" color="error"
                    onClick={() => setShowSelect(false)}
                > Enter
                </Button>}
                {!showSelect && <MainPage/>}
            </div>
            </ThemeProvider>    
        );
}

export default App;
