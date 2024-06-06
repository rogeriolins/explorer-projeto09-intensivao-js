// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
const myHello = `Exercicio 1: \n\nHello World!`
console.log(myHello)
alert(myHello)

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 25
let numberTwo = 25
myResult = `Exercicio 2: \n\nA soma do número ${numberOne} + ${numberTwo} = ${(
  numberOne + numberTwo
).toFixed(2)}`
console.log(myResult)
alert(myResult)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let numberRandom = 23.5
myResult2 = `Exercicio 3: \n\n`
console.log(typeof numberRandom)
if (typeof numberRandom == Number) {
  myResult2 += `É um número`
} else {
  myResult2 += `Não é um número`
}

//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
