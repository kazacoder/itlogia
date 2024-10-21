function metersMilesConverter(amount, unit) {
    const ratio = 1609.34
    if (unit === 'метр') {
        return amount / ratio
    } else if (unit === 'миля') {
        return amount * ratio
    } else {
        return 'Неверные входные данные!'
    }
}


function greeting(name) {
    if (name) {
        return `Приветствую тебя, ${name}`
    } else {
        return 'Здравствуйте'
    }

}

function isLeapYear(year) {
    return (!(year % 400) || !!(year % 100)) && !(year % 4)
}


function findBalls(amount) {
    let ending = {
        1: '', 2: 'а', 3: 'а', 4: 'а', 5: 'ов', 6: 'ов'
    }
    return `Нашел ${amount} мячик${ending[amount]}`
}

function dateFromNumbers(day, month, year) {
    const months = [
        '', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
        'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]
    if (month > 12 || month < 1) {
        return 'Месяц указан неверно'
    } else if (day > 31 || day < 1 ) {
        return 'День указан неверно'
    }

    return `${day} ${months[month]} ${year} года`
}


let showInfo = (firstName, lastName) => {return `${firstName} ${lastName}`}

let oddOrEven = function (number) {
    if (number % 2) {
        return 'Число нечетное'
    } else {
        return 'Число четное'
    }
}


let names = ['Коля', 'Маша', 'Дима', 'Катя']

console.log(names)


