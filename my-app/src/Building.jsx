import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';
import React, { Component } from 'react';

class Building extends Component {

    constructor(props, name, address, maxOccupancy, organization, currentOccupancy, percentCapacity) {
        super(props);
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
    setAddress(address) {

    }
    getAddress() {
        return this.#address;
    }
    setOccupancy(maxOccupacy) {

    }
    getOccupancy() {
        return this.#maxOccupancy;
    }
    setOrganization(organization) {

    }
    getOrganization() {
        return this.#organization;
    }
    setCurrentOccupancy(currentOccupancy) {

    }
    getCurrentOccupancy() {
        return this.#currentOccupancy;
    }
    setCapacity(percentCapacity) {

    }
    getCapacity() {
        return this.#percentCapacity;
    }

    #name;
    #address;
    #maxOccupancy;
    #organization;
    #currentOccupancy;
    #percentCapacity;
        render() {
            return (
                    <Button variant = "contained"> If this displays then Building has been rendered! </Button>
            );
        }
};

export default Building;