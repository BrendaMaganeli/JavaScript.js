//No site Amazon, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto
//deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque.
//O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. 
//Criar um sistema utilizando a estrutura condicional SWITCH / CASE, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) 
//sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para:
//índice abaixo de 5 (não ganha destaque), índice de 5 a menor que 7 (destaque na página da categoria), índice de 7 a menor que 9 (destaque em promoções),
//índice igual ou maior a 9 (destaque na página principal).

let qualidadeProduto
let custobenefício
let durabilidade
let mediaAritmetica 
let contaQualidade
let contaCustoBeneficio
let contaDurabilidade

qualidadeProduto = prompt('digite sua avaliação para a qualidade do produto(0-10):')
custobenefício = prompt('digite sua avaliação para o custo benefício(0-10):')
durabilidade = prompt('digite sua avaliação para a durabilidade(0-10):')

contaQualidade = qualidadeProduto /3
contaCustoBeneficio = custobenefício /3
contaDurabilidade = durabilidade /3
mediaAritmetica = contaQualidade + contaCustoBeneficio + contaDurabilidade

alert(mediaAritmetica.toFixed(3))

switch(true){
    case mediaAritmetica <= 5:
        alert('não ganha destaque.')
        break
    case mediaAritmetica > 5 && mediaAritmetica < 7:
        alert('destaque na página da categoria')
        break
    case mediaAritmetica >= 7 && mediaAritmetica < 9:
        alert('destaque em promoções')
        break
    case mediaAritmetica >= 9:
        alert('destaque na página principal')
        break
    default:
        alert('Está opção não é possível.')
}
