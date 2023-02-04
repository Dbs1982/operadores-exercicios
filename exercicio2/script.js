const primeiroNumero = Number (prompt ("Por favor insira um número"))
const segundoNumero = Number (prompt ("Por favor insira outro número"))

const op1 = primeiroNumero > segundoNumero
console.log (`O primeiro número é maior que o segundo? 
${op1}`)

const op2 = primeiroNumero === segundoNumero
console.log(`O primeiro número é igual ao segundo?
${op2}`)

const op3 = primeiroNumero % segundoNumero === 0
console.log(`O primeiro número é divisivel pelo segundo?
${op3}`)

const op4 = segundoNumero % primeiroNumero === 0
console.log(`O segundo número é divisível pelo primeiro?
${op4}`)