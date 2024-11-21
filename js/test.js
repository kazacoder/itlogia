let a = 0


function SendMail() {
    if (a === 3) {
        console.log('sent')
        return true;
    } else {
        a++
        console.log('not sent')
    }
    return false;
}


do {
    result = SendMail()
} while (!result)