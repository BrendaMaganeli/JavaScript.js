//4) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo.
//Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição:
//15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

let arremesso = 3 
let pontuaçãoUm , pontuaçãoDois , pontuaçãoTres
let somaPontos
let classifição


pontuaçãoUm = prompt('Pontuação Um: ')
pontuaçãoDois = prompt('Pontuação Dois: ')
pontuaçãoTres = prompt('Pontuação Três: ')

somaPontos = pontuaçãoUm + pontuaçãoDois + pontuaçãoTres

switch(true){
    case somaPontos == 15:
        alert('deus da peteca')
        break
    case somaPontos <=14 || somaPontos >=10:
        alert('petequeiro profissa')
        break
    case somaPontos <= 9  || somaPontos >= 5:
        alert('petequeiro de final de semana')
    case somaPontos <=4 || somaPontos >=1:
        alert('pseudo-petequeiro')
    case somaPontos ==0:
        alert('nunca petequeiro')
    default:
        alert('não é possivel está pontuação.') 
}