// con este ejemplo estamos accediendo a una variable local dentro de una funcion
const fruits = () => {
  var fruit = "Apple";
  console.log(fruit);
};

fruits();
//desde el entorno global no podemos acceder a una variable que fue definida en un entorno local de una funcion.
console.log(fruit);

const anotherFuncion = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // las variables declaradas con let o con const, no pueden ser declaradas nuevamente.
  //dentro del mismo ambito, como es el caso de la variabl y.
  //let y = 2;
  console.log(x);
  console.log(y);
};

anotherFuncion();
