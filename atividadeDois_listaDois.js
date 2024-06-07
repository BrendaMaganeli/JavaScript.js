//2) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, 
//nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. 
//Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, 
//incluindo todos indivíduos.


let territórioPorIndividuo = 320
let territórioCasal = 400
let femeas = 9
let machos = 5 
let quantosCasais
let areaDominadaCasal
let areadominadaTodosIndivíduos
let totalLeos
let leosSozinhos


quantosCasais = Number(prompt(' quantos casais existem dentro dos dados? ( nove femeas e cinco machos) '))

areaDominadaCasal = quantosCasais * territórioCasal
totalLeos = femeas + machos
leosSozinhos  = totalLeos - quantosCasais - quantosCasais
areadominadaTodosIndivíduos = leosSozinhos * territórioPorIndividuo + areaDominadaCasal


alert('Area dominada é: '+ areadominadaTodosIndivíduos)
