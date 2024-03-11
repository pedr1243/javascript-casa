// função

// como elaborar uma função
// sempre que for criada uma funçao temos que chamar ela
function saudar() {
    console.log("Olá 3B");
}
// chamar função
saudar()

// função com parametro
function saudacao(nome) {
    console.log("Olá aluno " +nome+ "!");
}
saudacao("mateus")

//função de retorno
function somar(a,b) {
    return a + b;
}
let resultado = somar(100, 69)
console.log(resultado);

//scopo de variaveis
// dentro da função é local e fora é global
let global = "Variavel Global"
function mostrarvariavel() {
    console.log("--");
}
console.log(global);

// variavel local
function local() {
    let mensagem = "Esta é uma variavel local"
    console.log(mensagem);
}
local()

// função de tipo seta
let funcaoseta = (tipo) => {
    console.log("esta é uma função do tipo " +tipo+ "!");
}
funcaoseta("seta")

//vamos reduzir a função
let funcaoreduzida = nomes => console.log("esta é uma função reduzida do tipo " +nomes+ "!");
funcaoreduzida("reduzida")

//função de soma reduzida
let soma = (x, y) => x + y; resultadosoma = soma(100, 99);console.log(resultadosoma);

function name(params) {
    
}

let name = () => {
    
}