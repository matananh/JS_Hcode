function somar(x1, x2) {
  return x1 + x2;
}

let resultado = somar(1,2);

console.log(resultado);

function calc(x1, x2, operator) {
  return eval(`${x1} ${operator} ${x2}`);
}

let resultado2 = calc(1,2, "-");

console.log(resultado2);

window.addEventListener('focus', event => {
  console.log("focus");
});

document.addEventListener('click', event => {
  console.log("click");
});

//let agora = Date.now();
let agora = new Date();

console.log(agora.toLocaleDateString("pt-br"));
//console.log(agora);

let carros = ["Palio 98", "Toro", "Uno", 10, true, new Date()];

carros.forEach(function(value, index){
  console.log(index, value);
});

console.log(carros);
console.log(carros.length);
console.log(carros[5]);