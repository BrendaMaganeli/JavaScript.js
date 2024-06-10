//13) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3
//livros e mostra na tela o total dos livros sem desconto e com desconto.

let desconto = 0.15
let livroUm , livroDois , livroTres
let livroSemDesconto
let livrosComDesconto

livroUm = Number(prompt('valor livro um: '))
livroDois = Number(prompt('valor livro dois: '))
livroTres = Number(prompt('valor livro três: '))

livroSemDesconto = livroUm + livroDois + livroTres
livrosComDesconto = livroSemDesconto - desconto

alert('Livros sem desconto: '+ livroSemDesconto)

alert('Livros com desconto: '+ livrosComDesconto)