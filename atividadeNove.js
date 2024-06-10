//9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15
//reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um
//programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

// variáveis
let cadaCincoMinutos = 10
let minutos = 5
let metroCubicoValor = 15
let taxaPessoa = 20
let quantasPessoaPasseio
let tempoPasseio
let contaTempoPaseio
let contaPessoas
let totalPagar



// entrada de dados
quantasPessoaPasseio = Number(prompt('Quantas pessoas vão no passeio de balão? '))

    if(quantasPessoaPasseio == 1 || quantasPessoaPasseio == 2 || quantasPessoaPasseio == 3 || quantasPessoaPasseio == 4){
        console.log('ok')
    
    }if(quantasPessoaPasseio >= 5){
        alert(' O máximo de pessoas por passeio é quatro! ' )}


tempoPasseio = Number(prompt('Tempo de passeio: '))


// cálculo

contaPessoas = quantasPessoaPasseio * taxaPessoa
contaTempoPaseio = tempoPasseio / minutos * cadaCincoMinutos
totalPagar = contaPessoas + contaTempoPaseio

// saída de dados

alert('total a pagar pelo passeio: ' + totalPagar)

