/**  Represents each cell in food service array
 * 
 *  includes average time for person to eat
 *  and persons id number
 * 
 * 
 * 
 * */
import Building from './Building.js'
import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Person extends Component{

    constructor(props, id, swipeTimeMinutes, swipeTimeHours) {
        super(props);
        this.#id = id;
        this.#swipeTimeMinutes = swipeTimeMinutes;
        this.#swipeTimeHours = swipeTimeHours;
        if (swipeTimeMinutes + 45 > 60) {

            if (swipeTimeHours + 1 > 24) {
                this.#estCheckoutHours = (this.#swipeTimeHours + 1) - 24;
            }
            else {
                this.#estCheckoutHours = (this.#swipeTimeHours + 1);
            }
            this.#estCheckoutMinutes = (this.#swipeTimeMinutes + 45) - 60;
        }
        else {
            this.#estCheckoutMinutes = (this.#swipeTimeMinutes + 45);
        }
    }
    setestCheckoutMinutes(estCheckoutMinutes) {
        this.#estCheckoutMinutes = estCheckoutMinutes;
    }
    getestCheckoutMinutes() {
        return this.#estCheckoutMinutes;
    }
    setestCheckoutHours(estCheckoutHours) {
        this.#estCheckoutHours = estCheckoutHours;
    }
    getestCheckoutHours() {
        return this.#estCheckoutHours;
    }
    setid(id) {
        this.#id = id;
    }
    getid() {
        return this.#id;
    }
    setswipeTimeMinutes(swipeTimeMinutes) {
        this.#swipeTimeMinutes = swipeTimeMinutes;
    }
    getswipeTimeMinutes() {
        return this.#swipeTimeMinutes;
    }
    setswipeTimeHours(swipeTimeHours) {
        this.#swipeTimeHours = swipeTimeHours;
    }
    getswipeTimeHours() {
        return this.#swipeTimeHours;
    }
    killPerson() {
        var curDate = new Date();

        if (curDate.getMinutes() === this.#estCheckoutMinutes && curDate.getHours() === this.#estCheckoutHours) {
            return true;
        }
    }
    render() {
        return (
            <Button variant="contained"> If this displays then Person has been rendered! </Button>
        );
    }
    //{ this.props = this.#id }
    #id
    #swipeTimeMinutes
    #swipeTimeHours
    #estCheckoutMinutes
    #estCheckoutHours
}

export default Person;