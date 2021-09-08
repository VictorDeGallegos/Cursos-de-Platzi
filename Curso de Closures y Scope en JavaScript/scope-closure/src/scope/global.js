//*Variable global
var hello = "Hello";
let world = "Hello world";
const helloWorld = "Hello World!";
// console.log(hello);

//*Funcion para acceder a variables globales
const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

//*Ejecutar la funcion
anotherFunction();

//!Principales errores

//! Esto genera un SyntaxError debido a que la variable hlet se intenta declarar por segunda vez.
let hlet = "hlet";
let hlet = "hlet...";

//? Pero si podemos asignar un nuevo valor
let hlet = "hlet";
hlet = "hlet_update";

// Con const no podemos declarar la variable nuevamente y tampoco podemos asignar valor por segunda vez
//! error
const hconst = "hlet";
const hconst = "hlet";
//! error
const hconst = "hlet";
hconst = "hlet";
