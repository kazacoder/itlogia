class Person {

    #companyName = 'itlogia'
    constructor(name, lastName, position) {
        this.name = name;
        this.lastName = lastName;
        this.position = position;
    }

    showData () {
        console.log(`Сотрудник ${this.name} ${this.lastName}. ${this.getWord()}: ${this.position}. Компания: ${this.#companyName}`);
    }

    getWord () {
        return 'Должность';
    }

    get fullName () {
        return this.name + ' ' + this.lastName
    }

    static comparePersonPositions(person1, person2) {
        return person1.position === person2.position
    }
}

Person.prototype.check = () => {
    alert(2)
}

class Employee extends Person {
    getSalary () {
        return 500;
    }
}

class Freelancer extends Person {
    calculateCostPerHour () {
        return 10 * 30;
    }

    getWord () {
        return 'Специализация';
    }
}

let employees = [
    ['Алексей', 'Малев', 'Веб-разработчик'],
    ['Анастасия', 'Лунько', 'Веб-дизайнер'],
]


employees.forEach((item) => {
    let employee = new Employee(item[0], item[1], item[2]);
    employee.showData();
    console.log(employee);
})

let freelancers = [
    ['Алексей', 'Малев', 'Веб-разработчик'],
    ['Анастасия', 'Лунько', 'Веб-дизайнер'],
]


freelancers.forEach((item) => {
    let freelancer = new Freelancer(item[0], item[1], item[2]);
    freelancer.showData();
    console.log(freelancer);
    console.log(freelancer.fullName);
})

let employee1 = new Employee(employees[0][0], employees[0][1], employees[0][2]);
let employee2 = new Employee(employees[1][0], employees[1][1], employees[1][2]);
let freelancer1 = new Employee(freelancers[0][0], freelancers[0][1], freelancers[0][2]);

console.log(Person.comparePersonPositions(employee1, employee2));
console.log(Person.comparePersonPositions(employee1, freelancer1));

employee1.check()