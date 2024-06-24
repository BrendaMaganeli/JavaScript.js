//1) Criar um programa onde o usuário digite o ano de nascimento e retorne a geração a qual ele pertence:

//Sem Geração (até 1945)
//Baby Boomers (nascidos entre 1946 e 1964)
//Geração X (1965-1980)
//Geração Y ou Millennials (1981-1996)
//Geração Z (1997-2010)
//Geração Alfa (a partir de 2011)

let digiteSeuAnoNascimento
let semGeracao = 1945
let babyBoomersDe =1946
let babyBoomersAte = 1964
let geracaoXDe = 1965
let geracaoXAte = 1980
let geracaoYDe = 1981
let geracaoYAte = 1996
let geracaoZDe = 1997
let geracaoZAte = 2010
let geraçãoAlfa = 2011


digiteSeuAnoNascimento = prompt('Digite o ano do seu nascimento: ')

switch(true){

    case digiteSeuAnoNascimento <= semGeracao:
        alert('Sem geração.')
        break
    case digiteSeuAnoNascimento >= babyBoomersDe && digiteSeuAnoNascimento <= babyBoomersAte:
        alert('Baby Boomers.')
        break
    case digiteSeuAnoNascimento >= geracaoXDe && digiteSeuAnoNascimento <= geracaoXAte:
        alert('Geração X.')
        break
    case digiteSeuAnoNascimento >= geracaoYDe && digiteSeuAnoNascimento <= geracaoYAte:
        alert('Geração Y.')
        break
    case digiteSeuAnoNascimento >= geracaoZDe && digiteSeuAnoNascimento <= geracaoZAte:
        alert('Geração Z.')
        break
    case digiteSeuAnoNascimento >=geraçãoAlfa:
        alert('Geração Alfa.')
        break
    default:
        alert('Não existe este ano.')

}