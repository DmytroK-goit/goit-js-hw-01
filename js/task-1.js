
function makeTransaction(quality, pricePerDroid) { 
    let totalPrice = quality * pricePerDroid
    return "You ordered " + quality + " droids worth " + totalPrice + " credits!"
       
}
console.log(makeTransaction(5, 3000))
console.log(makeTransaction(3, 1000))
console.log(makeTransaction(10, 500))