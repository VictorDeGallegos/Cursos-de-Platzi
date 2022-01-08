# Curso de Django

- [Curso de Django](#curso-de-django)
  - [**Introduccion**](#introduccion)
    - [Historia de web development](#historia-de-web-development)
    - [Django](#django)
    - [Caracteristicas](#caracteristicas)
    - [Ventajas](#ventajas)
  - [**Vistas**](#vistas)
    - [El objeto Request](#el-objeto-request)
    - [Creacion de la primer App](#creacion-de-la-primer-app)
    - [Introducción al template system](#introducción-al-template-system)
    - [Patrones de diseño y Django](#patrones-de-diseño-y-django)

## **Introduccion**

### Historia de web development

**Historia...**

Al inicio de la web todo era texto plano (HTML), al transcurrir del tiempo se necesitaban cosas más complejas como conexión a BD’s y de ahi nace CGIscript
Nace con el objetivo de que a través de un request, se ejecute un script dentro del esrvidor, pero esto fue generando problemas con la escabilidad.y por ende difícil de mantener, de esta necesidad nace PHP.
Luego nacen los frameworks para poder resolver tareas comunes, como:

- Protocolos HTTP.

- Conexiones a bases de datos.

- Interacciones con el HTML(templates).


### Django

Nace en 2003, con la necesidad de hacer web’s con la filosofía de hacer las cosas de manera agíl.

Poder hacer sitios escalables.
URLs bien diseñadas.
HTTP request y responses.
ORM, que es conectar a na DB a traves de una interfaz python.

### Caracteristicas

- Rápido desarrollo.
- Listo para todo.
- Seguro contra ataques.
- Versátil.


### Ventajas

- Es desarrollado en Python.
-DRY(Don’t repeat yourself).

- Comunidad Open Source.

## **Vistas**

### El objeto Request

Según Two Scoops Press Two Scoops of Django Best Practices For Django 1.11 recomienda

The import order in a Django project is:

- 1.- Standard library imports.
- 2.- Imports from core Django.
- 3.- Imports from third-party apps including those unrelated to Django.
- 4.- Imports from the apps that you created as part of your Django project.

### Creacion de la primer App

Una app dentro de Django es un modulo de python que provee un conjunto de funcionalidades relacionadas entre sí.
Las apps son una combinación de models, vistas, urls, archivos estaticos.

Muchas apps en django estan hechas para ser reutilizadas.

Una cosa interesante es que pueden separar sus INSTALLED_APPS en tres para que sea más legible y no llenarlo de comentarios # third apps. Pueden hacer algo como esto.

```python
DJANGO_APPS = (
	# Aca irian esas que estan desde el inicio del proyecto y vienen por defecto
)

THIRD_PARTY_APPS = (
	# Aca irian apps externas como Django Rest Framework, Celery, django debug toolbar, etc
)

LOCAL_APPS = (
	# Aca irian las apps de nuestros proyectos que vamoss a instalar, cosas como posts, perfiles, nosé
)

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS
```

### Introducción al template system

Template system de Django es una manera de presentar los datos usando HTML, está inspirado en Jinja2 y su sintaxis, por lo cual comparte muchas similitudes. Permite incluir alguna lógica de programación.

### Patrones de diseño y Django 

Un patrón de diseño, en términos generales, es una solución reutilizable a un problema común.
El patrón más común para el desarrollo web es MVC (Model, View, Controller). Django implementa un patrón similar llamado MTV (Model, Template, View).

MTV => MVC:

- Views + Urls => Controller
- Templates => View
- Models => Model


**Model**
 
Es la forma en la que creamos esquemas de objetos (un usuario, un post, etc) para representarlos en nuestra base de datos.
 
El modelo sin importar nuestro sistema ge BD (mysql, postgress, etc) nos ayudara a crear esta entidad a través de un OMR, esto nos ahorra la molestia de tener que escribir las sentencias de SQL para crear las tablas y atributos.
 

**Template**
 
Es el encargado de manejar la lógica y sintaxis de la información que se va a presentar en el cliente, el sistema de templates de django usa HTML para ello.
 

**View**
 
Su función es solo suministrar datos al template
 
Manda la información necesaria el template para que este pueda manejar los datos y presentarlos de una manera correcta.