// Parâmetros de função

// function soma(N1, N2) {
//     return N1 + N2;
// }

// console.log(soma(2, 2))
// console.log(soma(2, 2))

// Parâmetros x Argumentos

// Ordem dos parâmetros

// function NomeIdade(Nome, Idade) {
//     return `Meu nome é ${Nome} e eu tenho ${Idade} anos.`
// }

// console.log(NomeIdade(16, "Gean"))

function soma(N1, N2) {
    return N1 + N2;
}

function multiplica(N1 = 1, N2 = 1) {
    return N1 * N2;
}
                            //9
console.log(multiplica(soma(4, 5)))