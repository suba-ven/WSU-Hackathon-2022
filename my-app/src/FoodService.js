import Building from './Building.js'
import Person from './Person.js'
import './FoodService.css';
import { compareAsc, format } from 'date-fns'
import React, { Component } from 'react';
import Button from '@mui/material/Button';


class FoodService extends Building{


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
    //removePerson() {
    //    if (currentArray.killperson(getUnixTime(date))) {
    //        currentArray.splice()
    //    }
    //}

    
    render() {
        return (
            <div backgroundColor="gray">

                <h1 className="Food-main">
                    <div className = "Food-center">{this.props.name}</div>
                        </h1>
                    <Button variant="contained"> If this displays then Building has been rendered! </Button>
            </div>
        );
    }

    #testCurID
    //currentArray = new Array();
}

export default FoodService;
