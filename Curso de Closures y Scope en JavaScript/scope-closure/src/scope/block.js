const fruits = () => {
  if (true) {
    var fruits1 = "apple"; //var esta asignado dentro de la funcion
    let fruits2 = "banana"; // let esta asignado deltro del bloque
    const fruits3 = "kiwi"; //const esta asignado deltro del bloque
    console.log(fruits2); // let esta asignado deltro del bloque
    console.log(fruits3); // const esta asignado deltro del bloque
  }
  console.log(fruits1);
};

fruits();

var x = 1; //valor global
{
  var x = 2; //
  console.log(x);
}
console.log(x);

const anotherFunction = () => {
  for (let index = 0; index < 10; index++) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  }
};
anotherFunction();
