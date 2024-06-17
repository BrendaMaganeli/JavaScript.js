//2) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. 
//Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let meses

meses = prompt('Digite o mês que deseja saber a quantidade de dias:')
switch(meses){
    case '1':
        alert('Janheiro tem 31 dias')
        break
    case '2':
        alert('Fevereiro tem 28 dias')
        break
    case '3':
        alert('Março tem 31 dias')  
        break  
    case '4':
        alert('Abril tem 30 dias')  
        break  
    case '5':
        alert('maio tem 30 dias')
        break
    case '6':
        alert('Junho tem 31 dias')
        break
    case '7':
        alert('Julho tem 30 dias')
        break
    case '8':
        alert('Agosto tem 31 dias')
        break
    case '9':
        alert('Stembro tem 30 dias')
        break
    case '10':
        alert('Outubro tem 31 dias')
        break
    case '11':
        alert('Novembro tem 30 dias')
        break
    case '12':
        alert('Dezembro tem 31 dias')
        break
    default:
        alert('esse mês não existe, tente novamente.')
       
}