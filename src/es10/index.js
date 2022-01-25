// ararray.flat me permite evolver una matriz
// de otra sub matriz aplanada
// y puedo entender como esta orgnizado este elemento
let arrayEs10 =[1,2,3, [1,2,3, [1,2,3,]]];
// flat recibe la profundidad
//profundidad 0
console.log(arrayEs10.flat());
//profundidad 2
console.log(arrayEs10.flat(2));
// flatMap
// Me permite mapear cada elemento
// pasarle una funcion
// y de acuerdo al resultado aplanarlo
let arrayEs10Dos =[1,2,3,4,5];
console.log(arrayEs10Dos.flatMap(value =>[value, value * 2]));

// trimStart para eliminar los espacios en blanco de un string
// al inicio y final de un string

let hello = '  -   Holi   -   ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// con la propiedad .fromEntries
// podemos convertir un array en un objeto
// trandformar de objetos a array y de array a objetos

let entries = [["nameEntries","Arlo70"],["ageEntries",25]];
console.log(Object.fromEntries(entries));

// mySymbol
// descripcion de un objeto tipo simbolo
let mySymbol = `My simbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);