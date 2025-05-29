function Pokemon(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}

const pikoachu = new Pokemon('pikachu', 'eletrico')


class Pokemon {
    nome = '';
    tipo = '';


    constructor(nome, tipo)  {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(atkName) {
        console.log(atkName)
    }
}


const pikachu = new Pokemon('pikach', 'eletric')

