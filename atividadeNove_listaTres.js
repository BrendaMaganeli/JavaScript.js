///9) Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. 
//Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

let solicitarValorEmDolar
let conversaoParaReais
let cotacaoDolar

solicitarValorEmDolar = Number(prompt('Valor em dólar: '))

cotacaoDolar = Number(prompt('Cotação do dólar: '))

conversaoParaReais =  solicitarValorEmDolar * cotacaoDolar

alert('Conversao para reais: ' + conversaoParaReais)

if(cotacaoDolar >= 5){
    alert('Dólar está caro')

}else{
    alert('Dólar está barato. ')
}