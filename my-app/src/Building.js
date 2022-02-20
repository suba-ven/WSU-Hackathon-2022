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
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setAddress(address) {
        this.#address = address;
    }
    getAddress() {
        return this.#address;
    }
    setOccupancy(maxOccupancy) {
        this.#maxOccupancy = maxOccupancy;
    }
    getOccupancy() {
        return this.#maxOccupancy;
    }
    setOrganization(organization) {
        this.#organization = organization;
    }
    getOrganization() {
        return this.#organization;
    }
    setCurrentOccupancy(currentOccupancy) {
        this.#currentOccupancy = currentOccupancy;
    }
    getCurrentOccupancy() {
        return this.#currentOccupancy;
    }
    setCapacity(percentCapacity) {
        this.#percentCapacity = percentCapacity;
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
                    <Button variant="contained"> If this displays then Building has been rendered! </Button>
            );
        }
};

export default Building;