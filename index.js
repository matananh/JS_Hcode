//Comentários de Linha.
/*
comentário de blocos
*/
console.log('Olá mundo!');

var olaMundo = "Olá Mundo!!!"; //Var - pode variar com as informações

console.log(olaMundo);
//console.log(olaMundo);
console.log(olaMundo);

let a = 10; //Parecida com var onde pode variar, Ela dentro de uma função fica somente para aquela função.
const b = 20; // Não pode alterar a informação.

console.log(a == b); //usando 2x o = é para comparar. Atribuição
console.log(a===b); // usando 3x o = é para comparar se são identicos ou se são String ou number.
console.log(a!==b); 

let cor = "verde";

if (cor === "verde") {
  console.log("Siga");
} else {
  console.log("Pare");
}

if (cor === "vermelho") {
  console.log("Pare");
} else {
  console.log("Siga");
}

if (cor === "verde") {
  console.log("Siga");
} else if ( cor === "amarelo") {
  console.log("Atenção");
} else {
  console.log("Pare");
}

let cor1 = "azul";

switch (cor1) {
  case "verde":
    console.log("siga");
    break;

  case "amarelo":
    console.log("atenção");
    break;

  case "vermelho":
    console.log("pare");
    break;

  default:
    console.log("Não está funcionando");
}