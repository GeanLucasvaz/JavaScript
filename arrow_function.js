function apresentar(nome) {
    return `meu nome é ${nome}`
}

// Arrow Function
const apresentar_arrow = nome => `meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;

// Arrow Function com + de 1 linha de instrução

const soma_pequena = (n1, n2) => {
    if (n1 > 10 || n2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return n1 + n2;
    }
}

// Hoisting: arrow function se comporta como expressão

// Operador maior ou igual que
// >=