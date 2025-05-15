const minhaFuncao = () => 'diz olá';



const retornaUmCarro = () => ({
    modelo: 'KA',
    fabricante: 'Ford'  
})


console.log(minhaFuncao())
console.log(retornaUmCarro())


const carro = {
    velocidadeAtual: 40,
    acelerar:  function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}


carro.acelerar();
console.log(carro.velocidadeAtual)
carro.frear();
console.log(carro.velocidadeAtual)
