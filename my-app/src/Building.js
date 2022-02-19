import React, { Component } from 'react'

class Building extends Component{
    
    constructor(name,address,maxOccupancy,organization,currentOccupancy,percentCapacity) {
    this.#name = name;
    this.#address = address;
    this.#maxOccupancy = maxOccupancy;
    this.#organization = organization;
    this.#currentOccupancy = currentOccupancy;
        this.#percentCapacity = percentCapacity;

    };

    setName(name) {
        
    }
    getName() {
        return this.#name;
    }
    setName(address) {

    }
    getName() {
        return this.#address;
    }
    setName(maxOccupacy) {

    }
    getName() {
        return this.#maxOccupancy;
    }
    setName(organization) {

    }
    getName() {
        return this.#organization;
    }
    setName(currentOccupancy) {

    }
    getName() {
        return this.#currentOccupancy;
    }
    setName(percentCapacity) {

    }
    getName() {
        return this.#percentCapacity;
    }


    #name;
    #address;
    #maxOccupancy;
    #organization;
    #currentOccupancy;
    #percentCapacity;


    
    
   

}

//export defualt Building;