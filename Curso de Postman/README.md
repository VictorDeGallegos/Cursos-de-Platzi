# Curso de Postman

- [Curso de Postman](#curso-de-postman)
  - [**Introduccion y repaso de API**](#introduccion-y-repaso-de-api)
    - [Estudiando el protocolo HTTP, verbos y status](#estudiando-el-protocolo-http-verbos-y-status)
    - [Estructura de las URLs](#estructura-de-las-urls)
  - [**POSTMAN**](#postman)
    - [Cómo ejecutar la API](#cómo-ejecutar-la-api)
    - [Peticiones a APIs usando Callbacks](#peticiones-a-apis-usando-callbacks)
    - [Múltiples Peticiones a un API con Callbacks](#múltiples-peticiones-a-un-api-con-callbacks)
    - [Implementando Promesas](#implementando-promesas)
    - [Resolver problema con Promesas](#resolver-problema-con-promesas)
    - [Conociendo Async/await](#conociendo-asyncawait)
    - [Resolver problemas con Async/await](#resolver-problemas-con-asyncawait)
  - [**Diferencias entre Callbacks, Promesas, Async/Await**](#diferencias-entre-callbacks-promesas-asyncawait)
    - [Callbacks Vs Promesas Vs Async/Await](#callbacks-vs-promesas-vs-asyncawait)
  - [**Conclusiones**](#conclusiones)
    - [Ventajas y Desventajas](#ventajas-y-desventajas)

## **Introduccion y repaso de API**

### Estudiando el protocolo HTTP, verbos y status

Un protocolo especifica reglas en la comunicacion entre dos entes, en este caso entre dos computadoras.

HTTP (Hyper Text Transfer Protocol) fue creado especificamente para la web.

*Una de las cosas que especifica el protocolo HTTP son los verbos*:

- **GET:** solicitar datos o algun recurso.

- **HEAD:** traer headers (como una peticion GET pero sin contenidos). Es util cuando vamos a utilizar APIs, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.

- **POST:** enviar datos a un recurso para la creación.

- **PUT:** reemplazar por completo un recurso.

- **PATCH**: reemplazar parcialmente un recurso.

- **DELETE:** eliminar un recurso.

*Otra de las cosas que especifica el protocolo HTTP son los codigo de estado (status codes). Sirven para describir el estado de la peticion hecha al servidor.*

- **1xx:** Indican que la peticion fue recibida y el servidor sigue trabajando en el proceso, es decir, no fue exitosa ni fue errónea, sino que esta siendo procesada aun.

- **2xx:** Indican que la peticion fue recibida y procesada correctamente.

- **3xx:** Indican que hay que tomar acciones adicionales para completar la solicitud. Por lo general estos codigos indican redireccion. Generalmente en los APIs no se usan redirecciones porque no contienen estados, es decir, toda la informacion esta contenida en una solicitud, no se guarda un estado en el servidor con una sesion por ejemplo.

- **4xx:** Indican errores del lado del cliente, por ejemplo: se hizo mal la solicitud, faltan datos, headers o cualquier otro error que pueda ocurrir.

- **5xx:** Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

*Los codigos mas comunes a la hora de interactuar con un API son:*

- **200:** Todo esta OK.

- **201:** Todo OK cuando se hizo una solicitud POST, el recurso se creo y se guardo correctamente.

- **204:** Indica que la solicitud se completo correctamente pero no devolvio informacion. Es muy comun cuando se hacen peticiones con el verbo DELETE.

- **400:** Bad Request, algo esta mal en la peticion. Se nos olvido enviar un dato o algo relacionado. Por lo general la respuesta nos especifica cuales fueron los errores a la hora de hacer la peticion.

- **401:** Unauthorized, es decir, no estamos autorizados (autenticados) a realizar la peticion.

- **403:** Forbidden, yo no tengo acceso a ese recurso aunque este autenticado.

- **404:** Not Found, no existe el recurso que se esta intentando acceder.

- **500:** Interna Server Error, es un error que retorna el servidor cuando la solicitud no pudo ser procesada. Por lo general, si no tenemos acceso al backend, no tenemos control sobre los errores 500 que retorna un API.

### Estructura de las URLs

En un API es importante tener bien estructuradas las rutas por las cuales se usarán cada uno de los endpoints que contiene. Antes de entrar de lleno a explicar el API con el que trabajaremos en este curso veamos unos conceptos muy importantes a la hora de trabajar con APIs.

**Recurso**
Es la instancia o la representación de un objeto o la representación de algo, tiene datos y operaciones asociadas a él. Por ejemplo: course, material y video son recursos que tenemos disponibles en el API con la que trabajaremos y podemos realizar operaciones sobre ellos: crear, actualizar y eliminar.

**Colecciones**
Es un conjunto de recursos, por ejemplo: courses es una colección de course.

**URL**
(Uniform Resource Locator) es la ruta en la cual puede ser ubicado un recurso y ejecutar las operaciones sobre él.

***CRUD***
Siglas que hacen referencia a las operaciones básicas que se pueden ejecutar sobre un recurso:

C: Create (crear)
R: Read (leer)
U: Update (actualizar)
D: Delete (eliminar)

**Endpoints**
Es el punto final de la comunicación con un ente, en este caso, un endpoint está asociado a una URL y a las operaciones que podemos ejecutar. Este término es muy utilizado en las APIs.

Los endpoint definen operaciones que se quieren ejecutar sobre un recurso. Por ejemplo: si queremos un conjunto de operaciones CRUD sobre Cursos podríamos crear los siguientes endpoints:

- /get-all-courses : para obtener una colección de Cursos.

- /add-new-course: para crear un nuevo recurso de Cursos.

- /delete-all-courses: para eliminar todos los Cursos.

Y así sucesivamente. Pero, esto implicaría un problema. El API puede llenarse de endpoints que ejecutan una sola operación, esto no es escalable, significa que si por ejemplo el recurso Cursos pasa a llamarse Clases habría que actualizar absolutamente todas las URLs y asegurarse de ello puede convertirse en un dolor de cabeza.

Entonces, ¿cuál es la buena práctica en este caso?

Como lo vimos en la clase pasada, el protocolo HTTP especifica una serie de verbos que indican acciones. Lo ideal es que la operación que se ejecute sobre un recurso se obtenga a través del verbo HTTP de la petición y no que esté definido en el endpoint. Por ejemplo:

- /courses: Dependiendo del verbo HTTP se ejecutará una operación en particular. Quedaría así:
  - GET /courses: trae la colección de Cursos.

  - POST /courses: crea un nuevo recurso de Cursos.

  - DELETE /courses: elimina todos los cursos.

De esta manera queda mucho más organizado un API. Pero, qué pasa si queremos traer no una colección de cursos como en los casos anteriores, sino un recurso en específico.

Por lo general cada recurso tiene un identificador único, un ID, es con esto que llamaremos a un endpoint para que nos retorne la información del recurso. Por ejemplo:

- GET /courses/2/: vemos que acá se le está pasando algo que en los endpoints anteriores no veíamos, es el número 2, ese es el identificador único, de esta manera el API sabe que tiene que buscar el curso con ID 2 y retornarlo.

Así sucesivamente con cada uno de los verbos, por ejemplo: casi nunca se hace una eliminación en masa en un API, como el ejemplo que tenemos más arriba donde se eliminan todos los cursos. Lo ideal es que se elimine un recurso individualmente y no una colección, igualmente pasa con la actualización.

**Recursos anidados**
Hay veces en las que un recurso depende de otro recurso, por ejemplo, comentarios depende de materiales; usualmente en los APIs las anidaciones se hacen hasta dos niveles, es decir:

-materials/1/comments: estos son dos niveles

-materials/1/comments/2/answers/: son tres niveles, ahí lo ideal sería entonces separar el endpoint de comentarios y ejecutar comments/2/answers/

**Nuestro API**
Ya he dado algunos spoilers sobre lo que nuestro API hace, es un clon de lo que Platzi es, una plataforma es donde tenemos Cursos, Materiales, Videos y Comentarios. El API es sencillo y es una prueba que utilizamos en este curso para explorar toda las capacidades que nos ofrece Postman para trabajar con ellos.

Una convención que se usa a la hora de documentar APIs es abstraer el endpoint de la URL del sitio al cual vamos a hacer la petición, puesto que esto al final es redundante de escribir, es decir, usualmente escribimos únicamente /api-token-auth/ en vez de [http://mistioweb.com/api-token-auth/](http://mistioweb.com/api-token-auth/).

**Los endpoints que tenemos:**

- /api-token-auth/
- /courses
- /courses/:id/
- /courses/:id/upload_badge/
- /materials/
- /materials/:id/
- /materials/:id/comments/
- /comments/
- /comments/:id/
- /comments/:id/like/
- /comments/:id/dislike/

## **POSTMAN**

### Cómo ejecutar la API

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

### Resolver problemas con Async/await

Ya conociendo Async/Await vamos a implementarlo en el desafío.

Creamos una función async con su estructura try()catch . Dentro de catch() pedimos que ejecuten tres peticiones. Para acceder a ellas colocamos la palabra reservada await y llamando nuestro fetchData indicamos dentro de sus parámetros la ruta que se debe tomar para acceder a la información que queremos imprimir en cada una de nuestras constantes.
⠀⠀
Después imprimimos los resultados. En catch() colocamos que código que queremos imprimir en caso de que no se cumpla la petición de try() . Ya por último llamamos la función anotherFunction() para ejecutarla.

## **Diferencias entre Callbacks, Promesas, Async/Await**

### Callbacks Vs Promesas Vs Async/Await

**Callbacks** --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

**Promesas** --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

**Async-Await** --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador).

## **Conclusiones**

### Ventajas y Desventajas

**Callbacks**
V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

**Promise**
V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

**Async Await**
V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores