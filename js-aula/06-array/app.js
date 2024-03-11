// Array *Listas*

// O que é um Array?
// É uma estrutura de dados em js que permite armazenar em uma variavel 
// muios tipos de dados

let nome = ["Dia de aula", "3°B", "Nome1", "Nome2", "Nome3", 21, true]
console.log(nome);

//Acessar no Array um dado especifico 
console.log(nome [0]);
console.log(nome [1]);
console.log(nome [2]);
console.log(nome [3]);
console.log(nome [4]);
console.log(nome [5]);
console.log(nome [6]);

// Vamos adicionar um elemento no final do array 
//Usando o push
nome.push("Nome4")
console.log(nome);

// Remover um elemento da lista
nome.shift()
console.log(nome);

//Remover o ultimo item da lista 
nome.pop()
console.log(nome);

//Apenas para reforçar 
let variosTipos = [1, "false", true, 'verdadeiro']
console.log(variosTipos);

