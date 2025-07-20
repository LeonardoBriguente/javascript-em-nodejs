// OPERADORES ARITMÉTICOS
/*
    + Adição
    - Subtração
    * Multiplicação
    / Divisão
    % Módulo (resto da divisão)
*/ 

const addition = 10 + 5; // 15
const subtraction = 10 - 5; // 5
const multiplication = 10 * 5; // 50
const division = 10 / 5; // 2
const modulo = 10 % 3; // 1

// Exemplo: Realizar descontos em um produto
const productPrice = 500;
const percentage = 25;

const discount = (productPrice * percentage) / 100; // Aplicamos regra matemática
const finalPrice = productPrice - discount;

console.log("O valor do produto é: R$ ", productPrice); // 500
console.log("O valor do desconto é: R$ ", discount) // 125
console.log(`O valor final do produto é: R$ ${finalPrice}`); // 375