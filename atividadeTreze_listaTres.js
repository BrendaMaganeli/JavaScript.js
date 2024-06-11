//13) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
 // - "Infantil A" de 5 a 10 anos de idade
 // - "Juvenil A" de 11 a 17 anos de idade
 // - "Senior" com 18 anos de idade ou mais

 let digiteSuaIdade = prompt('Digite sua idade: ')

if(digiteSuaIdade >= 5 && digiteSuaIdade <= 10){
    alert('Sua categoria é infantil.')
}else if(digiteSuaIdade >= 11 && digiteSuaIdade <=17){
    alert('Sua categoria é juvenil.')
}else if(digiteSuaIdade >= 18){
    alert('Sua categoria é senior.')
}