//Object entries deveule los valores de una matriz.

const data = {
  front: "Alej",
  back: "Rel",
};

//Tranformar este objeto en una matriz.
const entries = Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo.

const data = {
  front: "Alej",
  back: "Rel",
};

const values = Object.values(data);
console.log(values);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string = "hello";
console.log(string.padStart(7, "hi")); // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12, "hi")); // Se añade al final la palabra 'hi'

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data = {
  front: "Alej", // Puede existir
  back: "Rel",
};

const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};
const counter = async () => {
  await delay();
  console.log("one second");
  await delay();
  console.log("two seconds");
  await delay();
  console.log("three seconds");
  await delay();
  console.log("four seconds");
  await delay();
  console.log("five seconds");
};
counter();

//otro ejemplo
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("helloWorld"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

//Nos permitirá usar trycatch y trabajar los errores correctamente.

const another = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

another();
