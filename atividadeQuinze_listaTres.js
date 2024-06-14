//15) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes.
//O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), 
//Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). 
//Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. 
//Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. 
//Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", 
//caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" 
//e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

var percursoTotal = 140
var trechoUm = 30,trechoDois = 45,trechoTres = 30,trechoQuatro = 35
var tempoTrechoUm , tempoTrechoDois,tempoTrechoTres,tempoTrechoQuatro
var mediatrechoUm, mediatrechoDois, mediatrechoTres, mediatrechoQuatro
var mediaGeral, somaMedias, quantidadeTrechos = 4
var limiteMediaBaixa = 15, limiteMediaAlta = 18

prompt('Digite Nome da Equipe: ')

prompt('Digite o seu nome, integrante Um: ')
tempoTrechoUm = Number(prompt('Qual tempo (horas) de trecho: '))
mediatrechoUm = trechoUm / tempoTrechoUm

prompt('Digite o seu nome, integrante dois: ')
tempoTrechoDois = Number(prompt('Qual tempo (horas) de trecho: '))
mediatrechoDois = trechoDois / tempoTrechoDois

prompt ('Digite o seu nome, integrante Três')
tempoTrechoTres = Number(prompt('Qual tempo (horas) de trecho: '))
mediatrechoTres = trechoTres / tempoTrechoTres

prompt ('Digite o seu nome, integrante Quatro')
tempoTrechoQuatro = Number(prompt('Qual tempo (horas) de trecho: '))
mediatrechoQuatro = trechoQuatro / tempoTrechoQuatro

somaMedias = mediatrechoUm + mediatrechoDois + mediatrechoTres + mediatrechoQuatro
mediaGeral = somaMedias / quantidadeTrechos

if(mediaGeral < limiteMediabaixa){
    alert('media geral:' + mediaGeral + 'Desempenho pode melhorar :/')
}
if(mediaGeral >= limiteMediaBaixa && mediaGeral < limiteMediaAlta){
    alert('Media Geral: ' + mediaGeral + 'Desempenho bom, mas ainda pode melhorar!')
}
if(mediaGeral >= limiteMediaAlta){
    alert('Media Geral:' + mediaGeral + 'Desempenho excelente. Parabéns')
}
