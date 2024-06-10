//7) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18),
//na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

let alturaDigitada = Number(prompt('Digite sua altura: '))
let pesoDigitado = Number(prompt('Digite seu peso: '))
let IMC



IMC = pesoDigitado/(alturaDigitada * alturaDigitada)

if(IMC < 18){
    alert('Está abaixo do peso.' + IMC)

}else if(IMC >= 18 && IMC < 25){
    alert('peso ideal.' + IMC)

}else {
    alert('Acima do peso.' + IMC)
}