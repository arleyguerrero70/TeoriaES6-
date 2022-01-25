// Object.entries -> Me devuelve la clave de los valores de una matriz
const value ={
    'Frontend':'Arlo',
    'Backend':'John',
    'Design':'Duvi',
}
const entries = Object.entries(value);
console.log(entries);
console.log(entries.length);

// Object.values -> Me devuele los valores de un objeto a un arreglo

const valuesAr = Object.values(value);
console.log(valuesAr);
console.log(valuesAr.length);

// Se agregó la funcion Padding
// Nos sirve para agregar una cadena de texto
// al incio o final de otra cadena de texto
// Debo se exacto con la cantidad de texto que se va a agregar
// porque en caso de poner al incio caracteres de mas
// la funcion agregara los caracteres de mas para completar
// el número inicial

let textPr = 'Texto';
console.log(textPr.padStart(11, 'hi '));
console.log(textPr.padEnd(10, 'bye'));


// Async y Await

const holaMundo = () =>{
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World ES8'), 3000)
        : reject (new error('Error ES8'))
    });
};

const holaAsync = async () =>{
    const hello = await holaMundo();
    console.log(hello);
};

holaAsync();

// Manejo de errores
const otraFuncion = async () =>{
    try {
        const hello = await holaMundo();
        console.log(hello);
    }
    catch(error){
        console.log(error);
    }
};

otraFuncion();