// var result = confirm('Привет');
// var result = prompt('Сколько вам лет');
// console.log(result);
//
//
// let num = 0
//
// function helloWorld() {
//     console.log('Hello World!');
//     console.log(num++);
//     if (num === 1000){
//         clearInterval(interval)
//     }
// }

// setInterval(helloWorld, 100);

// var interval = setInterval(helloWorld, 1);

// setTimeout(() => {
//     console.log('Hello World!12121');
// }, 2000)
//
//
// var date = new Date();
// console.log(date);
//
// try {
//     console.log(a);
// } catch (e) {
//     console.log(e);
// }
//
// throw new Error()

var meals = `[
    {
        "name": "Борщ",
        "grams": 500,
        "kcal": 580
    },
    {
        "name": "Блины с творогом",
        "grams": 50,
        "kcal": 112
    },
    {
        "name": "Плов",
        "grams": 100,
        "kcal": 359
    },
    {
        "name": "Печень",
        "grams": 100,
        "kcal": 205
    },
    {
        "name": "Мясной салат",
        "grams": 100,
        "kcal": 385
    },
    {
        "name": "Каша гречневая",
        "grams": 80,
        "kcal": 151
    },
    {
        "name": "Картофель отварной",
        "grams": 30,
        "kcal": 28
    },
    {
        "name": "Яичница"
    },
    {
        "name": "Яйца вареные",
        "grams": 10,
        "kcal": 12.6
    }
]`;



function checkMeals(json) {
    let array = []
    try {
        array = JSON.parse(json)
    } catch (e) {
        console.log(`Данные невозможно обработать. Причина: ${e.message}`)
    }


    for (let i = 0; i < array.length; i++) {
        try {
            array[i].kcalPer100Gram = calculateKcalPer100Grams(array[i].grams, array[i].kcal)
        } catch (error) {
            array[i].kcalPer100Gram = null
        }
        showMealInfo(array[i])
    }
}

function showMealInfo (meal) {
    console.log(`Блюдо "${meal.name}"${( meal.kcalPer100Gram ?` имеет ${meal.kcalPer100Gram} ккал на 100 грамм.` : ". Нет данных о калорийности.")}`);
}

function calculateKcalPer100Grams (grams, kcal) {
    if (!kcal || !grams) {
        throw new Error("Нет данных о граммах и/или калориях")
    }
    return Math.round(kcal / grams * 100);
}

checkMeals(meals)

alert('Все OK')
