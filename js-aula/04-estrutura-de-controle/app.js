// Estrutura de controle
// if else *se / *se não

let idade = 17

if (idade > 18) {
    console.log("voce é maior de idade ");
} else {
    console.log("voce ainda é menor de idade ");
}

// for *para*

for (let indice = 0;indice < 5;indice++) {
    console.log(indice);
    
}

// while

let variavel = 10
while (variavel >= 9) {
    console.log("contagem ate o" + variavel);
    variavel++
    
}

// switch

let dia = 3
switch (dia) {
    case 1:
        console.log("segunda-feira");
        break;
    case 2:
        console.log("terça-feira");
        break;
    case 3:
        console.log("quarta-feira");
        break;
    case 4:
        console.log("quinta-feira");
        break;
    case 5:
        console.log("sexta-feira");
        break;
    default:
        break;
}