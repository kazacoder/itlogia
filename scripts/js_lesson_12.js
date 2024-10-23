window.onload = function () {


    function wrongWay(el) {
        el.innerText += "!!!";
        el.style.backgroundColor = "red";
        el.style.color = "blue";
        el.style.fontWeight = "bold";

    }


    function showMessage(el) {
        alert("Hello World!");
        el.innerText = "Hello World!";
    }

    let buttonPressMe = document.getElementsByTagName("button")[1];

    buttonPressMe.onclick = function (event) {
        showMessage(event.target);
        // основной способ для задания поведения событию
    };


    let button3 = document.getElementsByTagName("button")[2];

    button3.onclick = function () {
        alert("OK");
        this.style.background = 'red'
    }

    let button4 = document.getElementsByTagName("button")[3];

    button4.onclick = (event) => {
        alert("btn 4 pressed");
        event.target.style.background = 'green'
    }


    let button5 = document.getElementsByTagName("button")[4];

    button5.addEventListener('click', (event) => {
        alert("btn 5 pressed");
        event.target.style.background = 'white'
    })


    let button6 = document.getElementsByTagName("button")[5];

    button6.addEventListener('click', (event) => {
        alert("btn 6 pressed");
        event.target.style.background = 'yellow'
        event.target.innerText = 'OK'

        // способ используется в основном, когда нужно добавить несколько обработчиков событий
    })

    button6.addEventListener('mousedown', (event) => {
        console.log(event.button);
        if (event.button === 2) {
            alert("btn 6 right mouse button clicked");
            event.target.style.background = 'blue'
            event.target.innerText = 'Right click'
        }


        // способ используется в основном, когда нужно добавить несколько обработчиков событий
    })


// удаление обработчика событий:

    function fn(event) {
        alert("btn 7 pressed");
        event.target.style.background = 'purple'
        event.target.innerText = 'OK'
    }

    let button7 = document.getElementsByTagName("button")[6];

    button7.addEventListener('click', fn)
    button7.removeEventListener('click', fn)


//
    let link1 = document.getElementsByTagName("a")[0]
    link1.onclick = function (e) {
        e.preventDefault();
        let start = e.target.href.search('#') + 1;
        let id = e.target.href.slice(start)
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
        console.log(id);
    }

    let button8 = document.getElementsByTagName("button")[7];
    let div = document.querySelector('.btn.btn-yellow-wrap')

    button8.addEventListener('click', (event) => {
        event.stopPropagation(); // запрет распространения события наверх
        div.style.background = 'green'
    })
    div.addEventListener('click', (event) => {
        event.target.style.background = 'yellow'
    })

    let button9 = document.getElementsByTagName("button")[8];
    let div2 = document.querySelectorAll('.btn.btn-yellow-wrap')[1]

    button9.addEventListener('click', (event) => {

    })
    div2.addEventListener('click', (event) => {
        let el = event.target;
        if (el.nodeName.toLowerCase() === "button") {
            el = el.parentElement
        }
        el.style.background = 'red';
    })

    let input = document.getElementById('input')

    input.onkeydown = function (event) {
        const regex = /[\d/+ /(/)-]/;
        let chair = event.key
        let allowKeys = ['Delete', 'Backspace', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter']
        if (!regex.test(chair) && allowKeys.indexOf(chair) === -1) {
            return false;
        }
        console.log(event.key)
    }


    input.onkeyup = function (event) {
        document.getElementById('input2').value = event.target.value;
    }

    let input2 = document.getElementById('input2')

    input2.onfocus = function (event) {
        event.target.value = '12'
    }


    input2.onblur = function (event) {
        event.target.value = event.target.value.slice(0, 3) + '-' + event.target.value.slice(3, 5) + '-' + event.target.value.slice(5);
    }

    let submit = document.getElementById('submit')

    submit.addEventListener('click', event => {
        event.preventDefault()
        document.getElementsByTagName('form')[0].submit()
    })
}