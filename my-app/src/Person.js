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

    counstructor(id, swipeTime, estCheckout) {
        this.#id = id;
        this.#swipeTime = swipeTime;
        this.#estCheckout = swipeTime + 45;
    }
    //setestCheckout(estCheckout) {
    //    this.#estCheckout = estCheckout;
    //}
    //getestCheckout() {
    //    return this.#estCheckout;
    //}
    //setid(id) {
    //    this.#id = id;
    //}
    //getid() {
    //    return this.#id;
    //}
    //setswipeTime(swipeTime) {
    //    this.#swipeTime = swipeTime;
    //}
    //getswipeTime() {
    //    return this.#swipeTime;
    //}
    //killPerson(globalTime) {
    //    if (globalTime === this.#estCheckout) {
    //        return true;
    //    }
    //}
    render() {
        return (
            <Button variant="contained"> If this displays then Person has been rendered! </Button>
        );
    }
    #id
    #swipeTime
    #estCheckout
}

export default Person;