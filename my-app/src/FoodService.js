import Building from './Building.js'
import Person from'./Person.js'

class FoodService extends Building{


    //calculate time based on purchase time
    //make profile to track eating time
    constructor(currentArray) {
        

    }
    addPerson() {
        //swiped
        const tempPerson = new Person(id, swipeTime, estCheckout);

        this.currentArray.push(tempPerson);
    }
    removePerson() {
        if (killperson(globalTime)) {
            currentArray.splice()
        }
    }
    render() {
        return (
            <Button variant="contained"> If this displays then FoodService has been rendered! </Button>
        );
    }
    const currentArray = [];
}

