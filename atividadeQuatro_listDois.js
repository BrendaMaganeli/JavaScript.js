//4) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual,
//Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.


let mediaPonderada
let atividadeIndividual, seminario , projetoFinal
let pesoUm, pesoDois, pesoTres
let pesosConta
let notasPesoUm
let notasPesoDois
let notasPesoTres
let notaTotal
let pesoTotal

atividadeIndividual = Number(prompt('Nota da atividade individual: '))
pesoUm = Number(prompt('Peso da nota individual: '))

seminario = Number(prompt('Nota do seminário: '))
pesoDois = Number(prompt('Peso do Seminário em equipe: '))

projetoFinal = Number(prompt('Nota do Projeto Final: '))
pesoTres = Number(prompt('Peso do Projeto Final: '))

notasPesoUm = atividadeIndividual * pesoUm
notasPesoDois = seminario * pesoDois
notasPesoTres = projetoFinal * pesoTres
notaTotal = notasPesoUm + notasPesoDois + notasPesoTres
pesoTotal = pesoUm + pesoDois + pesoTres
mediaPonderada = notaTotal/pesoTotal


alert('Média: ' + mediaPonderada)