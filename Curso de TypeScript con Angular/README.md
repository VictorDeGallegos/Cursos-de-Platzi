# Curso de TypeScript con Angular

- [Curso de TypeScript con Angular](#curso-de-typescript-con-angular)
  - [**Fundamentos de TypeScript**](#fundamentos-de-typescript)
    - [Que es TypeScript?](#que-es-typescript)
    - [Types, Type Inference y Type keyword](#types-type-inference-y-type-keyword)
    - [Clases](#clases)
    - [Interfaces](#interfaces)
    - [Shapes](#shapes)
    - [Union types](#union-types)
    - [Intersection types](#intersection-types)
    - [Function type](#function-type)
    - [Decorators: aplicación en métodos](#decorators-aplicación-en-métodos)
    - [Decorators: aplicación en clases](#decorators-aplicación-en-clases)
    - [Decorators: aplicación en propiedades](#decorators-aplicación-en-propiedades)
    - [Decorators: aplicación en parámetros](#decorators-aplicación-en-parámetros)
  - [**Preparando el entorno para nuestro proyecto**](#preparando-el-entorno-para-nuestro-proyecto)
    - [¿Qué es Angular?](#qué-es-angular)
    - [Creando nuestro proyecto con Angular CLI](#creando-nuestro-proyecto-con-angular-cli)
    - [¿Qué es Firebase? Implementando Firebase en nuestro proyecto](#qué-es-firebase-implementando-firebase-en-nuestro-proyecto)
    - [Diferencias entre Angular, React, Vue](#diferencias-entre-angular-react-vue)
  - [**Desarrollo de la aplicacion**](#desarrollo-de-la-aplicacion)
    - [Creacion de las interfaces](#creacion-de-las-interfaces)

## **Fundamentos de TypeScript**

### Que es TypeScript?

![image](https://user-images.githubusercontent.com/41756950/133322230-b7baeca6-dcad-4cef-b67e-9bca1329a30e.png)

✔ JavaScript es un lenguaje no tipado, es decir, se tiene la libertad de poder asignar cualquier tipo de valor a nuestras variables.

✔ TypeScript es una librería que extiende la funcionalidad de JavaScript Vanilla mediante la inclusión de types dentro de nuestro código.

### Types, Type Inference y Type keyword

**Declaración de Variables en TypeScript**
’let’ y ‘const’ son tipos de declaradores de variables similares a var, que permiten evitar algunos de los “problemas” de JavaScript.
const, por ejemplo evita la resignación a una variable.

```typescript
const numLivesForCat = 9; // no se puede re asignar
```

let, impide el block-scoping
Las variables ‘let’ no son visibles fuera de su bloque o bucle for más cercano.

```typescript
let hello = "Hello!"; // declaración normal
// block scoping test
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global
  console.log(a);  // 4
  console.log(b);  // 1
} 
console.log(a); // 5
console.log(b); // 1
```

**Tipos de Datos en TypeScript**
Boolean - El tipo de dato más básico, puede ser true o false.

```typescript
let isDone: boolean = false;
```

Number - Los valores numéricos reciben el tipo de dato ‘number’.
También soporta decimal y hexadecimal. Binario y Octal a partir de ECMAScript 2015.

```typescript
let decimal: number = 67;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

String - Usamos ‘string’ para referirnos a estos tipos de datos textuales.
Podemos usar comillas dobles (") o simples (’) para rodear la cadena. Tambien los `` para mezclar las cadenas con otras variables.

```typescript
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hola!, mi nombre es ${fullName}`;
```

Array - Los tipos de dato Array pueden ser escritos de dos maneras.

- 1 - Colocamos el tipo de datos seguido de un [], señalamos que sera un array de ese tipo

```typescript
let list: number[] = [1, 2, 3];
```

- 2 - Usamos un generic, Array<elemType>

```typescript
let list: Array<number> = [1, 2, 3];
```

Any - Cuando aun no sabemos que tipo de dato vamos a utilizar.

```typescript
let notSure: any = 4;
// ...las reasignamos...
notSure = "quizas es un string";
notSure = false; // ahora es un boolean
// si la usamos en un Array podemos mezclar los tipos de datos
let list: any[] = [1, true, "free"];
```

Void - Lo opuesto a any
Visto comunmente en las functions y quiere decir que no retorna ningun valor.

```typescript
function warnUser(): void {
    console.log("Este es mi mensaje");
}
```

**TYPE INFERENCE**
Lo mismo sucede con los functions, se le asigna un tipo a los parametros y a la misma function

```typescript
const num1 = 1;
const num2 = 2;

function suma(num1: number, num2: number){
    return num1 + num2;
}

function sumaJavascriptVanilla() {
    return num1 + num2;
}
```

**TYPE KEYWORD**
Un type es un tipo de dato que puede ser utilizado para realizar nuestros propios tipo de dato.

Sintaxis

```typescript
type nombre = tipoDato;
```

Ejemplo:

```typescript
type dni = string
let dniEmpleado: dni = “123243”;
```

### Clases

**Sintaxis General de una clase**

```typescript
class Nombre{
  //atributos
  nivelAcceso nombre: tipoDato;

  //constructor(nombreAtributo: tipoDato){
    this.nombreAtributo =  nombre
  }

  //metodos o comportamientos
  getAtributo(){
   return this.nombreAtributo;
  }

  setAtributo(nombre: tipoDato){
   this.nombreAtributo = nombre;
  }
}
```

Con la palabra reservada extends heredamos una clase a otra.
Con la palabra reservada super accedemos a los atributos y métodos de la clase padre para utilizarlos en la clase hija

### Interfaces

Una interfaz es un tipo abstracto que sirve como contrato para la estructura de un objeto y al igual que las clases puede ser utilizada como un tipo de dato. Para declarar una interfaz en TypeScript utilizamos la palabra clave interface.

Dentro de las interfaces en TypeScript podemos manejar propiedades opcionales añadiendo el signo de pregunta ‘?’ al final del nombre de la propiedad.

**Ejemplo**

```typescript
interface Materia {
  nombre: string,
  calificacion: number,
  profesor: string,
  descripcion?: string
}

const materia: Materia = {
  nombre: 'Algebra',
  calificacion: 18,
  profesor: "Hugo"
}
```

### Shapes

Shapes es una forma de comparar dos clases y saber si tienen las mimas propiedades o si una exíste una relacion hijo-padre entre ellas. Por ejemplo, un pediatra es un médico mas no necesariamente un médico debe ser un pediatra

```typescript
class people {
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(edad: number,altura: number, dni:string){
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
}

class alumno extends people {
    private matricula : string;

    constructor(edad: number,altura: number, dni:string, matricula: string){
        super(edad,altura, dni);
        this.matricula = matricula;
    }
}
let People: people= new people(27,1.43,'343457865');
let Alumno: alumno= new alumno(27,1.43,'343457865', '123');

// shapes es la funcionalidad propia de tupescript

People = Alumno; // toda people no es un alumno ✔ 
Alumno = People ; // todo alumno es una persona ❌ 
```

### Union types

 Habrá ocasiones en las que necesitemos asignar variables con más de un tipo, para evitar el uso de any debemos usar union types. Utilizando el signo ‘|’ podemos indicarle a TypeScript que utilice uno u otro tipo de dato, por ejemplo:

 ```typescript
type SumaParameter = string | number;
type SumaReturnType = string | number;

function Suma(num1: SumaParameter, num2: SumaParameter): SumaReturnType {
    return Number(num1) + Number(num2);
}

//Con respecto a las interfaces

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2;
const interfacemix: InterfaceMix = {
    prop1: 2,
    prop2: 3
}
 ```

### Intersection types

Mientras que el union type nos es útil para variables con más de un tipo de dato, intersection types nos permite combinar varios tipos de dato utilizando el signo ‘&’.

```typescript
//Intersection types y su diferencia de Union types.
interface Interface1 {
    prop1: number;
}
interface Interface2 {
    prop2: number;
    // prop3: number; Si se incluyera ésta propiedad, nuevamente daría error.
}
type InterfaceMix = Interface1 & Interface2;
const interfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 2,
    //prop3: 2,
}
// La principal diferente entre la union y la intersección es que la unión es un valor "o" el otro, en cambio
// la intersección nos indica que un valor no puede estar indistinto del otro.
// Se puede utilizar en cualquier cantidad de interfaces, agregando si se desea una Interface3 para ver que si
// procede el código.
// Lo importante es que TypeScript nos indica cuando se da éste tipo de error, y así poder corregirlo y llevar
// una mejor gestión del código.
```

### Function type

Un function type representa la estructura que tendrá la función a la cual se aplica el tipo y únicamente funciona para tipos de funciones.

Los Functions types permiten definir la estructura de nuestra función, como por ejemplo los argumentos y retornos de la mísma.

ejemplo

```typescript
type AreaRectangulo = (altura: number, base: number) => number;

const getAreaRectangulo: AreaRectangulo = (altura: number, base: number ): number => {
    return altura * base;
}
```

### Decorators: aplicación en métodos

Los decorators son muy utilizados en Angular, estos son una declaración que tiene TypeScript para poder extender la funcionalidad de distintos elementos ya sea una clase, un parámetro, una propiedad o una función.

En una función decorator, el parámetro target hace referencia al objeto que posee el decorador y el parámetro propertyKey, o key, hace referencia al elemento que extendemos.

```typescript
function log(target, key) {
  console.log(key + 'se ha llamado');
}

class Persona3 {
  private name: string;

  constructor(name:string) {
    this.name = name;
  }

  @log
  sayMyName() {
    console.log(this.name);
  }
}

const persona3: Persona3 = new Persona3('Alan');
persona3.sayMyName() // 'Alan' // 'sayMyName se ha llamado'
```

Podemos agregar al directorio donde estemos trabajando. el archivo tsconfig.json y habilitar la opción para decorators

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "experimentalDecorators": true
    }
}
```

### Decorators: aplicación en clases

```typescript
function init(target) {
  return class extends target {
    nombre = 'Alan';
    apellido: 'Buscaglia';

    sayMyName() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
}

@init
class P {
  constructor () {}

  sayMyName() {}
}

const p: P = new P();
console.log(p.sayMyName()); // Alan Buscaglia
```

### Decorators: aplicación en propiedades

```typescript
// vamos a sobrescribir los setters y getters por nuevas propiedades
function logProperty(target:any, key:any) {
  let _val:any = target[key];
  const getter = () => {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  }
  const setter = (newValue:any) => {
    console.log(`Set: ${newValue} => ${key}`);
    _val = newValue;
  }
  
  const objectProperty = {
    get: getter,
    set: setter
  }
  
  // Sobre-escritura de las propiedades 
  Object.defineProperty(target, key, objectProperty);
}

class Persona {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Persona('Alan');
p.name = 'Platzi'; // Set: name => 'Platzi'
const myName = p.name; // Get: name => 'Platzi'
```

### Decorators: aplicación en parámetros

```typescript
function logParameter(target:any, propertyName:any, index:any) {
  // identificamos cada parametro que tenemos
  const metadataKey = `log_${propertyName}_parameters`;
  // checkeamos si es o no un arreglo
  if (Array.isArray(target[metadataKey])) {
    // agregamos nuestro index al array
    target[metadataKey].push(index);
  } else {
    // creamos un arreglo con index como único parametro
    target[metadataKey] = [index];
  }
  console.log(target[metadataKey]);
}

class P {
  greet(message: string, @logParameter additional:string): string {
    return message;
  }
}

const p = new P();
p.greet('Hola','Enrique');
```

## **Preparando el entorno para nuestro proyecto**

### ¿Qué es Angular?

Desarrollado por Google, Angular es más que un **framework**, es una plataforma que nos da la posibilidad de desarrollar aplicaciones web como aplicaciones mobile. Además, es un framework de estructura que nos va a brindar funcionalidades para extender el template de nuestra aplicación.

Algunas ventajas que trae Angular son:

- Rapidez.
- Mayor estructura y control del proyecto.
- SPA
- Gran comunidad que ayuda con cualquier problema.

### Creando nuestro proyecto con Angular CLI

Para preparar nuestro entorno de trabajo lo primero que debemos hacer es instalar *Node.js*. Una vez tenemos instalado Node en nuestro computador, debemos instalar el CLI de Angular mediante el comando:

```bash
npm install -g @angular/cli
```

Ya que tenemos listo el CLI, creamos nuestro proyecto con el siguiente comando y contestando las preguntas de configuración que nos haga:

```bash
ng new typescript-platzi
```

PARA INICIAR EL SERVIDOR PONEMOS EN CONSOLA

```bash
ng serve
```

### ¿Qué es Firebase? Implementando Firebase en nuestro proyecto

Firebase es un SaaS de Google que nos ayuda en la creación de aplicaciones web y móvil. Firebase nos brinda una opción sencilla y rápida para nuestra base de datos y backend.

Dentro de Firebase podemos tener bases de datos en tiempo real o realtime databases. Podemos usar Firebase independientemente del lenguaje o framework en el que estemos trabajando.

Para añadir Firebase a nuestro proyecto debemos instalar algunas dependencias con el comando:

**Antes:**

```bash
npm i -s firebase angularfire2
```

**Ahora:**

```bash
ng add @angular/fire@next
```

**Luego pide actualizar angular.json.**

```bash
sudo npm update
```

**Luego actualizar**

```bash
ng update
```
Y en app.module.ts

```ts
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  ```

### Diferencias entre Angular, React, Vue

Cuando vamos iniciando en el mundo del front-end o simplemente estamos creando un nuevo proyecto nos encontraremos con una importante pregunta:

*¿Qué framework debo utilizar?*

Lo primero que te llega a la mente va a ser los tres frameworks más populares:

**Angular**
Si tienes un proyecto complejo y robusto Angular es tu mejor opción ya que al estar pensado en trabajar con TypeScript ofrece una gran robustez, estructura y control.

Angular CLI es el CLI más completo para trabajar.

Desventajas:

- Al ser un framework tan robusto su curva de aprendizaje es muy elevada y compleja.
- Tendremos código repetitivo que genera archivos muy grandes.

**React**

Ventajas:

- Creado por Facebook, ofrece una gran flexibilidad para trabajar basado en componentes.
- Cuenta con una gran comunidad, por lo tanto muchos problemas con los que te encuentres ya habrán sido resueltos por alguien.

Desventajas:

- Hay muchas formas de resolver un mismo problema, por lo tanto hay miles de librerías y tal vez pocas sean la solución correcta.

**Vue**

También está basado en componentes, cuenta con una gran usabilidad y una curva de aprendizaje muy fácil.

Su mayor desventaja es que al ser muy nuevo, su comunidad es muy nueva y es probable que los problemas con los que te encuentres tendrás que crear tu propia solución.

Ningún framework es mejor que el otro, cada uno cumple una funcionalidad distinta y cuenta con sus propias ventajas y desventajas.

## **Desarrollo de la aplicacion**

### Creacion de las interfaces

Tip: Para tener una buena estructura de nuestro proyecto es recomendable crear una interfaz por cada entidad que tenga el proyecto!

Para esto creamos una carpeta **interfaces** dentro de la carpeta app.

**Enums**

Las enumeraciones nos permiten definir un conjunto de constantes con nombre. El uso de enumeraciones puede facilitar la documentación de la intención o crear un conjunto de casos distintos. TypeScript proporciona enumeraciones numéricas y basadas en cadenas.

Enumeraciones numéricas
Primero comenzaremos con enumeraciones numéricas, que probablemente sean más familiares si viene de otros idiomas. Se puede definir una enumeración usando la enum palabra clave.

Ejemplo

```ts
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

Arriba, tenemos una enumeración numérica donde Up se inicializa con 1. Todos los siguientes miembros se incrementan automáticamente a partir de ese punto. En otras palabras, Direction.Up tiene el valor 1, Downtiene 2, Left tiene 3 y Right tiene 4.

Si quisiéramos, podríamos dejar los inicializadores por completo:

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
```

Aquí, Up tendría el valor 0, Down tendría 1, etc. Este comportamiento de incremento automático es útil para los casos en los que no nos interesen los valores de los miembros, pero sí nos importa que cada valor sea distinto de otros valores en la misma enumeración.