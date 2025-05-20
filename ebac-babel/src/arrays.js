const redesSociais =  ['Facebook', 'Instagram', 'Twitter'];


redesSociais.forEach(function (redeSNome, i) {
    console.log(` #${i + 1} Eu tenho perfil na rede social: ${redeSNome}`)
}) 



const alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner']

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend',
    };
})




console.log(alunos2)


const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
})


console.log(dobroDosNumeros)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula';
})


const filtraAlunosDeBackend2 = alunos => alunos.curso === 'Backend';


const todosASF =  alunos2.every(function(item) {

})
