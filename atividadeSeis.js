//6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

var IMC
var pesoDigitado
var alturaDigitada


pesoDigitado = Number(prompt('Digite seu peso atual: '))

alturaDigitada = Number(prompt('Digite sua altura: '))

IMC = pesoDigitado / (alturaDigitada * alturaDigitada)

alert('Seu IMC é: ' + IMC)