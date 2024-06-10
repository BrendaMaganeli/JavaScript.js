//8) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) 
//dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let densidadeDemografica
let totalHabitantes
let quilometrosQuadrados


totalHabitantes = Number(prompt('total de habitantes: '))

quilometrosQuadrados = Number(prompt('quilometros quadrados: '))

densidadeDemografica = totalHabitantes / quilometrosQuadrados

if(densidadeDemografica >= 100){
    alert('Densidade demográfica alta!')

}else if(densidadeDemografica >= 25 && densidadeDemografica < 100){
    alert('densidade demográfica média.')

}else if(densidadeDemografica < 25){
    alert('densidade demográfica baixa.')
}
