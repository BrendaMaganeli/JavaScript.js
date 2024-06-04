//3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY).
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

//Declaração de variaveis

let anoNascimentoDigitado
let anoAtualDigitado
let idadeUsuario
let meses = 12
let mesesConta
let idadeDias= 365
let diasConta
let contaSemanas
let semanas= 52


// entrada de Dados

anoNascimentoDigitado = Number(prompt(' Digite o ano de nascimento(YYYY): '))

anoAtualDigitado = Number(prompt(' Digite o ano atual(YYYY): '))

// cálculos

idadeUsuario = anoAtualDigitado - anoNascimentoDigitado 

mesesConta = idadeUsuario * meses

diasConta = idadeUsuario * idadeDias

contaSemanas =  idadeUsuario * semanas

// saída de dados

alert( idadeUsuario + 'anos ' + mesesConta + ' meses ' + contaSemanas + ' semanas ' + diasConta + ' dias ')









