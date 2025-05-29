

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


class Pikachu extends Pokemon {
    constructor () {
        super('Pikachu', 'eletrico')
    }
}

//const chip = new Pikachu('Kok', 'tip')
const chip = new Pikachu

const pikachu = new Pokemon('pikach', 'eletric')
pikachu.atacar("TOp")
