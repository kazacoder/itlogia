import getPrice from './price.js'

function showPrice () {
    let [price, currency] = getPrice('EUR')
    // get price
    // show price
    console.log(price + ' ' + currency)

}

showPrice()

import {getAmountFromBackend as getAmount} from './price.js'

console.log(getAmount())


import {getRevenue, currencyCodeDefault} from './price.js'

console.log(getRevenue())

import * as Price from "./price.js";


console.log(Price.currencyCodeDefault)