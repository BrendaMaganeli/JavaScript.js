//5) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, 
//o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual 
//que cada um representa em relação ao total de eleitores. 

let numeroVotosCandidatoX = Number(prompt('Numeros de votos no candidato X ?'))
let numeroVotosCandidatoY  = Number(prompt('numero de votos no canditato Y ?'))
let votosBranco = Number(prompt('numero de votos em branco ?'))
let votosNulos = Number(prompt('numero de votos nulos? '))
let porcentagemCandidatoX
let porcentagemCandidatoY
let porcentagemVotosBrancos
let porcentagemVotosNulos
const porcentagem = 100


var numeroTotalEleitores = numeroVotosCandidatoX + numeroVotosCandidatoY + votosBranco + votosNulos

porcentagemCandidatoX = numeroVotosCandidatoX * porcentagem / numeroTotalEleitores

porcentagemCandidatoY = numeroVotosCandidatoY * porcentagem / numeroTotalEleitores

porcentagemVotosBrancos = votosBranco * porcentagem  / numeroTotalEleitores

porcentagemVotosNulos = votosNulos * porcentagem / numeroTotalEleitores


alert('percentual de votos para candidato X: '+ porcentagemCandidatoX)

alert('percentual de votos para candidato Y: '+ porcentagemCandidatoY)

alert('percentual de votos para votos em branco: '+ porcentagemVotosBrancos)

alert('percentual de votos para votos nulo: '+ porcentagemVotosNulos)





