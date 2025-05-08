
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vrum")
    }
}




const carroDoJot = new Carro("fiesta", "ford", 2020, 2019);
const carroDoG = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoG)
console.log(carroDoJot)

const nome = "gian";
const idade = 30;
const eMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];



const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}

pessoa.sobrenome = 'souza';



console.log(pessoa.sobrenome)