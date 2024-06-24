//2) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque,
//perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela.
//Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let DigitadoNumeroContaBancaria = prompt('Digite o número da sua conta bancária: ')
let tipoDeOperacao = prompt('\n1) Saldo \n2) Depósito \n3) Saque\ntipo de operação a ser realizada:  ')
let saldo = 4000
let valorDepositado
let depositado
let valorParaSacar
let saque

switch(true){
    case tipoDeOperacao == 'saldo':
        alert('Seu saldo é:' + saldo)
        break
    case  tipoDeOperacao == 'Depósito':
        valorDepositado = Number(prompt('digite valor que deseja depositar:'))
        depositado = saldo + valorDepositado
        alert('Saldo atualizado:' + depositado)
        break
    case tipoDeOperacao == 'Saque':
        valorParaSacar = prompt('Valor que deseja Sacar: ')
        saque = saldo - valorParaSacar 
        if(valorParaSacar > saldo){
            alert('Valor indisponível para saque.')
        }
        alert('Saldo Atualizado:'+ saque)
        break
    default:
        alert('esta opção não existe.')

}

