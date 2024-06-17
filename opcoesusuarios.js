//1) Fazer um programa onde o usuário pode acessar as seguintes opções:

alert('A) Falar com a atendente     B) Falar com o RH      C) Falar com o gerente       D) Sair')


 
let opcoes = prompt('Digite uma das opções: ')
switch(opcoes){

    case 'A':
        alert('falar com atendente.')
        break
    case 'B':
        alert('Falar Com Rh')
       break
    case 'C':
        alert('Falar com Gerente.')
        break
    case 'D':
        alert('Sair.')
        break
    default:
        alert('está opção não existe.')       
    
}