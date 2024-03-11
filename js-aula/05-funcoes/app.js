// Funções 

// Como declarar uma Função?
// Sempre que for criado uma função temos que chamar ela

function saudar() {
    console.log("Olá Pedro do 3°B");
}
//Chamar a função
saudar()

//função de parametros
function saudacao(nome) {
    console.log("Olá aluno " + nome + "!");//Imprimir
}
saudacao("Pedro")


//função de retorno
function somar(a, b) {
    return a + b;

}
let resultado = somar(200, 48)
console.log(resultado);


//Escopo de varíaveis
// Dentro da função é local / fora e global

// variavel global
let global = "Variavel Global"
function mostrarVariavel() {
    console.log("--");
}
console.log(global);

//Variavel local
function local() {
    let mensagem = "Esta é uma variavel local"
    console.log(mensagem);
}
local()

// Funçõesdo tipo seta
let funcaoSeta = (tipo) => {
    console.log("Esta é uma função do tipo " + tipo + "!");
}
funcaoSeta("Seta")


// Vamos reduzir a função
let funcaoReduzida = nomes => console.log("Esta é uma função do tipo " + nomes + "!");
funcaoReduzida("Reduzida")

//Exemplo de função somar na forma reduzida
let soma = (a, b) => a + b; resultadoSomar = soma(100, 99);console.log(resultadoSomar);


function name(params) {
    
}

let names = () =>{
    
}