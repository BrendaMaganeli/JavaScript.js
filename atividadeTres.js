//Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional SWITCH / CASE. 
//O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

//1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

//A) Van Helsing (2 pontos)
//B) Castlevania (3 pontos)
//C) The Vampire Diaries (2 pontos)
//D) Blade: The Series (1 ponto)


//2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

//A) Alice no País das Maravilhas (1 ponto)
//B) O Hobbit (1 ponto)
//C) A Fantástica Fábrica de Chocolates (1 ponto)
//D) Coraline (2 pontos)


//3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

//A) The Legend of Zelda (3 pontos)
//B) Kirby (2 pontos)
//C) Metroid (3 pontos)
//D) Super Mario Bros (2 pontos)


//4) Quais dos autores citados, representam melhor o gênero de livros de terror?

//A) Stephen King (2 pontos)
//B) Edgar Allan Poe (2 pontos)
//C) H.P. Lovecraft (2 pontos)
//D) Mary Shelley (1 ponto)

let perguntaUm, perguntaDois, perguntaTres, perguntaQuatro
let notaUm, notaDois,notaTres, notaQuatro
let somaPontos

alert('Bem Vindo ao mini-quiz. São quatro perguntas e somente uma resposta por quastão (A,B,C,D)! Bom quiz :-)')

perguntaUm = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração? \nA) Van Helsing \nB) Castlevania \nC) The Vampire Diaries \nD) Blade: The Series ').toUpperCase()
perguntaDois = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas\nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates\nD) Coraline ').toUpperCase()
perguntaTres = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros').toUpperCase()
perguntaQuatro = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley ').toUpperCase()

switch(perguntaUm){
    case 'A':
        notaUm= 2 
        break
    case 'B':
        notaUm = 3
        break
    case 'C':
        notaUm = 2
        break
    case 'D':
        notaUm = 1
        break
    default:
        alert('Na primeira questão marcou uma alternativa que não existe.')
        notaUm = 0
}
switch(perguntaDois){
    case 'A':
        notaDois = 1
        break
    case 'B':
        notaDois = 1
        break
    case 'C':
        notaDois =1
        break
    case 'D':
        notaDois = 2
        break
    default:
        alert('Na segunda questão marcou uma alternativa que não existe.')
        notaDois = 0
}
switch(perguntaTres){
    case 'A':
        notaTres = 3
        break
    case 'B':
        notaTres = 2
        break
     case 'C':
        notaTres = 3
        break
    case 'D':
         notaTres = 2
        break
    default:
        alert('Na terceira questão marcou uma alternativa que não existe.')
        notaTres = 0


}
switch(perguntaQuatro){
    case 'A':
        notaQuatro = 2
        break
    case 'B':
        notaQuatro = 2
        break
     case 'C':
        notaQuatro = 2
        break
    case 'D':
         notaQuatro = 1
        break
    default:
        alert('Na quarta questão marcou uma alternativa que não existe.')
        notaQuatro = 0
}



somaPontos = notaUm + notaDois + notaTres + notaQuatro

alert('resposta Um:' + perguntaUm + '\nResposta Dois:' + perguntaDois + '\nResposta Três:' + perguntaTres + '\nResposta Quatro:' + perguntaQuatro + '\n' + 'Pontos total:' + somaPontos)

if(somaPontos == 10){
    alert('Parabéns!!')
}
