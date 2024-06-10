//3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

let primeiroNumero, segundoNumero


primeiroNumero = prompt('Digite o primeiro número: ')

segundoNumero = prompt('Digite o segundo número: ')


if(primeiroNumero > segundoNumero){
    alert('o primeiro número é maior e o segundo o menor ')

}else if(primeiroNumero < segundoNumero){
    alert(' o segundo número é o maior e o primeiro número é menor')

}else if(primeiroNumero == segundoNumero){
    alert('Os dois números são iguais')
}