
let str = ''
let strBill = ''
let sum = 0
let deliveryPrice = 9000

for (const food in cartObj()) {
    let key = cartObj()[food]
    str += ` ${food} ${key.info};`
    strBill += ` ${food} ${key.info} -- ${key.price}\n`
    sum += key.price
}

console.log(`Sizning buyurtmangiz: ${str} | Yetkazib berish xizmati bilan bo'lgan narxi ${sum + deliveryPrice} (yetkazib berish haqqi ${deliveryPrice})`);
console.log(`\n(Chek)\n\n${strBill} ------------------------\n Yetkazib berish -- ${deliveryPrice}\n\n Jami to'lov -- ${sum + deliveryPrice} `);