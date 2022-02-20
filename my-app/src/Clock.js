import Building from './Building.js'
import Person from './Person.js'
import { compareAsc, format } from 'date-fns'
import React, { Component } from 'react';
import Button from '@mui/material/Button';


class Clock extends Building {


    //calculate time based on purchase time
    //make profile to track eating time
    constructor(props) {
        super(props);
        this.#testCurID = 0;

    }
    addPerson() {
        //swiped

        var date = Date();

        const tempPerson = new Person(this.#testCurID, date.getMinute(), date.getHour());

        this.#testCurID++;

        //this.currentArray.push(tempPerson);
    }


    render() {
        return (
                <h1>Current time: {this.props.hours}:{this.props.minutes}</h1>
        );
    }

    #testCurID
    //currentArray = new Array();
}

export default Clock;
