//5) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
//  - "Infantil A" de 5 a 7 anos de idade
 // - "Infantil B" de 8 a 10 anos de idade
//  - "Juvenil A" de 11 a 13 anos de idade
//  - "Juvenil B" de 14 a 17 anos de idade
//  - "Senior" com 18 anos de idade ou mais

let idadeDigitada = prompt('Digite sua Idade:')

switch(idadeDigitada){
    case idadeDigitada >=5 && idadeDigitada <=7:
        alert('categoria infantil.')
        break
    case idadeDigitada >=8 && idadeDigitada <=10:
        alert('categoria infantil.')
        break
    case idadeDigitada >= 11 && idadeDigitada <=13:
        alert('Categoria juvenil.')
        break
    case idadeDigitada >= 14 && idadeDigitada <= 17:
        alert('Categoria Juvenil.')
        break
    case idadeDigitada >= 18:
        alert('Categoria Senior.')
    default:
        alert('Sua idade não corresponde com as categorias.')
}