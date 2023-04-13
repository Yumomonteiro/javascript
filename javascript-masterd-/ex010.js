const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um valor: ', (valor) => {
  console.log(`Você digitou: ${valor}`);
  rl.close();
});