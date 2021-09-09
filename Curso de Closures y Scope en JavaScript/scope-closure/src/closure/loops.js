//En un loop nunca ocupes var, siempre utiliza let para valores que irán cambiando dentro de la ejecución del scope.
const anotherFunction = () => {
  for (let index = 0; index < 10; index++) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  }
};
anotherFunction();
