const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld();
console.log(hello);

//Establecer una variable global
var scope = "i am global";

//Ambito lexico
const functionScope = () => {
  var scope = "i am just a locall";
  const func = () => {
    return scope;
  };
  console.log(func());
};
functionScope();

//* Ejemplo

// La forma en la que yo entiendo el lexical scope es de adentro hacia afuera. Es decir que JS siempre busca las variables en el bloque más interno desde donde haya sido llamada. Por ejemplo:

const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3"; //Esto saldra en concola
      console.log(scope);
    };
    func3();
  };
  func2();
};
func1();

// Entonces si eliminamos la linea 32 y dejamos
const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2"; //Esto saldra en consola
    const func3 = () => {
      console.log(scope);
    };
    func3();
  };
  func2();
};
func1();

// lo mismo seria si eliminamos la linea 44 Finalmente tenemos:

const scope = "I'm global"; //Esto sale en consola
const func1 = () => {
  const func2 = () => {
    const func3 = () => {
      console.log(scope);
    };
    func3();
  };
  func2();
};
func1();

// !Pero este coportamiento siempre es exclusivamente de adentro hacia afuera, y por tanto si intentamos algo como esto:

const func1 = () => {
  const func2 = () => {
    const func3 = () => {
      const scope = "I'm local 3";
    };
    console.log(scope);
    func3();
  };
  func2();
};
func1();
