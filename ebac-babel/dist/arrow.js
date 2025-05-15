"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return 'diz olá';
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'KA',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.frear();
console.log(carro.velocidadeAtual);