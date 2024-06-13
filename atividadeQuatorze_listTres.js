//14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose.
//Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). 
//Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. 
//Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, 
//informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

// variáveis
var nomePaciente = prompt('Digite seu nome: ')
var celiacos = prompt('Você é Celíaco?')
var intoleranteALactose = prompt('Você é intolerante á lactose?')
var alimentoUm , alimentoDois , alimentoTres
let contemGluten
var contemLactose

//condicionais

      alimentoUm = prompt('Digite o nome do primeiro alimento:')
      contemGluten =   prompt('Contém glúten?:')
      if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM'){
      }else if(contemGluten == 'não' || contemGluten == 'Não' || contemGluten == 'NÃO'){
      }
      contemLactose = prompt('Contém Lactose?:')
      if(contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
      }else if(contemLactose == 'não' || contemLactose == 'Não' || contemLactose == 'NÃO'){
      }

      alimentoDois =  prompt('Digite o nome do segundo alimento:')
      contemGluten =   prompt('Contém glúten?:')
      if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM'){
      }else if(contemGluten == 'não' || contemGluten == 'Não' || contemGluten == 'NÃO'){
      }
      contemLactose= prompt('Contém Lactose?:')
      if(contemLactose == 'sim' || contemLactose == 'Sim' ||contemLactose == 'SIM'){
      }else if(contemLactose == 'não' || contemLactose == 'Não' || contemLactose == 'NÃO'){
      }

      alimentoTres = prompt('Digite o nome do terceiro alimento:')
      contemGluten =   prompt('Contém glúten?:')
      if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM'){
      }else if(contemGluten == 'não' || contemGluten == 'Não' || contemGluten == 'NÃO'){
      }
      contemLactose = prompt('Contém Lactose?:')
      if(contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
      }else if(contemLactose == 'não' || contemLactose == 'Não' || contemLactose == 'NÃO'){
      }


      //condicional
      if(celiacos == 'sim' || celiacos == 'Sim' || celiacos == 'SIM' && intoleranteALactose == 'sim' || intoleranteALactose == 'Sim' || intoleranteALactose == 'SIM'){
            if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM' && contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
                  alert('Dieta inadequada, contem alimentos que o paciente tem intolerancia.')
            }else if(contemGluten == 'não' || contemGluten == 'Não' || contemGluten == 'NÃO' && contemLactose == 'não' || contemLactose == 'Não' || contemLactose == 'NÃO'){
                  alert('Dieta adequada!')
            }
      }
      
      else if(celiacos == 'não' || celiacos == 'Não' || celiacos == 'NÃO' && intoleranteALactose == 'sim' || intoleranteALactose == 'Sim' || intoleranteALactose == 'SIM'){
            if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM' && contemLactose == 'não' || contemLactose == 'Não' || contemLactose == 'NÃO'){
                  alert('Dieta adequada.')
            }else if(contemGluten == 'não' || contemGluten == 'Não' || contemGluten == 'NÃO' && contemLactose == 'não' || contemLactose == 'Não' || contemLactose == 'NÃO'){
                  alert('dieta adequada.')
            }else if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM' && contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
                  alert('Dieta inadequada, contem alimentos que o paciente tem intolerancia.')
            }else if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM' && contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
                  alert('Dieta inadequada, contem alimentos que o paciente tem intolerancia.')
            }
      }
      else if(celiacos == 'sim' || celiacos == 'Sim' || celiacos == 'SIM' && intoleranteALactose == 'não' || intoleranteALactose == 'Não' || intoleranteALactose == 'NÃO'){
            if(contemGluten == 'sim'|| contemGluten == 'Sim' || contemGluten == 'SIM' && contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
                  alert('Dieta inadequada, contem alimentos que o paciente tem intolerancia.')
            }else if(contemGluten == 'sim' || contemGluten == 'Sim' || contemGluten == 'SIM' && contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
                  alert('Dieta inadequada, contem alimentos que o paciente tem intolerancia.')
            }
            else if(contemGluten == 'não' || contemGluten == 'Não' || contemGluten == 'NÃO' && contemLactose == 'sim' || contemLactose == 'Sim' || contemLactose == 'SIM'){
                  alert('Dieta adequada!')
            }else{
                  alert('Dieta adequada!')
            }
                  
      }
            
            
      
