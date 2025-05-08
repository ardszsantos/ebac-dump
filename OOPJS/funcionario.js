function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function () {
        console.log(this.nome + " diz olá, meu salário é de " + this.salario);
    }

    this.dizCargo = function () {
        console.log(this.cargo)
    }

}

function retornaPessoa(x) {
    return `${Pessoa}`
}

console.log(retornaPessoa(Pessoa));

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;
    this.getSalario = function () {
        return `O salário da ${nome} é ${_salario}`;
    }

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario += valor;
        }
    }
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev", 5000);

funcionario1.setSalario(805555000)



console.log(funcionario1.getSalario())
