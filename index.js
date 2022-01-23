//let = variável, não tem um valor fixo
//const = variável de valor fixo. não pode mudar depois de declarado
let nomeEstudante = "Maria"
console.log("nome do estudante: ", nomeEstudante)
const idadeEstudante = 14
console.log("idade do estudante: ", idadeEstudante)

//obtendo o número de estudantes na lista
let listaDeEstudantes = ["carlos", "francisco","leticia"]
let quantidade = listaDeEstudantes.length
console.log("quantidade de estudantes na lista: ", quantidade)

//percorrendo a lista com for
let indice
for(indice = 0 ; indice < quantidade ; indice ++){
    console.log("aluno: ", listaDeEstudantes[indice])
}

//percorrendo a lista com while
let inicio  = 0
while(inicio > quantidade){
    console.log("aluno: ", listaDeEstudantes[inicio])
    inicio ++
}

//percorrendo a lista com do while - executa os comandos dentro do bloco
//de instruções pelo menos uma vez
let inicio = 0
do{
    console.log("aluno: ", listaDeEstudantes[inicio])
}while(inicio < quantidade)