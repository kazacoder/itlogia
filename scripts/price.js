import getConvertedPrice from "./currency.js";

let currencyCodeDefault = 'TUG';


function getPriceFromBackend(currencyCodeTo = null) {
    // ger price from ajax
    let price = 100;
    return getConvertedPrice(price, currencyCodeTo);
}


export default getPriceFromBackend;


export function getAmountFromBackend() {
    return 20;
}

function getRevenue() {
    return 20000;
}


export {getRevenue, currencyCodeDefault}

