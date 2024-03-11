// objetos
// como criar um ojeto em js

let chamada = {
  nome0: "pedro",
  idade0: 17,
  nome1: "mateus",
  idade1: 17,
  nome2: "eric",
  idade2: 18,
  nome3: "kaua",
  idade3: 17,
  nome4: "diego",
  idade4: 18,
  nome5: "daiana",
  idade5: 17,
  nome6: "antony",
  idade6: 17,
};
// imprimir
console.log(chamada);

// saber o tipo
console.log(typeof chamada);

// chamar um dado especifico do objeto
console.log(chamada.nome1);

//
let pessoa = {
  nome: "mateus",
  idade: 20,
  cidade: "cananeia-sp",
  apresentar: function () {
    console.log(
      "Olá meu nome é: "
      + this.nome + ",eu tenho: "
      + this.idade + " anos " + ", sou morador de: "
      + this.cidade + "!"
    );
  },
};
pessoa.apresentar();
