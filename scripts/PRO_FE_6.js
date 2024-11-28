// let items = [1,2,3,4,5,6,7,8];
//
// function sum (array, callback) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     callback(sum);
// }
//
// sum(items, function (sum) {
//     console.log(`Сумма: ${sum}`);
// });


let brands = [];
let types = [];
let products = [];


Promise.all(
    [
        fetch('../files/brands.json'),
        fetch('../files/types.json'),
        fetch('../files/products.json'),
    ]
).then(async ([brandsResponse, typesResponse, productsResponse]) => {
    const brandsJson = await brandsResponse.json();
    const typesJson = await typesResponse.json();
    const productsJson = await productsResponse.json();
    return [brandsJson, typesJson, productsJson]
}).then( response => {
    brands = response[0];
    types = response[1];
    products = response[2];


    processData();

})

function processData() {
    let resultEvery = products.every(item => {
        return item.title.includes('Пылесос');
    })

    console.log(resultEvery);

    let resultFind = products.find(item => {
        return item.title.indexOf('MJSCXCQPT') > -1;
    })

    console.log(resultFind);


    let resultFindIndex = products.findIndex(item => {
        return item.title.indexOf('MJSCXCQPT') > -1;
    })

    console.log(resultFindIndex);


    products.forEach(item => console.log(item));

    let resultFilter = products.filter(item => {
        return item.price >= 8000 && item.price <=10000;
    })

    console.log(resultFilter);

    let resultSort = products.sort((a, b) => {
        return b.price - a.price;
    })

    console.log(resultSort);

    let resultMap = products.map(item => {
        return {title: item.title, equipment: item.equipment}
    })

    console.log(resultMap);


    let resultReduce = products.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    console.log(resultReduce);


}

