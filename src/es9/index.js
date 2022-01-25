// Operador de reposo
// extrae las propiedades de un objeto
// que aún no se ha creado

const obj = {
    'nameEs8':'Arlo',
    'age':70,
    'country':'COL',
}

//operador de reposo para separar los elementos
let {nameEs8, ...all} = obj;
console.log(nameEs8,all);

// Utilidad de propagación
// Anida los valores de un objeto en otro objeto

const prog ={
    'nameProg':'Arlo70',
    'ageProg':25,
}
const prog1 ={
    ...prog,
    'countryProg':'COL',
}
console.log(prog1);

// Promise.finally
const helloWordlEs9 = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola Mundo resolve'), 2000)
            : reject(new Error('Error ES9'))
    });
};

helloWordlEs9()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finzalizó'))
//

// Regex para acceder a cada valor
// Lo que hace esta función es buscar en cada elemento
// el valor te tiene y lo llamo inciando en 1
// ya que este valor no funciona como un array
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const regexDataMatch = regexData.exec('2018-02-21');
const regexYear = regexDataMatch[1];
const regexMont = regexDataMatch[2];
const regexDay = regexDataMatch[3];
console.log(regexYear, regexMont, regexDay);
