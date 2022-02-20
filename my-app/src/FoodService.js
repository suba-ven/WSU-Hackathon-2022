import Building from './Building.js'
import Person from'./Person.js'
import { compareAsc, format } from 'date-fns'
import React, { Component } from 'react';
import Button from '@mui/material/Button';


class FoodService extends Building{


    //calculate time based on purchase time
    //make profile to track eating time
    //constructor(currentArray) {
        
    //}
    //addPerson() {
    //    //swiped
    //   let id = 1;

    //    const tempPerson = new Person(id, getUnixtime(Date), estCheckout);

    //    this.currentArray.push(tempPerson);
    //}
    //removePerson() {
    //    if (currentArray.killperson(getUnixtime(Date))) {
    //        currentArray.splice()
    //    }
    //}

    
    render() {
        return (
            <h1> If this displays then FoodService has been rendered! </h1>
        );
    }


    //currentArray = Person[];
}

export default FoodService;
