//1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], 
//com [idade] anos, [nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, 
//Florianópolis

let nome
let idade
let nacionalidade
let endereço

alert('Digite seus dados: ')


nome=prompt('Digite sua nome:')
idade=prompt('Digite sua idade: ')
nacionalidade=prompt(' Qual a sua nacionalidade: ')
endereço=prompt('Digite seu endereço: ')

alert('cliente '+ nome +',com'+ idade+','+nacionalidade+' ,reside no endereço '+endereço)