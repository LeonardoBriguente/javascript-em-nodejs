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

