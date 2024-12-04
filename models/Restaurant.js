import {FoodPlace} from "./FoodPlace.js";
import {Reservation} from "./Reservation.js";

export class Restaurant extends FoodPlace {

    constructor(name, address, cuisine, openingTime, closingTime) {
        super(name, address, 'Ресторан', openingTime, closingTime);
        this.cuisine = cuisine;
        this.reservation = [];

    }

    getInfo () {
        return `${super.getInfo()}, кухня: ${this.cuisine}`;
    }

    addReservation (reservation) {
        if (reservation instanceof Reservation) {
            this.reservation.push(reservation);
        }
    }

    showReservations () {
        console.log('Бронирования ресторана: ' + this.name)
        this.reservation.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - ${item.time}`)
        })
    }
}

