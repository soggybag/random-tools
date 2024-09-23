import { random, dieX } from '../dist/bundle.esm.js'

const d20 = dieX(20)
console.log(d20(), d20(), d20())

console.log(random(2), random(6), random(100))

