//6) Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo e pedir ao usuário para digitar o número desejado para escolher outros lugares do sistema solar. Ao final mostrar, o peso desse objeto no lugar selecionado. Lista de locais (lua e planetas) e gravidades relativas à Terra:

//1 - 0,06 Plutão
//2 - 0,17 Lua
//3 - 0,38 Mercúrio
//4 - 0,38 Marte
//5 - 0,91 Vênus
//6 - 0,92 Urano
//7 - 1,06 Saturno
//8 - 1,19 Netuno
//9 - 2,34 Júpiter

let pesoTerra
let planetasOpcao
let pesoRelativo


pesoTerra = Number(prompt('Digite o valor de um objeto na terra(kg): '))
planetasOpcao = Number(prompt('1 - 0,06 Plutão \n2 - 0,17 Lua \n3 - 0,38 Mercúrio \n4 - 0,38 Marte \n5 - 0,91 Vênus \n6 - 0,92 Urano \n7 - 1,06 Saturno \n8 - 1,19 Netuno \n9 - 2,34 Júpiter '))

switch(planetasOpcao){
    case 1:
        pesoRelativo = pesoTerra * 0.06
        alert('O peso em plutão é:'+ pesoRelativo + 'kg')
        break
    case 2:
        pesoRelativo = pesoTerra * 0.17
        alert('O peso na Lua é:'+ pesoRelativo + 'kg')
        break
    case 3:
        pesoRelativo = pesoTerra * 0.38
        alert('O peso em mercúrio é:'+ pesoRelativo + 'kg')
        break
    case 4:
        pesoRelativo = pesoTerra * 0.38
        alert('O peso em Marte é:'+ pesoRelativo + 'kg')
        break
    case 5:
        pesoRelativo = pesoTerra * 0.91
        alert('O peso em Vênus é:'+ pesoRelativo + 'kg')
        break
    case 6:
        pesoRelativo = pesoTerra * 0.92
        alert('O peso em Urano é:'+ pesoRelativo + 'kg')
        break
    case 7:
        pesoRelativo = pesoTerra * 1.06
        alert('O peso em Saturno é:'+ pesoRelativo + 'kg')
        break
    case 8:
        pesoRelativo = pesoTerra *  1.19
        alert('O peso em Netuno é:'+ pesoRelativo + 'kg')  
        break
    case 9:
        pesoRelativo = pesoTerra * 2.34
        alert('O peso em Júpiter é:'+ pesoRelativo + 'kg')  
        break 
    default:
        alert('Número digitado inválido!')
}