import Building from './Building.js'
import Person from'./Person.js'
import { compareAsc, format } from 'date-fns'
import React, { Component, useState } from 'react';
import Button from '@mui/material/Button';
import './FoodService.css'

class FoodService extends Building{
    shouldKill  

     date
    #appTime
  
    capacityArray = new Array();
    timeArray = new Array();
   


    //calculate time based on purchase time
    //make profile to track eating time
    constructor(props) {
        super(props);
        this.date = Date();
        this.#appTime = this.date.getMinute();
         //this.shouldKill = false;
    }
    //addPerson() {
    //    //swiped

    //    var date = Date();

    //    const tempPerson = new Person(this.#testCurID, date.getMinute(), date.getHour());

    //    this.#testCurID++;

    //    this.currentMap.set(this.#testCurID,{tempPerson});
    //}
    //removePerson() {
        
    //        this.currentMap.delete(killPerson().getid());
            
        
    //}
    pushPerson() {
        this.timeArray.push(0);
    }
    updateTime() {
        if (this.date.getMinute() != this.#appTime) {
            this.#appTime = this.date.getMinute();
            this.timeArray.forEach(+1);
        }
    }
    popPerson() {
        if (this.timeArray[0] === 45) {
            this.timeArray.shift();
        }
    }
    correctOccupancy() {
        //count people in building
        this.setCurrentOccupancy(this.timeArray.length());
        this.setPercentCapacity(this.timeArray.length() / this.getMaxOccupancy);
    }


    
    render() {
        return (
            <div className = "Food-center">
                <h1> {this.props.name}</h1>
                <h2>Percent Capacity: {this.props.percentCapacity}</h2>
                {this.shouldKill && <Button/>}
                </div>
        );
    }
    /*
     if(computerTime != date.getMinute())
     {
       re-render();
       computerTime = date.getMinute();
     }
     
     //  <h2>Current time: {this.props.hours}:{this.props.minutes}:{this.props.seconds}
                Current time ms: {this.props.milli}</h2>
     */
    
}

export default FoodService;
