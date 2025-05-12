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
    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }


    this.aumento = function() {
        const novoSalario = _salario *  1.1;
        _salario = novoSalario;

    }
    Pessoa.call(this, nome);
}


function Estagiario(nome) {
    Funcionario.call(this, nome, "Estágiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() *  1.07;
        this.setSalario(novoSalario);
    }
}


const funcionario1 = new Funcionario("Maria", "dev", 5000);
const funcionario2 = new Estagiario("Pedro");


let teste = [1, 1, 1]
console.log(typeof(new Error()))