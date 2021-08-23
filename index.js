// Code your solutions in this file
// const cards = ['Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!']
// const names = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(names, event) {
    let thankyouCards = []
    for (let i = 0; i < names.length; i++) {
        thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
     return thankyouCards
}

// let countDown = 10;
// while (countDown >= 0) {
//     console.log(countDown--);
// }

function countDown(isNumber) {
    while (isNumber >= 0) {
        console.log(isNumber--)
    }
}