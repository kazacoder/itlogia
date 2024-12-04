import {Cafe} from "../models/Cafe.js";
import {Restaurant} from "../models/Restaurant.js";
import {Reservation} from "../models/Reservation.js";
import {CoffeeShop} from "../models/CoffeeShop.js";
import {MichelinRestaurant} from "../models/MichelinRestaurant.js";

Promise.all([
    'cafes.json',
    'coffee-shops.json',
    'michelin-restaurants.json',
    'restaurants.json',
].map(url => fetch('../data/' + url).then(response => response.json())))
    .then(dataArray => {
        processData(dataArray);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных: ' + error);
    });

const TYPE_CAFE = 'cafe'
const TYPE_COFFEE_SHOP = 'coffee-shop'
const TYPE_RESTAURANT = 'restaurant'
const TYPE_MICHELIN_RESTAURANT = 'michelin-restaurant'

const foodPlaces = {
    cafes: [],
    restaurants: [],
    michelinRestaurants: [],
    coffeeShops: [],
}

function  processData (data) {
    processCafes(data[0]);
    processRestaurants(data[3]);
    processMichelinRestaurants(data[2]);
    processCoffeeShops(data[1]);

    generateTableForFoodPlaces(foodPlaces.cafes, TYPE_CAFE);
    generateTableForFoodPlaces(foodPlaces.restaurants, TYPE_RESTAURANT);
    generateTableForFoodPlaces(foodPlaces.michelinRestaurants, TYPE_MICHELIN_RESTAURANT);
    generateTableForFoodPlaces(foodPlaces.coffeeShops, TYPE_COFFEE_SHOP);

}

function processCafes (cafes) {
    cafes.forEach(item => {
        const cafe = new Cafe(item.name, item.address, item.openingTime, item.closingTime);
        item.menu.forEach(menuItem => {
            cafe.addToMenu(menuItem);
            // cafe.addToMenu({name: menuItem.name, price: menuItem.price});
        });

        foodPlaces.cafes.push(cafe);

    })
}


function processCoffeeShops (coffeeShops) {
    coffeeShops.forEach(item => {
        const coffeeShop = new CoffeeShop(item.name, item.address, item.seatingCapacity, item.openingTime, item.closingTime);
        if (item.specialOffer) {
            coffeeShop.specialOffer = item.specialOffer;
        }
        item.menu.forEach(menuItem => {
            coffeeShop.addToMenu(menuItem);
        });

        foodPlaces.coffeeShops.push(coffeeShop);

    })
}

function processRestaurants (restaurants) {
    restaurants.forEach(item => {
        const restaurant = new Restaurant(item.name, item.address, item.cuisine, item.openingTime, item.closingTime);
        item.menu.forEach(menuItem => {
            restaurant.addToMenu(menuItem);
        });
        item.reservations.forEach(reservationItem => {
            restaurant.addReservation(new Reservation(reservationItem.name, reservationItem.time));
        })

        foodPlaces.restaurants.push(restaurant);

    })
}

function processMichelinRestaurants (restaurants) {
    restaurants.forEach(item => {
        const restaurant = new MichelinRestaurant(item.name, item.address, item.cuisine, item.mainChef,
            item.rating, item.openingTime, item.closingTime);
        item.menu.forEach(menuItem => {
            restaurant.addToMenu(menuItem);
        });
        item.reservations.forEach(reservationItem => {
            restaurant.addReservation(new Reservation(reservationItem.name, reservationItem.time));
        })

        foodPlaces.michelinRestaurants.push(restaurant);

    })
}


function generateTableForFoodPlaces(data, type) {
    const tableBody = document.getElementById(type + '-tb')

    data.forEach((foodPlace, i) => {
        const row = tableBody.insertRow();
        row.insertCell().innerText = i + 1;
        row.insertCell().innerText = foodPlace.name;
        row.insertCell().innerText = foodPlace.address;
        row.insertCell().innerText = foodPlace.workingHours;
        if (type === TYPE_RESTAURANT || type === TYPE_MICHELIN_RESTAURANT) {
            row.insertCell().innerText = foodPlace.cuisine
        }
        let ul = document.createElement("ul");
        foodPlace.menu.forEach((menuItem) => {
            const li = document.createElement("li");
            li.innerText = menuItem.name + ' - ' + menuItem.price + ' $';
            ul.appendChild(li)
        })
        row.insertCell().appendChild(ul)

        if (type === TYPE_RESTAURANT || type === TYPE_MICHELIN_RESTAURANT) {
            let ul = document.createElement("ul");
            foodPlace.reservation.forEach((reservationItem) => {
                const li = document.createElement("li");
                li.innerText = reservationItem.name + ' - ' + reservationItem.time;
                ul.appendChild(li)
            })
            row.insertCell().appendChild(ul)
        }

        if (type === TYPE_MICHELIN_RESTAURANT) {
            row.insertCell().innerText = foodPlace.rating
            row.insertCell().innerText = foodPlace.mainChief
        }

        if (type === TYPE_COFFEE_SHOP) {
            row.insertCell().innerText = foodPlace.seatingCapacity
            row.insertCell().innerText = foodPlace.specialOffer
        }
        row.insertCell().innerText = foodPlace.isOpen() ? 'Да' : 'Нет'

    })
}

