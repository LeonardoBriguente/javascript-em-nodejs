// Operadores Lógicos do JS
// && E (AND)
// || OU (OR)
// !  NÃO (NOT)

// O operador && é utilizado quando **todas** as condições precisam ser verdadeiras para que algo aconteça

// O operador || é utilizado quando **apenas uma** das condições precisa ser verdadeira para que algo aconteça

// Utilizado para criar negações e verificar quando algo **não é verdadeiro**. Ele nega o valor da variável, ou seja, Se for true, vira false - e vice-versa

// EXEMPLOS
// Uso do &&: Pronto para sair
const takeBath = true;
const brushTeeth = true;

const isReady = takeBath && brushTeeth;
console.log(`Está pronto para sair? ${isReady}`);

// Uso do ||: Sair para brincar
const washDishes = false;
const doHomework = true;

const canPlay = washDishes || doHomework;
console.log(`Lavou a louça ou faz a licão de casa? ${canPlay}`);