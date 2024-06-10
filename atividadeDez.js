//10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
//Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.


var mediaVidaBaleiasGroelandia = 200
var reprodução = 4
var filhosPorVez = 1
var totalfilhotes
var mediaFilhotesPorDecada
var decada = 10 
var reproducaoCada = 4

totalfilhotes = mediaVidaBaleiasGroelandia / reproducaoCada * filhosPorVez

mediaFilhotesPorDecada = decada / reproducaoCada 



alert('Total de filhotes ao longo da vida: ' + totalfilhotes)

alert('Total de filhotespor década: ' + mediaFilhotesPorDecada)