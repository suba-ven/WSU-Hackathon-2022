import Building from './Building.js'
import Person from'./Person.js'
import { compareAsc, format } from 'date-fns'
import React, { Component } from 'react';
import Button from '@mui/material/Button';


class FoodService extends Building{


    //calculate time based on purchase time
    //make profile to track eating time
    //constructor(currentArray) {
    //    //this.#getUnixTime = require('date-fns/getUnixTime');
    //    this.#date = 1;
    //}
    //addPerson() {
    //    //swiped
    //   let id = 1;

    //    const tempPerson = new Person(1, getUnixTime(date), 2);

    //    this.currentArray.push(tempPerson);
    //}
    //removePerson() {
    //    if (currentArray.killperson(getUnixTime(date))) {
    //        currentArray.splice()
    //    }
    //}
    test() {
         this.id = 1;
    }
    
    render() {
        return (
            <h1>{this.props.id} If this displays then FoodService has been rendered! </h1>
        );
    }

    id
    #date
    #getUnixTime
    //currentArray = [];
}

export default FoodService;
