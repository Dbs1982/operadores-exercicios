// Exercício 3 primeira parte

/*
const opA = 5 > 20 && 5 < 2
console.log("opA", opA)

const opB = 5 === 5 || 5 === `5`
console.log("opB", opB)

const opC = !(20 > 50)
console.log("opC", opD)

const opD = !(20 > 50) || 50 > 60
console.log("opD",opD)
*/

// Exercício 3 segunda parte

//Janeiro
/*
const salariFixo = 2000
const auxiliCreche = 45.50 * 2

const salarioBeneficio = salariFixo + auxiliCreche
console.log (`O Salario Beneficio é de: ${salarioBeneficio}`)

const comissaoJan = 5784.50 * 0.1
console.log (`A comissão de Janeiro foi de: ${comissaoJan}`)

const descontoINSSJan = (salariFixo + comissaoJan) * 0.05
console.log (`O desconto no mês de Janeiro será de: ${descontoINSSJan}`)


//Fevereiro

const salariFixo = 2000
const auxiliCreche = 45.50 * 2

const salarioBeneficio = salariFixo + auxiliCreche
console.log (`O Salario Beneficio é de: ${salarioBeneficio}`)

const comissaoFev = 3418.41 * 0.1
console.log (`A comissão de Fevereiro foi de: ${comissaoFev}`)

const descontoINSSFev = (salariFixo + comissaoFev) * 0.05
console.log (`O desconto no mês de Fevereiro será de: ${descontoINSSFev}`)
/*
//Março

const salariFixo = 2000
const auxiliCreche = 45.50 * 2

const salarioBeneficio = salariFixo + auxiliCreche
console.log (`O Salario Beneficio é de: ${salarioBeneficio}`)

const comissaoMar = 4124.10 * 0.1
console.log (`A comissão de Marco foi de: ${comissaoMar}`)

const descontoINSSMar = (salariFixo + comissaoMar) * 0.05
console.log (`O desconto no mês de Marco será de: ${descontoINSSMar}`)

//Abriu

const salariFixo = 2000
const auxiliCreche = 45.50 * 2

const salarioBeneficio = salariFixo + auxiliCreche
console.log (`O Salario Beneficio é de: ${salarioBeneficio}`)

const comissaoAbr = 1874.00 * 0.1
console.log (`A comissão de Abril foi de: ${comissaoAbr}`)

const descontoINSSMar = (salariFixo + comissaoAbr) * 0.05
console.log (`O desconto no mês de Abril será de: ${descontoINSSAbr}`) 

//Maio

const salariFixo = 2000
const auxiliCreche = 45.50 * 2

const salarioBeneficio = salariFixo + auxiliCreche
console.log (`O Salario Beneficio é de: ${salarioBeneficio}`)

const comissaoMai = 7000.00 * 0.1
console.log (`A comissão de Maio foi de: ${comissaoMai}`)

const descontoINSSMai = (salariFixo + comissaoMai) * 0.05
console.log (`O desconto no mês de Maio será de: ${descontoINSSMai}`)


//Junho

const salariFixo = 2000
const auxiliCreche = 45.50 * 2

const salarioBeneficio = salariFixo + auxiliCreche
console.log (`O Salario Beneficio é de: ${salarioBeneficio}`)

const comissaoJun = 9450.00 * 0.1
console.log (`A comissão de Junho foi de: ${comissaoJun}`)

const descontoINSSJun = (salariFixo + comissaoJun) * 0.05
console.log (`O desconto no mês de Junho será de: ${descontoINSSJun}`)

// Média dos 06 meses

(((((2000.00 * 6) + ((45.50 * 2) * 6) + ((5784.50 + 3418.41 + 4124.00 + 1874.00 + 7000.00 + 9450.00) * 0.1))))) * 0.05

*/

const salarioFixo = 2000 * 6
console.log (`O salário de fulano referente a 6 meses foi de: ${salarioFixo}`)

const auxiliCreche = (45.50 * 2) * 6
console.log (`O auxilio creche dos ultimos 06 meses de fulano foi de: ${auxiliCreche}`)

const comissaoSeisMeses = ((5784.50 + 3418.41 + 4124.00 + 1874.00 + 7000.00 + 9450.00) * 0.1)
console.log (`A comissão de fulano referente a 6 meses foi de: ${comissaoSeisMeses}`)

const descontoINSSSeisMeses = (salarioFixo + auxiliCreche + comissaoSeisMeses) * 0.05
console.log (`O desconto do INSS de fulano referente a 06 meses foi de: ${descontoINSSSeisMeses}`)

const mediaSalarialSeisMeses = ((salarioFixo + auxiliCreche + comissaoSeisMeses) - (descontoINSSSeisMeses)) / 6
console.log (`Média salarial de fulano dos últimos seis meses: ${mediaSalarialSeisMeses}`)


