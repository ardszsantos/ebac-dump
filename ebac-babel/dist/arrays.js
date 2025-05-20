"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
redesSociais.forEach(function (redeSNome, i) {
  console.log(" #".concat(i + 1, " Eu tenho perfil na rede social: ").concat(redeSNome));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(alunos) {
  return alunos.curso === 'Backend';
};
var todosASF = alunos2.every(function (item) {});