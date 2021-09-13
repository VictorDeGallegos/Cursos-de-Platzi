# Curso basico de JavaScript

- [Curso basico de JavaScript](#curso-basico-de-javascript)
  - [**Introduccion a JavaScript**](#introduccion-a-javascript)
    - [Que es JavaScript?](#que-es-javascript)
    - [Porque JavaScript?](#porque-javascript)
    - [Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis](#elementos-de-un-lenguaje-de-programación-variables-funciones-y-sintaxis)
    - [Variables](#variables)
    - [Funciones en Javascript](#funciones-en-javascript)
    - [¿Qué es una función declarativa y una expresiva?](#qué-es-una-función-declarativa-y-una-expresiva)
  - [**Bases de JavaScript**](#bases-de-javascript)
    - [Scope](#scope)
    - [Hoisting](#hoisting)
    - [Coercion](#coercion)
    - [Valores: Truthy y Falsy](#valores-truthy-y-falsy)
    - [Operadores: Asignación, Comparación y Aritméticos](#operadores-asignación-comparación-y-aritméticos)
  - [**Condicionales**](#condicionales)
    - [Condicionales: If, Else, else if](#condicionales-if-else-else-if)
    - [Switch](#switch)
    - [Arrays](#arrays)
  - [**Loops**](#loops)
    - [Loops: For, For...of  y while](#loops-for-forof--y-while)
  - [**Objects**](#objects)
    - [Objects](#objects-1)
  - [**Metodo de arrays**](#metodo-de-arrays)
    - [Eliminando elementos de un Array](#eliminando-elementos-de-un-array)
    - [Metodos de recorridos de arrays](#metodos-de-recorridos-de-arrays)

## **Introduccion a JavaScript**

### Que es JavaScript?

**¿Cómo nace Javascript?**

Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

**¿Qué es Javascript?**

Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.
Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

```javascript
4 + "7"; // 47
4 \* "7"; // 28
2 + true; // 3
false - 3; // -3
```

**Dinámico**
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

**¿Realmente es Javascript un lenguaje interpretado?**

Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador
Javascript es Backwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

### Porque JavaScript?

JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

- 1 Si solo estuvieras interesado en trabajar aplicaciones web tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)

- 2 Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder construir aplicaciones nativas como Android y IOS.

- 3 Puedes construir aplicaciones de escritorio con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.

- 4 También puedes trabajar en la parte del Back-end o **IOT **(Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.

### Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis

![image](https://user-images.githubusercontent.com/41756950/131735765-92bb2525-b603-4be0-8e90-122a827c2b40.png)

```javascript
40; //int

("Diego de gandra "); //string

true; //boolean
false; //boolean

null; //object
undefined; //undefined

[1, 2, 3]; //array tipo objeto

{
  nombre: "Victor"; //tipo objeto
}
```

### Variables

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
Var pokemonType = ‘electric’ entonces reinicializar es:
Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

const: sirve para declarar variables que nunca van a ser modificadas:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
const pokemonType = ‘grass’
o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
pokemonType = ‘grass’
o No es inmutable: osea no puede cambiar con objetos:

Let: Son variables que pueden ser modificadas, se pueden cambiar:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
let pokemonType = ‘grass’
o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

```javascript
var nombre = "Oscar";

//declarar
var edad;

//inicializar
edad = 30;

edad;

var elementos = ["Computadora", "Celular"];

var persona = { nombre: "Victor", edad: 21 };

persona;
```

### Funciones en Javascript

**Funciones**

Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones

- 1. Declarativas

- 2. De expresión
     Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
     Cada parámetro va separado por una coma.
     Cada instrucción que tenga la función debe terminar con ; .
     Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:

return El dato que queremos que nos dé;

```bash
Las funciones declarativas tienen la siguiente sintaxis:
```

_function Nombre de la función (Parámetros de la función) {Instrucciones}_

```bash
Un ejemplo de una función puede ser una suma:
```

_function suma (a,b) {return a+b;}_

```bash
Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:
```

_var Nombre de la variable = function(Parametros){Instrucciones}._

_Un ejemplo de una función de expresión sería:_
_var suma = function(a,b){return a+b;}_

```bash
Para ejecutar las funciones debemos usar la siguiente sintaxis:
```

_Nombre de la funcion(Parametros función);_

Si la función no tiene ningún parámetro, únicamente se escribe:

_Nombre de la función();_

### ¿Qué es una función declarativa y una expresiva?

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

**Funciones Declarativas:**

En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

```javascript
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("Diego");
```

**Expresión de función:**

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```javascript
var nombre = function(nombre){
console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

**Diferencias:**

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

## **Bases de JavaScript**

### Scope

![image](https://user-images.githubusercontent.com/41756950/131752324-7f8aff3c-49d3-4d20-8f5b-29895481cfc3.png)

Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.

Tenemos dos tipos de Scope, Scope Global y Scope Local.

**Ejemplo de lo que es un Scope Global**

```javascript
var miNombre = "Victor";

function nombre() {
  miNombre = "Alonso";
  return miNombre;
}

nombre();

console.log(miNombre);
```

Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global

```javascript
var miNombre = "Victor";

function nombre() {
  var miApellido = "Gallegos";
  return miNombre + " " + miApellido;
}

nombre();

console.log(miNombre);
console.log(miApellido);
```

**Ejemplos de como puede ayudar o crear error el tema del scope**.
*Ejemplo 1, cómo con una funcion podemos cambiar el valor de la variable global*

```javascript
var miNombre = "Victor";

function nombre(usuario) {
  miNombre = usuario;
  console.log(miNombre);
}

nombre("Hugo");

console.log(`Hola ${miNombre}, cómo estás?`);
```

*Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,*

```javascript
var miNombre = "Victor";

function nombre(usuario) {
  var miNombre = usuario;
  console.log(miNombre);
}

nombre("Hugo");

console.log(`Hola ${miNombre}, cómo estás?`);
```

*Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema.*

```javascript
function nombre(usuario) {
  var miNombre = usuario;
  console.log(miNombre);
}

nombre("Hugo");

console.log(`Hola ${miNombre}, cómo estás?`);
```

### Hoisting

El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.

Aqui un ejemplo de esto:

```javascript
saludo();

function saludo() {
  console.log("Hola " + nombre);
}

var nombre = "Aaron";
```

El output de este codigo seria el siguiente:

```bash
Hola undefined
```

Debido a que como lo hemos dicho, la variable se tomo en cuenta y se le asigno memoria, sin embargo, el compilador no la inicializo y se le dio el valor de undefined, y con ese valor se ingreso a la funcion, y ya despues de correr la funcion se le asigno el valor.

Este comportamiendo se puede entender facilmente si se comprenden estos dos puntos esenciales:

- Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.

- La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

En base al segundo punto, fue por eso que se cometio el error de usar la variable antes de inicializarla, pues sin problema el compilador le asigna memoria, pero no el valor hasta despues.

Basicamente por pasos, lo que hizo el compilador fue esto:

Tenemos el codigo asi:

```javascript
saludo();

function saludo() {
  console.log("Hola " + nombre);
}

var nombre = "Aaron";
```

- 1 El compilador toma las funciones y variables y las “sube” en el codigo, sin inicializar variables:

```javascript
var nombre;

function saludo() {
  console.log("Hola " + nombre);
}

saludo();

var nombre = "Aaron";
```

- 2 Le asigna memoria a la variable y le da el valor de undefined al suceder la asignacion de memoria

```javascript
var nombre = undefined;

function saludo() {
  console.log("Hola " + nombre);
}

saludo();

nombre = "Aaron";
```

Y como hemos visto, la variable se asigna como undefined y posteriormente su utiliza al llegar a la linea:

```bash
saludos()
```

pues ahi lo que hace es ejecutar la funcion que ya fue procesada, pero con un valor de la variable que aun no se le asigno, quedando como undefined.

- Despues de correr la funcion, le asigna el valor correcto a la variable ya declarada:

```javascript
var nombre = "Aaron";

function saludo() {
  console.log("Hola " + nombre);
}

saludo();
```

### Coercion

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

- Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
- Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

### Valores: Truthy y Falsy

**Ejemplos en los que Boolean devuelve Falso:**

```javascript
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false
```

**Ejemplos en los que Boolean devuelve verdadero:**

```javascript
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function () {}); //Cualquier función es verdadera también
```

### Operadores: Asignación, Comparación y Aritméticos

**Operador de asignacion**
= operador de asignacion

**Operadores de comparacion**
== igual que

=== estrictamente igual que

> or >= or >== mayor o mayor igual que

> < or <= or <== menor o menor igual que

> != or !== diferente que

**Operadores aritmeticos**
(+) operador suma este se utiliza para concatener dos cadenas de texto.

(-) operador resta

operador de multicacion

(/)operador de division

(%) operador de modulo

operador de potenciacion DOS ASTERISCOS

```javascript
// Binary operators, y esto es porque significa que están 2 operandos involucrado

// de operación

3 + 2;
50 - 10;
10 * 3;
20 / 2;

"Diego " + "De Granda";

// Unary operator, aquí es porque hay solo 1 operando involucrado

// Lógicos

!false; // operador not (no)

// Asignación

var a = 1;

// comparación

3 == "3"; // es igual

3 === "3"; // es estrictamente igual

5 < 3, 5 <= 3, 5 > 3, 5 >= 3; // menor, menor o igual, mayo, mayor o igual

a && b; // operador and (y), este operador genera una valicación siempe y cuando ambas variables sean verdad, "var 1 y var 2"

true || false; // operador or (o), este operador genera una validacion siempre y cuando cuaquier de as variables sea verdad, "var 1 o var 2"

/* ================================================================ */

// Operador que solo se pueden utilizar con variables

var edad = 40;

edad++; // operador de incremento por 1
edad += 2;

edad;
```

![image](https://user-images.githubusercontent.com/41756950/131759065-06e9614f-e0a0-4908-8c86-d6d703ff6c0b.png)

## **Condicionales**

### Condicionales: If, Else, else if

Esto nos ayudará para poder hacer decisiones.

var esUsuario = true;

```javascript
if (esUsuario) {
  // con el if validamos que la condición sea true
  console.log("Tiene acceso al contenido");
}
```

**Presentamos el else*

```javascript
var esUsuario = false;

if (esUsuario) {
  console.log("Tiene acceso al contenido");
} else {
  console.log("Tienes que crear una cuenta para poder acceder al contenido");
}
```

**Ejemplo de cómo haríamos una validación**

```javascript
var edad = 18;
var accion;

if (edad >= 18) {
  accion = "Puede votar";
} else {
  // call back
  accion = "No puede votar";
}

console.log(accion);
```

**Ejemplo de cómo utilizaremos el else if**

```javascript
var edad = 18;
var accion;

if (edad === 18) {
  accion = "Puede votar, será su 1ra votación";
} else if (edad > 18) {
  accion = "Puede votar";
} else {
  // call back
  accion = "Aun no puede votar";
}

console.log(accion);
```

**Operador ternario**

```javascript
var numero = 1;
var resultado;

if (numero === 1) {
  resultado = "Sí son un 1";
} else {
  resultado = "No soy un 1";
}

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí son un 1" : "No soy un 1";

console.log(resultado);
```

### Switch

**Switch es una forma diferente de validar, está depende del caso que sea verdad.**

```javascript
var numero = 1;
var resultado;
```

**Switch compara con un === por esa razón los elementos tiene que ser idénticos**

```javascript
switch (numero) {
  case 1:
    resultado = "Sí es uno";
    break;
  case 10:
    resultado = "Sí es diez";
    break;
  case 100:
    resultado = "Sí es cien";
    break;
  default:
    resultado = "No match";
}

console.log(resultado);
```

### Arrays

Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.

_.lenght_ devuelve la longitud del array.

_.push()_ agrega elementos al final de array.

_.pop()_ elimina un elemento del array.

_.unshift()_ agrega un elemento al array, pero lo agrega en primer lugar.

**.shift()**elimina el elemento que está en el inicio del array.

**.indexOf** devuelve la posición de un elemento del array.

```javascript
// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]); // Los arrays iician en "0"

// === Metodos para mutar arrays ===

// .push();

var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
console.log(frutas);

// .pop();

var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final
console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);
```

## **Loops**

### Loops: For, For...of  y while

Los bucles pueden ejecutar un bloque de código varias veces.

JavaScript admite diferentes tipos de bucles:

**for** - recorre un bloque de código varias veces

**for/in** - recorre las propiedades de un objeto

**for/of** - recorre los valores de un objeto iterable

**while** - recorre un bloque de código mientras se cumple una condición específica

**do/while** - también recorre un bloque de código mientras se cumple una condición específica

EJEMPLO:

```javascript
// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
  saludarEstudiante(estudiante);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
  var estudiante = estudiantes.shift(); // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
  saludarEstudiante(estudiante);
}
```

## **Objects**

### Objects

Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

```javascript
var objecto = {}; // Object Literal Syntax

var miAuto = {
  marca: "Toyota", // key - value
  modelo: "Corolla",
  annio: 2020,
  detallesDelAuto: function () {
    // Metodo de un objeto (una función dentro de un objeto)
    return `Auto ${this.modelo} ${this.annio}`;
  },
};

miAuto.annio;
miAuto.modelo;

miAuto.detallesDelAuto();

// Función constructora

function auto(marca, modelo, annio) {
  // Creas una función con los parametros que va a recibir,
  this.marca = marca; // Utilizamos el "this" para asignar valores a las propiedades del objeto
  this.modelo = modelo;
  this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);
```

## **Metodo de arrays**

### Eliminando elementos de un Array

Otro método que sirve para eliminar un arreglo según su índice es splice

```javascript
var articulos = ["carro", "celular", "moto", "tv", "libro"]; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']
```

también con este método se pueden modificar elementos de un arreglo según su índice

```javascript
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; /modificar moto

articulos.splice(2, 1, 'laptop'); /*se aplican los mismo parámetros, pero esta vez se le agrega el valor al que queremos modificar*/
//['carro', 'celular', 'laptop', 'tv', 'libro']
```

### Metodos de recorridos de arrays

```javascript
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];

// Metodos para recorrer arrays

// METODO Filter

/_ Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original _/;

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

console.log(articulosFiltrados);

// METODO Map

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombreArticulos);

// METODO Find
/_ De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada _/;

var encuentraArticulos = articulos.find(function (articulo) {
  return articulo.nombre === "laptop";
});

console.log(encuentraArticulos);

// METODO forEach

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// METODO Some
/_ Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación _/;

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);

// METODO Every

/_ Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false _/;

var articulosBaratos = articulos.every(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);

// METODO Reduce
/_ Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. _/;

var costoTotal = articulos.reduce(function (totalActual, articulo) {
  return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal);

// METODO Includes

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2);

console.log(incluyeNumero);
```
