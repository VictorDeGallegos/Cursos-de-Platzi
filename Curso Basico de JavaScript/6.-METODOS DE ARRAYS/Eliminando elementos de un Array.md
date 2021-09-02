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
