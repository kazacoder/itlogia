'use strict';

//
// let objects = [
//     {
//         name: 'Алесей',
//         lastName: 'Борисов',
//         age: 21,
//     },
//     {
//         name: 'Алесей',
//         lastName: 'Сдобнов',
//         age: 33,
//     },
//     {
//         name: 'Виталий',
//         lastName: 'Озонов',
//         age: 31,
//     },
// ]
//
// objects.forEach(item => {
//     item.getString = getString;
// })
//
// function getString() {
//     return this.name + ' ' + this.lastName + ', Age: ' + this.age;
// }
//
// console.log(objects[2].getString());

let obj = {
    name: 'Alex',
    lastName: 'Bor',
    age: 32,

}

function getString() {
    console.log(this.name + ' ' + this.lastName + ', Age: ' + this.age);
}

setTimeout(function () {
    getString.call(obj);
}, 1000);

setTimeout(getString.bind(obj, 1, 3), 2000);