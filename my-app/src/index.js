import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Building from './Building';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Building/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//        <Building name="hello" address="123" maxOccupancy='12' organization = "WSU" currentOccupancy = '12' percentCapacity ='12'/>