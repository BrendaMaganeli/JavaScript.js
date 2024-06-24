//O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema utilizando estrutura condicional IF/ELSE IF/ELSE,
//que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas. Após receber os dados,
//mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, 
//mostrar mensagem de "Não apto a concorrer".

//Vaga para Equipe de Resgate -> O candidato deve ter de 18 a 60 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
//Vaga para Equipe de Tratamento -> O candidato deve ter de 23 a 65 anos, possuir formação em "Veterinária" e residir em Florianópolis.


let nomeDigitado
let idadeDigitada
let formaçãoDigitada
let cidadeDigitada
let idadeMinimaResgate = 18
let idadeMaximaResgate = 60
let idadeMinimaTratamento = 23
let idadeMaximatratamento = 65

nomeDigitado = prompt('Digite seu nome:')
idadeDigitada = prompt('Digite sua idade:')
formaçãoDigitada = prompt('Sua formação:')
cidadeDigitada = prompt('Digite o nome da sua cidade:')

if(idadeDigitada >= idadeMinimaResgate && idadeDigitada <= idadeMaximaResgate && formaçãoDigitada == 'Biologia'|| formaçãoDigitada == 'Ecologia' && cidadeDigitada == 'Florianópolis'){
    alert('Você está apto para concorrer a vaga de Resgate!')
}
else if(idadeDigitada >= idadeMinimaTratamento && idadeDigitada <= idadeMaximatratamento && formaçãoDigitada == 'veterinário' && cidadeDigitada == 'Florianópolis'){
    alert('Você está apto a concorrer a vaga de Tratamento!')
}
else{
    alert('Você não está apto a concorrer nenhuma das vagas.')
}


