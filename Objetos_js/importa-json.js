// import estudante from './estudante.json';
const estudante = require('./estudante.json');

// console.log(estudante);
// console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);


//JSON não é um objeto JavaScript. Para utilizá-lo como objeto, precisamos convertê-lo.
//Para conseguimos utilizar métodos de objeto, percorre-lo...