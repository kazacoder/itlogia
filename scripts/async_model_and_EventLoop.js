// let a = 1
// setTimeout ( () => {
//     a = 2
// })
//
// console.log (a)
//
// setTimeout ( () => {
//     console.log (a)
// })

// $.ajax({
//     dataType: 'json',
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: (result) => {
//         console.log(result);
//         $.ajax({
//             dataType: 'json',
//             url: 'https://jsonplaceholder.typicode.com/todos/' + (result.id + 1),
//             success: (result) => {
//                 console.log(result);
//                 $.ajax({
//                     dataType: 'json',
//                     url: 'https://jsonplaceholder.typicode.com/todos/' + (result.id + 1),
//                     success: (result) => {
//                         console.log(result);
//
//                     }
//                 })
//             }
//         })
//
//     }
// })
//
// console.log(1)


// let result = fetch('https://jsonplaceholder.typicode.com/todos/1')
// result.then(response => {
//     const resp = response.json()
//     return resp;
// })
//     .then(json => {
//         console.log(json);
//     })

//
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         return fetch('https://jsonplaceholder.typicodes.com/todos/' + (json.id + 1))
//     })
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         return fetch('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1))
//     })
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         return fetch('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1))
//     })
//     .catch(error => console.log(error))
//
//
// function getSomeData (param) {
//
//     return  new Promise((resolve, reject) => {
//         if (param === 1) {
//             resolve('Это один!')
//         } else {
//             reject('Это не один :(')
//         }
//     })
//
// }
//
// getSomeData(2)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))


function getJsonData(url) {
    return new Promise(function (resolve, reject) {
        if (!url) {
            reject('url is required');
        }

        $.ajax({
            dataType: "json",
            url: url,
            success: (result) => {
                resolve(result);
            },
            error: () => {
                reject('Request error');
            }
        })

    })
}

getJsonData('https://jsonplaceholder.typicode.com/todos/1')
    .then(json => {
        console.log(json);
        return getJsonData('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1));
    })
    .then(json => {
        console.log(json);
        return getJsonData('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1));
    })
    .then(json => {
        console.log(json);
        return getJsonData('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1));
    })


Promise.all([
    getJsonData('https://jsonplaceholder.typicode.com/todos/1'),
    getJsonData('https://jsonplaceholder.typicode.com/todos/2'),
    getJsonData('https://jsonplaceholder.typicode.com/todos/3'),
]).then(json => {
    console.log(json);
})


async function start() {

    try {
        const json = await getJsonData('http://jsonplaceholder.typicode.com/todos/20')
        const json2 = await getJsonData('http://jsonplaceholder.typicode.com/todos/21')
        const json3 = await getJsonData('http://jsonplaceholder.typicode.com/todos/22')
        console.log('-------------');
        console.log(json);
        console.log(json2);
        console.log(json3);
        console.log('-------------');
    } catch (err) {
        console.log(err);
    }

}


start()
console.log(1)


var a = 5;
setTimeout(function timeout() {
    console.log(a);
    a = 10
})

console.log(a)

function delay(sec) {
    return new Promise(function (resolve, reject) {
            setTimeout(resolve, sec * 1000)
        }
    )
}

let timeout = 5
delay(timeout).then(() => alert(`Прошло ${timeout} секунд`))