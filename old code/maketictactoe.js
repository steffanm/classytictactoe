const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = rl.question("What do you think of Node.js? ");

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
