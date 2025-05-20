function somar(a, b) {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma;
}


console.log(somar(20, 20, 30));


function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);
    return soma;
}


console.log(somarComRest(10, 20, 30, 40));