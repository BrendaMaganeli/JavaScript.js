//8) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp.
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou.
//Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, 
//digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

var chopp = 300
var pessoas = 45
var mediaLitrosPorPessoa
var quantidadeDesperdicada
var quantidadeSobrou



quantidadeDesperdicada = Number(prompt(' quantidade de litros desperdiçados: '))

quantidadeSobrou = Number(prompt ('quantidade de litros que sobraram: '))



mediaLitrosPorPessoa = chopp / pessoas -(quantidadeDesperdicada + quantidadeSobrou)

alert('Media de litros bebido por pessoas: '+ mediaLitrosPorPessoa)

