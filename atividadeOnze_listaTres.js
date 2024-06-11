//11) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque,
//perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. 
//Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let numeroDaContaBancaria = prompt('Número da conta bacária: ')
let tipoDeOperacao = prompt('Selecione o tipo de operação que deseja realizar:\n 1)Saldo. \n 2)Depósito.\n 3) Saque.')
let saldo = 1000
let valorDepositado
let valorTotalComDeposito
let valorDeSaque
let valorTotalComSaque

if(tipoDeOperacao == 'saldo' || tipoDeOperacao == 'Saldo'){
    alert('Saldo:' + saldo)
}else if( tipoDeOperacao == 'depósito' || tipoDeOperacao == 'Depósito'){
    valorDepositado = Number(prompt('valor que deseja Depositar:'))
    valorTotalComDeposito = saldo + valorDepositado
    alert('Saldo:' + valorTotalComDeposito)
}else if(tipoDeOperacao == 'Saque' || tipoDeOperacao == 'saque'){
    valorDeSaque = Number(prompt('Valor que deseja sacar:'))
    if(valorDeSaque > saldo){
        alert('saldo insuficiente para saque.')
    }else if(valorDeSaque < saldo){
        alert('Saque Realizado!')
    }
    valorTotalComSaque = saldo - valorDeSaque
    alert('Saldo:' + valorTotalComSaque)
}


