//3) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 
//1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete.
//4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4).
//Mostrar na tela o valor da compra de acordo com a opção escolhida.

let frete = 12.50
let assiantepremium = 20 
let assiantepremiumConta
let descontoPremium
let assinanteGold = 20
let assinanteGoldConta
let descontoGold
let assiantesilver = 10
let assiantesilverConta
let descontoSilver
let porcentagem = 100
let semAssinatura
let valorcompra = prompt('valor da compra:')
let categoriaAssinante = prompt('categoria de assinante: (premium, silver, gold, sem assinatura)')

switch(categoriaAssinante){
    case 'premium':
        descontoPremium = valorcompra * assiantepremium / porcentagem
        assiantepremiumConta = valorcompra - descontoPremium
        alert('Valor total:' + assiantepremiumConta)
        break
    case 'gold':
        descontoGold = valorcompra * assinanteGold / porcentagem
        assinanteGoldConta = (valorcompra - descontoGold) + frete
        alert('Valor total:'+ assiantepremiumConta)
    case 'silver':
        descontoSilver = valorcompra * assiantesilver / porcentagem
        assiantesilverConta = (valorcompra- descontoSilver) + frete
        alert('valor total:'+ assiantesilverConta)
    case 'sem assinatura':
        semAssinatura = valorcompra + frete
        alert('Valor Total:'+ semAssinatura)   
}