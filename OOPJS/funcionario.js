function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function () {
        console.log(this.nome + " diz olá, meu salário é de " + this.salario);
    }

    this.dizCargo = function () {
        console.log(this.cargo)
    }

}


function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;
    this.retornaSalario = function () {
        return _salario;
    }
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev", 5000);


console.log(funcionario1.retornaSalario())