//7) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
//Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais.

let plastico = 10
let plasticoRendem = 2
let papel = 30
let papelRendem = 3
let metal = 50
let metalRendem = 5
let papelPergunta
let plasticoPergunta
let metalPergunta
let valorPlastico
let valorMetal
let valorPapel
let valorfinal


papelPergunta = Number(prompt('quantidade de papel: '))

plasticoPergunta = Number(prompt('quantidade de plastico: '))

metalPergunta = Number(prompt('quantidade de metal: '))


valorPapel = papelPergunta * papel / papelRendem

valorPlastico = plasticoPergunta * plastico / plasticoRendem

valorMetal = metalPergunta * metal / metalRendem


valorfinal = valorPapel + valorPlastico + valorMetal


alert('valor a receber: ' + valorfinal)


