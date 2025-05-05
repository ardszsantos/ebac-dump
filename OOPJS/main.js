
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