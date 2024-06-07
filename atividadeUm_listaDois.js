//1) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento.
//Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago,
//sendo que uma caixa de azulejo com 60 unidades custa R$45,50.



let ajulezosCadaMetroQuadrado = 120
let larguraPiscina
let comprimentoPiscina 
let caixaAzulejoComSessenta = 45.50
let quantidadeAjulezos
let area
let valorTotal
let caixaComsessenta = 60 


larguraPiscina = Number(prompt('Largura da piscina: '))

comprimentoPiscina = Number(prompt('comprimento da piscina: '))


area = larguraPiscina * comprimentoPiscina
quantidadeAjulezos = area * ajulezosCadaMetroQuadrado
valorTotal = quantidadeAjulezos / caixaComsessenta * caixaAzulejoComSessenta

alert('Quantidade de azulejos que devem ser comprados: ' + quantidadeAjulezos + '\nvalor total a ser pago: R$' + valorTotal)






