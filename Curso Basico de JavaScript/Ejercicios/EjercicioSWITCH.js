var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera ");
var user = pregunta;
var options = ["piedra", "papel", "tijera"];
var pc = options[Math.floor(Math.random() * 3)];
// let numero = 'a';
//con true los casos van a pasar
switch (true) {
  case user === pc:
    console.log("es un empate");
    break;
  case pc === "piedra" && user === "papel":
    console.log("Ganaste");
    break;
  case pc === "papel" && user === "tijera":
    console.log("Ganaste");
    break;
  case pc === "tijera" && user === "piedra":
    console.log("Ganaste");
    break;
  default:
    console.log("¡Perdiste!");
}
