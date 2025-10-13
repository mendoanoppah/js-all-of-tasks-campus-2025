// module1
const tambahan = require('./function/module1')

const hasilMod1 = tambahan(10, 9)
console.log(`hasil dari module1: ${hasilMod1}`)


// module2
const greet = require('./function/module2')

const hasilMod2 = greet('naufal cleariv', 99)
console.log(`hasil dari module2: ${hasilMod2}`)


// module3
const motivasi = require('./function/module3')

const hasilMod3 = motivasi(1000000000)
console.log(`hasil dari module3: ${hasilMod3}`)


// module4
const modulo = require('./function/module4')

const hasilMod4 = modulo(100)
console.log(`hasil dari module4: ${hasilMod4}`)