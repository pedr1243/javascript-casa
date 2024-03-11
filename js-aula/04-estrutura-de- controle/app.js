// Estrutura de controle 

// if else *se / se não*
let idade = 17

if (idade > 18) {
    console.log("Voce e maior de idade!");
} else {
    console.log("Voce ainda e menor de idade!");
}

// For *para*
for (let i = 0;i < 5;i++) {

    console.log(i);

}


// While
let variavel = 10
while (variavel >=9) {
    console.log("Contagem até o" + variavel);
    variavel++;

}


// switch *trocar*
let diaDaSemana = 3
switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;       // pausa
    case 2:
        console.log("Terça-feira");
        break;     
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quina-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    default:
        break;                  
}


let listaDechamada = 2
switch (listaDechamada) {
    case 1:
        console.log("Kaua");
        break;
    case 2:
        console.log("Pedro");
        break;
    case 3:
        console.log("Diego");
        break;
    case 4:
        console.log("Antony");
        break
    case 5:
        console.log("Matheus");
        break;
    default:
        break;
}