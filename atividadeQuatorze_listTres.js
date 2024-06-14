//14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose.
//Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). 
//Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. 
//Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, 
//informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

// variáveis
var nomePaciente 
var celiacos 
var intoleranteALactose
var alimentoProibido = false
var respostaIntoleranciaGluten
var respostaIntoleranciaLactose


nomePaciente = prompt('Digite seu nome: ')
celiacos = prompt('Você é Celíaco?')
intoleranteALactose = prompt('Você é intolerante á lactose?')

prompt('Digite o primeiro alimento: ')
respostaIntoleranciaGluten = prompt('Alimento um possui Gluten? ')
respostaIntoleranciaLactose = prompt('Alimento um possui lactose? ')


if( celiacos== 'SIM' &&  respostaIntoleranciaGluten =='SIM' ||
intoleranteALactose =='SIM' &&  respostaIntoleranciaLactose == 'SIM'){
      alimentoProibido == true
}

prompt('Digite o segundo alimento: ')
respostaIntoleranciaGluten = prompt('Alimento dois possui Gluten? ')
respostaIntoleranciaLactose = prompt('Alimento dois possui lactose? ')   

if( celiacos== 'SIM' && respostaIntoleranciaGluten == 'SIM' ||
 intoleranteALactose =='SIM' &&  respostaIntoleranciaLactose == 'SIM'){
      alimentoProibido == true
}

prompt('Digite o terceiro alimento: ')
respostaIntoleranciaGluten = prompt('Alimento tres possui Gluten? ')
respostaIntoleranciaLactose = prompt('Alimento tres possui lactose? ')  
            
if( celiacos== 'SIM' && respostaIntoleranciaGluten =='SIm' ||
 intoleranteALactose =='SIM' &&  respostaIntoleranciaLactose == 'SIM'){
      alimentoProibido == true
}     

if(alimentoProibido == true){
      alert('Dieta inadequada, possui alimentos que o paciente é intolerante.')
}
else if (alimentoProibido == true){
      alert('Dieta adequada.')
}