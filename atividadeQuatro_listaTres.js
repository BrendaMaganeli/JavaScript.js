//4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let salariodigitado
let anosServico
let bonus 
let salarioComBonus


salariodigitado = Number(prompt('Salario atual: '))

anosServico = Number(prompt('Anos de serviço:(anos) '))

bonus = salariodigitado * 5 / 100
salarioComBonus = salariodigitado + bonus

if(anosServico >= 5 ){

   alert(' salario com o bônus: '+ salarioComBonus)

}else if(anosServico < 5){
    alert(' Seus anos de serviço não corresponde com as condicoes para receber o bônus' )
}