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



    let samsung = brands.find(item => item.title.toLowerCase() === 'samsung').id
    if (samsung) {

        let resSamsung = products.filter(item => item.brandId === samsung)
        console.log(resSamsung);
    } else {
        console.log('Not found')
    }

    let productsFullData = products.map(item => {
        let brand = brands.find(el => item.brandId === el.id).title
        let type = types.find(el => item.typeId === el.id).name
        if (brand) {item.brand = brand}
        if (brand) {item.type = type}
        delete item.brandId
        delete item.typeId
        return item;
    })
    console.log(productsFullData);

    let productsRated = products.map(item => {
        let allStars = item.reviews.reduce((sum, el) => {
            return sum + el.stars
        }, 0)
        return {title: item.title, rating: +(allStars / item.reviews.length).toFixed(1)};
    })
    console.log(productsRated);

    // my way
    let maxPower = Math.max.apply(null, products.map(item => {
        let power = parseInt(item.characteristics[0].value[1].value)
        return power ? power : 0
    }))
    let mostPowerfulVacuum = products.find(item => {return item.characteristics[0].value[1].value = maxPower})
    console.log(mostPowerfulVacuum);

    // lesson way
    console.log('-------------------')
    let maxPowerLess = 0
    let mostPowerfulItem = null

    products.forEach(item => {
        let commonCharacteristics = item.characteristics.find(cat => {
            return cat.name.toLowerCase() === 'основные';
        });
        if (commonCharacteristics && commonCharacteristics.value)
        {
            let power = commonCharacteristics.value.find(el => {
                return el.name.toLowerCase() === 'мощность'
            })

            if (power && power.value) {
                let powerNum = parseInt(power.value)
                if (!isNaN(powerNum) && powerNum > maxPowerLess) {
                    maxPowerLess = powerNum;
                    mostPowerfulItem = item
                }
            }
        }

    })
    console.log(mostPowerfulItem)


    let customer = 'валерий рудерман'
    resFindClient = products.find(item => {
        let res =  item.reviews.findIndex(review => {
            return review.person.toLowerCase() === customer
        })
        return res > -1
    })

    console.log(resFindClient);



    console.log('-------------------')
    let newReviews = products.flatMap(item => {
        return item.reviews
    }).filter(item => {
        let dateParts = item.date.split('.')
        return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`) >= new Date("2022-01-01")
    })

    console.log(newReviews);
    console.log(new Date("2022-01-01"));

}

