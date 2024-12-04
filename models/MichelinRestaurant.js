import {Restaurant} from "./Restaurant.js";

export class MichelinRestaurant extends Restaurant {

    constructor(name, address, cuisine, mainChief, rating, openingTime, closingTime ) {
        super(name, address, cuisine, openingTime, closingTime);
        this.mainChief = mainChief;
        this.rating = rating;
    }

    getInfo () {
        return `${super.getInfo()}, Ресторан Michelin. ${this.getMichelinInfo()}`;
    }

    getMichelinInfo () {
        return `Рейтинг заведения ${this.rating}, Главный повар: ${this.mainChief}`;
    }
}
