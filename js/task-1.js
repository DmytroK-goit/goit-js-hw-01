
function makeTransaction(quality, pricePerDroid) { 
    let totalPrice = quality * pricePerDroid
        console.log('"You ordered ' + quality + ' droids worth ' + totalPrice + ' credits!"');
}
makeTransaction(5, 3000)
makeTransaction(3, 1000)
makeTransaction(10, 500)