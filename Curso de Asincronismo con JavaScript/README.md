# Curso de Asincronismo con JavaScript

- [Curso de Asincronismo con JavaScript](#curso-de-asincronismo-con-javascript)
  - [**Apropiar los conceptos de asincronismo**](#apropiar-los-conceptos-de-asincronismo)
    - [Introduccion al asincronismo](#introduccion-al-asincronismo)
    - [Presentacion del reto:Consumir APIs](#presentacion-del-retoconsumir-apis)
  - [**Desarrollar soluciones**](#desarrollar-soluciones)
    - [Definicion de estructura Callback](#definicion-de-estructura-callback)
    - [Peticiones a APIs usando Callbacks](#peticiones-a-apis-usando-callbacks)
    - [Múltiples Peticiones a un API con Callbacks](#múltiples-peticiones-a-un-api-con-callbacks)
    - [Implementando Promesas](#implementando-promesas)
    - [Resolver problema con Promesas](#resolver-problema-con-promesas)
    - [Conociendo Async/await](#conociendo-asyncawait)

## **Apropiar los conceptos de asincronismo**

### Introduccion al asincronismo

El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.

Un ejemplo fácil es comparando asincronismo vs sincronismo: En lenguajes síncronos al hacer un temporizador para ejecutar una función, todo el código se pausa hasta terminar el tiempo, mientras que en Javascript u otros lenguajes asíncronos, podemos estar aprovechando ese tiempo para ejecutar otros procesos hasta que ese tiempo finaliza.

- **El memory heap:** sirve para almacenar las asignaciones de variables y funciones y estas no se almacenan de manera ordenada y hay una interacción con el Callstack.

- **El Callstack:** es la pila de tareas que ejecuta javascript de manera sincrona, osea una por una y cuando una tarea que no le corresponde como una API, este le pasa la tarea al navegador, el navegador realiza la tarea y se la pasa al Callback Queue.

- **Event Loop** es de estar observando que la pila de tareas este vacía y que el Callback Queue tenga la tarea terminada para ser enviada a la lista de tareas (Callstack) para poder ser ejecutada.

  *En pocas palabras el Event Loop es un intermediario/observador entre la pila y cola para la distribución de tareas unidireccional*.
  
![image](https://user-images.githubusercontent.com/41756950/132736999-93862331-ad58-41df-ba72-e0ea19eb7ca8.png)

### Presentacion del reto:Consumir APIs

*RESUMEN DEL PROYECTO A REALIZAR:*

<https://rickandmortyapi.com/>

1. Consumir la API y obtener cuántos personajes hay en total.
2. Obtener el nombre de cada personaje.
3. Obtener el nombre de la Dimensión a la cual pertenece cada personaje.

[Let´s start! 😄](https://github.com/VictorDeGallegos/Cursos-de-Platzi/blob/main/Curso%20de%20Asincronismo%20con%20JavaScript/asincronismo/src/callback/challenge.js)

## **Desarrollar soluciones**

### Definicion de estructura Callback

**¿Qué es un Callback?**

"Es una función que al crearla le pasamos como parámetro una segunda función.
Al momento de hacer una petición o algún llamado asíncrono ésta se ejecuta después de este llamado.
De esta forma es como JavaScript ha implementado el asincronismo"

Ejercicio callback

```javascript

//Ejemplo1 callback
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));

//Ejemplo2 callback
function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
```

### Peticiones a APIs usando Callbacks

Los estados de un request de acuerdo a la documentacion:

0: request not initialized

1: server connection established

2: request received

3: processing request

4: request finished and response is ready

```javascript
// Implementación de una API con XMLHttpRequest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    //referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    /* 
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open('GET', url_api, true);
    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function (event){
        /*
        los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
        */
        if(xhttp.readyState === 4){
            //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
            if(xhttp.status === 200){
                //Estandar de node con callbacks, primer parametro error, segundo el resultado
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    //Envio de la solicitud.
    xhttp.send();
}
```

### Múltiples Peticiones a un API con Callbacks

`Nota: Es recomendable de no realizar mas de 3 callback para no caer en un callback Hell, si tu proyecto tiene una funcion con mas de 3 callback, se recomienda hacer una revision y utilizar una mejor forma de ejecutar el codigo, para ello estan las promesas o el Async Away`

```javascript
// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
let api = 'https://rickandmortyapi.com/api/character/';

// funcion principal
function fetchData(url_api, callback){
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest();
  // abrir una conexion con el metodo, la ruta y si es asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = (event) => {
    // el state 4 es el ultimo de la peticion
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status === 200){
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // si no es 200
        let error = new Error('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}

// primero buscamos la lista de personajes
fetchData(api, (error1, data1) => {
  // si error, matamos retornando un error
  if(error1) return console.error(error1);
  // luego buscamos en la api el id de Rick
  fetchData(api + data1.results[0].id, (error2, data2) => {
    // si error, matamos retornando un error
    if(error2) return console.error(error2);
    // por ultimo la consulta a la api que contiene su dimension
    fetchData(data2.origin.url, (error3, data3) => {
      // si error, matamos retornando un error
      if(error3) return console.error(error3);
      
      // mostramos los resultados :)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
      
      // rutas de las peticiones en orden
      console.log(api);
      console.log(api + data1.results[0].id);
      console.log(data2.origin.url);
    });
  });
});
```

### Implementando Promesas

Para crear una promesa utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros, resolve y reject. El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente mientras que reject, se usa en el que caso de que no funcione.

Las promesas pueden suceder:

- Ahora
- En el futuro
- Nunca

```javascript
//Crear funcion 
const somethingWillHappen = () => {
    //retornar una promesa con dos argumentos (resolve=si se ejecuta, reject=si se rechaza)
    return new Promise((resolve, reject) => {
        //si es verdadero, vamos a devolver hey
        if (true) {
            resolve('Hey!')
        }
        //si no entonces devolvemos wooops
        else {
            reject('Woooops!')
        }
    })
}
//ejecutamos la funcion
somethingWillHappen()
    //si estamos obteniendo un resolve
    .then(response => console.log(response))
    //si obtenemos un reject
    .catch(err => console.error(err))

//Crear segunda funcion
const somethingWillHappen2 = () => {
    // retuornamos la promesa
    return new Promise((resolve, reject) => {
        // Si es verdadero, devolvemos True en 2 segundos
        if(true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } 
        // Si no entonces devolvemos el error
        // De esta forma "new Error" podemos debbugear mejor
        else {
            const error = new Error('Whoppps!')
            reject(error)
        }
    })
}
//ejecutamos la Funcion 2
somethingWillHappen2()
    //Si obtenemos un resolve
    .then(response => console.log(response))
    //si obtenemos un reject
    .catch(err => console.error(err))

//ejecutamos todas las promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
    //Si obtenemos un resolve
    .then(response => {
        console.log('Array of results', response);
    })
    //Si obtenemos un reject
    .catch(err => {
        console.error(err)
    })
```

### Resolver problema con Promesas

**fetchData.js:**
La funcion
```javascript
// modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// funcion principal
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // instanciamos la conexion
    const xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (() => {
      // comparamos el 4 porque eso indica que se completo la peticion
      if(xhttp.readyState === 4){
        // verificamos que el status este en 200, 200 es que es correcto
        xhttp.status === 200
          // si esta en 200
          ? resolve(JSON.parse(xhttp.responseText))
          // si no esta en 200
          : reject(new Error('Error ' + url_api))
      }
    });
    // por ultimo enviamos la peticion
    xhttp.send();
  });
}

// exportamos la funcion
module.exports = fetchData;
```

**challenge.js**

Las peticiones

```javascript

// importamos la funcion
const fetchData = require('./../utils/fetchData');
// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(data => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name);
    // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
    return fetchData(data.origin.url)
  })
  .then(data => {
    // vemos la dimension de rick
    console.log(data.dimension);
  })
  // si hay error
  .catch(err => {
    console.log(err);
  })
```

### Conociendo Async/await

Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navegador: “Espera a que la promesa se resuelva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto

```javascript
// Primer ejemplo------->>>>>
function suma(a, b) {
  let c = a + b;
  console.log(c);
}

function resta(a, b) {
  var c = a - b;
  console.log(c);
}

suma(5, 5);
resta(10, 5);

// Segundo ejemplo ------>>>>>
const suma = async (a, b) => {
  let c = (await a) + b;
  console.log(c);
};

function resta(a, b) {
  var c = a - b;
  console.log(c);
}

suma(5, 5);
resta(10, 5);
```
En primer ejemplo tenemos 2 funciones “normales” una suma y una resta, y nos mostrarán sus resultados en el orden en el que se lo solicitemos. En el primer ejemplo se llama a la función suma y luego a la función resta; por lo que los resultados serán 10 y 5 en ese orden.

En el segundo ejemplo tenemos las mismas 2 funciones en el mismo orden y llamadas en el mismo orden pero; la diferencia es que primero se mostrara el resultado de resta y luego el de suma (5 y 10 ).
Esto se debe a que a la función suma le dimos el super poder de async y await el cual consiste en mandar a esa función a la cola de tareas y ya cuando la pila de ejecución esté libre mostrar su resultado