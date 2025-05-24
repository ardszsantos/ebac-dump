"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// let meuMap = new Map();

// meuMap.set("nome", "jean");
// meuMap.set("stack", "html, css, js");
// console.log(meuMap);

// const nome = meuMap.get("nome");

// console.log(nome)

// console.log(meuMap.size);

// console.log(meuMap.has("teste"));

// console.log(meuMap.size)

// for (let chave of meuMap.keys()) {
//     console.log(chave)
// }

// for (let valor of meuMap.values()) {
//     console.log(valor)
// }

// for (let [chave, valor] of meuMap.entries()) {
//     console.log(`${chave}: ${valor}`);
// }

// meuMap.delete("stack");

var cpfs = new Set();
cpfs.add('14786054054');
cpfs.add('81219394025');
cpfs.add('87192349020');
console.log(cpfs.keys());
console.log(cpfs.values());
cpfs.forEach(function (valor) {
  console.log(valor);
});
var array = ['Gian Souza', 'José Paulo', 'Maria isabel', 'Luana', 'Luana', 'Gian Souza'];
var arraySet = new Set([].concat(array));
var setArray = _toConsumableArray(arraySet);
console.log(setArray);