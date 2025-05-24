// let meuMap = new Map();

// meuMap.set("nome", "jean");
// meuMap.set("stack", "html, css, js");
// console.log(meuMap);

// const nome = meuMap.get("nome");

// console.log(nome)

// console.log(meuMap.size);

// console.log(meuMap.has("teste"));


// console.log(meuMap.size)

// for (let chave of meuMap.keys()) {
//     console.log(chave)
// }


// for (let valor of meuMap.values()) {
//     console.log(valor)
// }

// for (let [chave, valor] of meuMap.entries()) {
//     console.log(`${chave}: ${valor}`);
// }

// meuMap.delete("stack");



const cpfs = new Set();
cpfs.add('14786054054')
cpfs.add('81219394025')
cpfs.add('87192349020')

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})


const array = ['Gian Souza', 'José Paulo', 'Maria isabel', 'Luana', 'Luana', 'Gian Souza'];

const arraySet = new Set([...array])


const setArray = [...arraySet] 
console.log(setArray)