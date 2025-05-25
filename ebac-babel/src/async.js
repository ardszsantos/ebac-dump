// function funcaoMuitoPesada() {
//     let execucoes = 0;

//     for (let i = 0; i < 1000000000; i++) {
//         execucoes++
//     }
//     return execucoes
    
// }

const funcaoMuitoPesadaPromise = new Promise((resolve, reject)  => {
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++) {
            execucoes++
        }
        resolve(execucoes);
    } catch {
        reject("Deu erro em algum mocó ai");
    }
})
console.log("inicio")
//console.log(funcaoMuitoPesada())
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado))

console.log("fim")
