// Objetos
// Como criar uma objeto emv js

let chamada = {
    nome0: "Pedro",
    idade0: 17,
    nome1: "Matheus",
    idade1:  17,  
    nome2: "Eric",
    idade2: 18,
    nome3: "Kauã",
    idade: 17,
    nome4: "Diego",
    idade4: 18,
    nome5: "Daiana",
    idade5: 17,
    nome6: "Antony",
    idade: 17,
}
// Imprimir 
console.log(chamada);
// Saber o tipo
console.log(typeof chamada);
// Chamar um dado especifico de um objeto
console.log(chamada.nome3);

//

let pessoa = {
    nome: "Pedro",
    idade: 17,
    cidade: "Caneia-SP",
    apresentar: function () {
        console.log("Olá meu nome é: ", this.nome 
        + ", eu tenho: " + this.idade 
        + " anos " 
        + ", e sou morador de: " 
        + this.cidade + "!");
    }

}
pessoa.apresentar()



