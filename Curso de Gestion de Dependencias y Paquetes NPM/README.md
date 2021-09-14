# Curso de Gestion de Dependencias y Paquetes NPM

- [Curso de Gestion de Dependencias y Paquetes NPM](#curso-de-gestion-de-dependencias-y-paquetes-npm)
  - [**Introduccion a NPM**](#introduccion-a-npm)
    - [Acerca de NPM, paquetes y módulos](#acerca-de-npm-paquetes-y-módulos)
  - [**Configuracion**](#configuracion)
    - [Iniciar un proyecto NPM](#iniciar-un-proyecto-npm)
    - [Instalación de dependencias](#instalación-de-dependencias)
    - [Instalación de dependencias con FORCE](#instalación-de-dependencias-con-force)
    - [Actualizar y eliminar paquetes](#actualizar-y-eliminar-paquetes)
    - [Package lock y el uso los símbolos ^ y ~](#package-lock-y-el-uso-los-símbolos--y-)
    - [Ejecutar Tareas](#ejecutar-tareas)
    - [Solucion de Errores](#solucion-de-errores)
    - [Seguridad](#seguridad)
  - [**Publicar un paquete**](#publicar-un-paquete)
    - [Crear un paquete para NPM](#crear-un-paquete-para-npm)
    - [Publicar un paquete en NPM](#publicar-un-paquete-en-npm)
    - [Paquetes privados](#paquetes-privados)

## **Introduccion a NPM**

### Acerca de NPM, paquetes y módulos

**¿Qué es NPM (node package manager) ?**

Es un gestor de paquetes, el más popular que tiene JavaScript, donde encontrarás una gran cantidad de recursos para poder implementar en tus proyectos. También vas a poder crear tus propios paquetes y compartirlos con toda la comunidad.

## **Configuracion**

### Iniciar un proyecto NPM

Primero abrimos nuestra terminal y nos posicionamos donde guardamos nuestros archivos.
Podemos crear una carpeta para nuestro proyecto con el comando
`mkdir project_name` nos movemos dentro de la carpeta con `cd project_name` ya dentro de la carpeta podemos iniciar:

**Primeros pasos**

- `git init:` Para tener el control de cambios y versiones en nuestro proyecto

- `npm init:` con este comando vamos a crear nuestro archivo de configuración del proyecto, el *package.json*

Luego nos saldrá lo siguiente:

- `package name:` el nombre de nuestro proyecto, generalmente es el nombre de la carpeta.

- `version:` version con la que iniciaremos el proyecto, generalmente aparece 1.0.0

- `descripcion:` breve del proyecto

- `entry point:` punto de acceso a nuestro proyecto

- `test command:` comando para gestionar los test

- `git repository:` repositorio de github u otro servicio

- `keywords:` palabras claves del proyecto

- `author:` nombre del autor y < correo >

- `license`: licencia que tendrá el proyecto

**2da opción (para hacer package rápido)**
Escribimos npm init -y y esto generará un package.json vacio para que lo configuremos más adelante.

**3ra opción (configuramos algunos elementos)**
Escribimos en nuestra terminal

- npm set init.author.email "your@email"

- npm set init.author.name "your name"

- npm set init.license "license name"

- npm init -y

### Instalación de dependencias

Se pueden instalar paquetes convencional o global dependiendo de la necesidad, además NPM contiene un serie de opciones para la instalación de paquetes y aunque es posible no utilizar todas las herramientas, lo mejor es saber que existen o entender como funcionan.

Las dependencias que instalamos son recursos que utilizaremos a lo largo de nuestros proyectos.

`npm install moment --save`

A partir de la versión 5 de npm por defecto se instala como una dependencia requerida para el proyecto y se representa por el flag ‘–save’, Esto significa que este paquete es necesario para vivir en producción.

Debemos tener en cuenta que paquete debe vivir en producción o cuando no.

`npm install moment --save-dev`

El flag anterior no permite establecer que el paquete solo es necesario en el entorno local o de desarrollo. Es muy importante determinar los paquetes que deben estar en producción o desarrollo puesto que no queremos omitir paquetes en producción o tener paquetes innecesarios.

**Proceso de instalación**
En el momento de ejecutar el comando de instalación se genera una conexión con los comandos de npm, se genera la descarga necesaria de archivos y nos muestra en consola un output del suceso.

En paralelo se genera una carpeta node_modules que contendrá todos los paquetes instalados, de igual forma nuestro package.json se edita agregando la nueva dependencia.

La carpeta node_modules es vital para el desarrollo del proyecto pero debe ser omitida en git y no ser enviada al repositorio, esto se logra con nuestro archivo `‘.gitignore’`.

**Formas distintas de crear dependencias**

- dependencia de desarrollo

`npm install date-fns --save-dev`

una forma mas abreviada seria:

`npm i date-fns -D`

- dependencia de producción
`npm i moment -S`

También existe paquetes que deben correr de forma global, podemos instalar paquetes para ser usados en otros proyectos. Ejemplo nodemon nos permite generar un demonio que se encarga de escuchar algún cambio o algún valor y va dejar o mantener en nuestro proceso algún comando de node.

Para realizar la instalación de forma global debemos tener permisos de administrador en caso de trabajar en windows o en mac con la palabra reservada sudo.

`sudo npm i -g nodemon`

Para saber si tenemos el paquete instalado en la lista de recursos que están instalados de forma global en npm

`npm list -g --depth 0`

Además muestra todos los paquetes que están listos para ser usados de forma global.

**Carpeta node_modules:** Aquí es donde se van a instalar los módulos que tú estás agregando a tu proyecto. Esta carpeta es importante para que tu proyecto funcione, pero no debe de ser enviada a ningún repositorio y debemos ignorarla apenas se crea.
Para ignorarla se crea un archivo .gitignore y escribimos: node_modules/

Versión resumida para instalar: `npm i date-nfs -D`

- save : Este documento que vas a instalar dentro del proyecto es necesario para vivir en producción. Hay que tener cuidado con los paquetes que instalamos, cuando es a producción y cuando no lo es.

- save-dev: Este documento que vamos a instalar solo es necesario en nuestro entorno local o en el de desarrollo. Es importante no mandar dependencias a producción ni omitir algunas que deban de estar en producción.

**SHORTCUTS**
i = install
-S = --save
-D = --save-de

### Instalación de dependencias con FORCE

`npm install <package> --dry-run`

(simula la instalación) este flag indica que el paquete no va a ser instalado dentro del proyecto simplemente es una simulación nada mas nos muestra el output como si fuere instalado, despues de esto nosotros decidimos si la instalamos o no ejem:

```
  npm install react --dry-run
  npm install <package> -f
```

o

```
npm install <package> --force
```

instalar algún paquete de forma forzada y nos va a permitir instalar este paquete forzándola a que sea desde el ultimo recurso o version y desde el servidor de NPM ejemplo

```
npm install webpack -f
```

si nos vamos al archivo package.json y vemos que el paquete se instalo en las dependencies pero estas debieron estar en dependencies podemos tomar el nombre de ese paquete cortarlo y pegarlo en el grupo que corresponda

``` json
//asi se instalo en dependecies
"dependencies": {
    "date-fns": "^2.16.1",
    "eslint": "^7.12.1",
    "moment": "^2.29.1",
		"webpack": "^5.3.2"
  },
  "devDependencies": {
    
  },

//nosotros lo cortamos y lo pegamos en devDependecies
"dependencies": {
    "date-fns": "^2.16.1",
    "eslint": "^7.12.1",
    "moment": "^2.29.1"
    
  },
  "devDependencies": {
    "webpack": "^5.3.2"
  },
  ```

`npm install` si nosotros queremos volver a instalar todas las dependencias que están en el package.json

`npm install <package>@<version>`

para instalar algun paquete con una versión específica, esto puede ser necesario cuando tenemos que darle mantenimiento a una app con una version anterior de algun paquete o quizas las version actual es beta, etc. ejem:

`npm install json-server@0.15.0`

### Actualizar y eliminar paquetes

**Actualizar paquetes**

- Revisar que paquetes disponen de nuevas versiones
`npm outdate`

- Para ver un output más detallado
`npm outdate --dd`

- Actualizar los paquetes que no están en la ultima versión
`npm update`

- Actualizar un paquete especifico
`npm install json-server@latest`

**Eliminar paquetes**

- Eliminar un paquete de node_modules y del archivo package.json
`npm uninstall json-server`

- Desinstalar un paquete de todo node_modules pero no del archivo package.json
`npm uninstall webpack --no-save`

### Package lock y el uso los símbolos ^ y ~

**^** = Si mantenemos el caret dentro de la configuración de nuestro package estamos garantizando que cuando realicemos una actualización o tengamos un cambio que podamos realizar, vamos a hacer actualización de los cambios menores y de los parches o bug fixes.
Para quedarnos en una sola versión eliminamos el caret.

**~** = Establece que vamos a recibir actualizaciones o cambios solamente de los cambios que son parches o bug fixes.

*Además de esos símbolos, también tenemos:*

-< : Versión menor a la indicada.

-<= : Versión menor o igual a la indicada.

-> : Versión mayor a la indicada.

->= : Versión mayor o igual a la indicada.

![image](https://user-images.githubusercontent.com/41756950/133169881-d5c951e2-9922-40d7-9db4-9e4f0a0d32dc.png)

### Ejecutar Tareas

```bash
"dev": "webpack-dev-server --mode development",
"build": "webpack --mode production",
"start": "serve ./dist -s -l 8080"
```

- dev: Modo desarrollo.

- build: Compila todo y me crea un directorio dist.

- start: Toma el directorio dist y lanzo un servidor en modo producción.

### Solucion de Errores

En caso de que nuestros archivos de node_module no estén bien instalados o tengamos una versión anterior lo que podemos hacer es lo siguiente:

```bash
npm cache clear --force
#Para verificar que verdaderamente se borro podemos usar
npm cache verify
```

Uno de los errores que podemos tener es tener algún valor corrupto en node_module, o tambien que la instalación no este completa de los paquetes que hemos instalado, para ello podemos eliminar el paquete con el siguiente comando:

```bash
rm -rf node_modules  #este comando eliminar la carpeta
```

Otra alternativa para eliminar de forma segura una carpeta es instalando el siguiente paquete:

```bash
sudo npm install -g rimraf
```

Ahora podemos ejecutar el siguiente comando para eliminar node_module

```bash
rimraf node_modules
#Ahora podemos volver a instalar nuestro paquetes
npm install
```

### Seguridad

Podemos revisar las vulnerabilidades de nuestro proyecto con:

```bash
npm audit
```

En caso de tener vulverabilidades, se recomienda usar el comando:

```bash
npm audit fix
```

Y en caso de que esto no lo solucione, podemos ir actualizandolos de uno en uno.

## **Publicar un paquete**

### Crear un paquete para NPM

Ejecutar el comando para saber donde estoy ubicado

```bash
pwd
mkdir random-messages
cd random-messages/
git init
npm init
```

Se crea el archivo index.js en la carpeta src

```javascript
// Se declara el arreglo
const messages = [
    "Karla",
    "Maria",
    "Victor",
    "Hugo",
    "Gallegos",
    "Estrada"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }
```

Se debe crear una carpeta bin donde se crea ele archivo global.js (Configuración que se necesita)

```javascript
#!/usr/bin/env node
// se va ejecutar dentro de bash

//Variable que llama la funcion que exportamos
let random = require('../src/index.js')

//Ejecuto la funcion
random.randomMsg()
```

Modifico el package.json y coloco la configuración de bin que necesito

```json
  "bin": {
    "random-msg": "./bin/global.js"
  },
  "preferGlobal": true
  ```

### Publicar un paquete en NPM

Primero se debe probar de forma local.

```bash
pwd
sudo npm link
#Se ejecuta la función
random-msg
```

Otra forma de instalar el paquete

```bash
sudo npm install -g /Documentos/GitHub/Cursos-de-Platzi/Curso de Gestion de Dependencias y Paquetes NPM/random-message
```

Crear cuenta para poder subir el paquete - Npm.js <https://www.npmjs.com/>
Verificar la cuenta que llega al correo electrónico registrado.

Se loguea a la cuenta creada por consola y se publica el paquete.

```bash
npm adduser
npm publish
```

### Paquetes privados

Para mejorar nuestros paquete y que cuente con los requerimientos mínimos para serlo haremos lo siguiente:

- crearemos un buen `README.md` en donde vamos a explicar lo que hará nuestro paquete osea toda nuestra documentación, además esto debe estar en ingles.
- Ademas debemos Conectarlo a un repositorio de github
- npm init ahora veremos que ya esta ligado a un repositorio, de igual forma podemos ver esta información en el package.json 

`npm version <major |minor |patch>`
- `npm version patch `
   el resultado seria v1.0.1, muchas veces nos dira que debemos actualizar a la versión mas reciente de npm y lo hacemos con 
- `sudo install -g npm` , si nos vamos al package veremos que la versión a cambiado, y para publicarlos volvemos a ejecutar el comando `npm publish`
- `npm unpublish -f` para despublicar un paquete recuerda que debes estar ubicado en la carpeta raíz del proyecto