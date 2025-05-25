"use strict";

function funcaoMuitoPesada() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
var funcaoMuitoPesadaPromise = new Promise(function (resolve, reject) {
  try {
    var execucoes = 0;
    for (var i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (_unused) {
    reject("Deu erro em algum mocó ai");
  }
});
console.log("inicio");
console.log(funcaoMuitoPesada());
console.log("fim");