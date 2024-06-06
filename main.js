// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
const myHello = `Exercicio 1: \n\nHello World!`
console.log(myHello)
// alert(myHello)

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 25
let numberTwo = 25
myResult = `Exercicio 2: \n\nA soma do número ${numberOne} + ${numberTwo} = ${(
  numberOne + numberTwo
).toFixed(2)}`
console.log(myResult)
// alert(myResult)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let numberRandom = 23.5
myResult2 = `Exercicio 3: \n\n`

if (typeof numberRandom == "number") {
  myResult2 += `É um número`
} else {
  myResult2 += `Não é um número`
}
console.log(myResult2)
// alert(myResult2)

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let strString = "JavaScript is The king"
myResult3 = `Exercicio 4: \n\n`

if (typeof strString == "string") {
  myResult3 += `É uma string`
} else {
  myResult3 += `Não é uma string`
}
console.log(myResult3)
// alert(myResult3)

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let myBoolean = false
myResult4 = `Exercicio 5: \n\n`

if (typeof myBoolean == "boolean") {
  myResult4 += `É um Booleano`
} else {
  myResult4 += `Não é um Booleano`
}
console.log(myResult4)
// alert(myResult4)

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numFirst = 10
let numSecond = 22
myResult5 = `Exercicio 6: \n\nA subtração do número ${numFirst} - ${numSecond} = ${(
  numFirst - numSecond
).toFixed(2)}`
console.log(myResult5)
// alert(myResult5)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numFirst1 = 11
let numSecond1 = 33
myResult6 = `Exercicio 7: \n\nA multiplicação do número ${numFirst1} * ${numSecond1} = ${(
  numFirst1 * numSecond1
).toFixed(2)}`
console.log(myResult6)
// alert(myResult6)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numFirst2 = 400
let numSecond2 = 40
myResult7 = `Exercicio 8: \n\nA divisão do número ${numFirst2} / ${numSecond2} = ${(
  numFirst2 / numSecond2
).toFixed(2)}`
console.log(myResult7)
// alert(myResult7)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numberPar = 13
myResult8 = `Exercicio 9: \n\n`
if (numberPar % 2 == 0) {
  myResult8 += `O número ${numberPar} é um numero PAR`
} else {
  myResult8 += `O número ${numberPar} é um numero IMPAR`
}
console.log(myResult8)
// alert(myResult8)

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numberImpar = 12
myResult9 = `Exercicio 10: \n\n`
if (numberImpar % 2 == 1) {
  myResult9 += `O número ${numberImpar} é um numero IMPAR`
} else {
  myResult9 += `O número ${numberImpar} é um numero PAR`
}
console.log(myResult9)
// alert(myResult9)
