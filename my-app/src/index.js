import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Building from './Building';
import Person from './Person';
import FoodService from './FoodService';
import reportWebVitals from './reportWebVitals';

var index = new Date();

ReactDOM.render(
    <React.StrictMode>
        <App />
       
  </React.StrictMode>,
  document.getElementById('root')
);

//        <Building name="hello" address="123" maxOccupancy='12' organization = "WSU" currentOccupancy = '12' percentCapacity ='12'/>

//         <FoodService hours={index.getHours()} minutes={index.getMinutes()} seconds={index.getSeconds()} milli={index.getTime()} />
