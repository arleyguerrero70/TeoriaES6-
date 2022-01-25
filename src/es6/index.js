// Parametros por defecto versión anterior
function newFunction (name, age, country){
    name = name || "Arlo";
    age = age || 25;
    country = country || "CO";
    console.log(name, age, country);
}

// ES6 - Parametros por defecto
function newFunction2 (name= "Arlo", age = 25, country = "CO"){
    console.log(name,age,country);
}
newFunction2();
newFunction2("Pepito",30,"MX");

// Concatenación version anterior
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// ES6 Concatenación
// Debemos llamar las comillas francesas para esta concatenación
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


// Multilinea de la forma anterior
let lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n"
+ "Otra frase épica."

// ES6 Multilinea
let lorem2 = `Otra frase que necesitamos
ahora es otra frase en otra linea`;

console.log(lorem);
console.log(lorem2);

// Destructuración de elementos version anterior
let person = {
    'name': 'Juanfe',
    'age': 8,
    'country': 'US'
}
console.log(person.name, person.age);

// ES6 Deconstrucción
// De un objeto selecciono que parte necesito, llamo la variable
// donde fue creada, selecciono la parte del objeto que necesito
// y lo convierto en una variable que puede ser accedida facilmente
let {age, country} =person;
console.log(age, country);

// Operador de propagación (Spread operator) en la version anterior
let team1 = ['Cris','Arley','Fran'];
let team2 = ['Migue','John','Sebas'];

let developersBS = ['Developers 1','Cris','Arley','Fran','Migue','John','Sebas'];
console.log(developersBS);

// ES6 Operador de propagación
// en esta version podemos agregar a una nueva variable o array
// sin copiar y pegar lo que haya dentro de cada array
// solo llamando a cada uno 

let developersBS2 = ['Developers 2',...team1, ...team2];
console.log(developersBS2);


// Creando objetos version anterior
let nameC4 = 'ArloC4';
let agec4 = 25;
obj = {name: nameC4, age: agec4};

// ES6 Creando objetos
// En vez de hacer la asignación completa
// al llamar las const o let va a tomar
// la llave y el valor de los elementos

obj2 = {nameC4, agec4};


// AROW FUNCTIONS version anterior
const names = [
    {'name':'Arley','age':25},
    {'name':'Peito','age':20}
]
let listOfNames= names.map(
    function(item){
        console.log(item.name)
    }
);

// ES6 ARROW FUNCTIONS
// Llamamos la misma funcion en .map()
// pero en este caso nos evitamos toda la escritura
// de la funcion anonima por algo mas simplificado
let listOfNames2 = names.map(item => console.log(item.name, item.age));
// Otra forma de utilizar las arrow function es crando una variable y
// luego pasarle los datos
// V1
const listOfNames3 = (name, age, country) =>{
    name = 'Arlo Arrow3',
    age = 25,
    country = 'COL'
}
// V2
const listOfNames4 = name => {
    name = 'Arlo arrow4'
}
// V3
// Creo una funcion que recibe un valor que es número
// y luego ese número hago que ese número se multiplique por si mismo
// y me da da un return del resultado sin necesidad de escribirlo
const num = num => num * num;
console.log(num(5));

// Javascript es un lenguaje que no es sincronico
// no puede ejecutar muchos elementos al mismo tiempo
// ejecuta elemento por elemento

const helloPromise = () =>{
    return new Promise((resolve,reject) =>{
        if(false){
            console.log('Estamos imprimiendo el valor Resolve');
        }else{
            console.log('Estamos imprimiendo el valor Reject');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
//

// Clases -> Es una forma para manejar objetos
// y aplicar herencia. Conceptos utiles de POO

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    rest(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
    div(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA / this.valueB;
    }
    mult(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB;
    }
}

const operationsCalculator = new calculator();
console.log(operationsCalculator.div(5,4));

// llamando un modulo con import y export
import {hello} from './module';
hello();


// ES6 Generator
// Es una función que devuelve una
// serie de valores segun el algoritmo
function* helloWorldF(){
    if(true){
        yield 'Hello ,';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorldF();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);