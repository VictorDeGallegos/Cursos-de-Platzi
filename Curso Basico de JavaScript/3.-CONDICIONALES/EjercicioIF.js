// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una funcion que reciba el parametro con el que vamos a jugar, y me regrese si gane o perdí.

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var resultado = function (user, pc) {
  if (user != pc) {
    if (user === op1 && pc === op3) {
      console.log("El usuario ganó con " + user);
    } else if (user === op2 && pc === op1) {
      console.log("El usuario ganó con " + user);
    } else if (user === op3 && pc === op2) {
      console.log("El usuario ganó con " + user);
    } else {
      console.log("La pc ganó con " + pc);
    }
  } else if (user === pc) {
    console.log("Empate");
  }
};
