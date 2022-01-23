//sistema para cadastro de eventos

//prompt para entrada de dados é uma biblioteca
//Instale-o rodando o comando npm i prompt-sync e 
//o importe para seu script adicionando const prompt = require('prompt-sync')()
//link - https://pt.stackoverflow.com/questions/513005/erro-no-javascript-prompt-n%C3%A3o-definido
const prompt = require('prompt-sync')()

//solicita data do evento
let dataAtual = 22
let inscritos = 0
console.log("Cadastro de Eventos")
console.log("\ndata atual: ", dataAtual)
let data = prompt("Digite uma data: ")
console.log("data: ", data)
if(data > dataAtual){
    console.log("data posterior à data atual")

    //solicita idade do participante/palestrante
    let idade = prompt("Digite idade: ")
    if(idade >= 18){
        console.log("permissão para continuar cadastro.")

        //controla a quantidade de inscritos - máximo de 100
        inscritos = inscritos + 1
        console.log("número de inscritos: ", inscritos)
        if(inscritos < 100){

            //lista o evento
            console.log("lista palestrantes e participantes por evento")
        }else{
            console.log("cadastro não será permitido por exceder o limite de 100 inscrições.")            
        }

    }else{
        console.log("não é permitido cadastro para menores de 18 anos")
    }

}else{
    console.log("data inválida. Digite outra novamente.")
}