//3) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. 
//Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). 
//Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.

let velocidadeMediaRealizada
let distanciaPercorrida
let tempoTrilha


distanciaPercorrida = Number(prompt('Distancia percorrida:(km) '))

tempoTrilha = Number(prompt('tempo trilha:(minutos) '))



velocidadeMediaRealizada = distanciaPercorrida / tempoTrilha


alert('velocidade média: ' + velocidadeMediaRealizada + 'km/h')
