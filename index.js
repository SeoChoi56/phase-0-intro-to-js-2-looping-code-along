// Code your solutions in this file
function writeCards(array, event) {
    const cards = []
    for(let i = 0; i < array.length; i++) {
        cards[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
    }
    return cards
}

function countDown(number) {
    while (number != -1) {
        console.log(number)
        number--
    }
}