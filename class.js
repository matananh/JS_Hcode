let celular = function() {
  this.cor = "prata";

  this.ligar = function() {
    console.log("uma ligação");
    return "ligando";
  }
}

let objeto = new celular();

console.log(objeto.ligar());

class celular1 {
  constructor() {
    this.cor = "prata";
  }

  ligar() {
    console.log("uma ligação");
    return "ligando";
  }
}

let objeto2 = new celular1();

console.log(objeto.ligar);