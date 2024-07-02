const rs = require('readline-sync');

function suitableOperators() {
  const validOperators = ['/', '+', '-', '*'];
  while (true) {
    let input = rs.question('Enter an operation (e.g., 1 + 1): ');
    let parts = input.split(' ');

    if (parts.length !== 3) {
      console.log('Invalid input, please try again.');
      continue;
    }

    let num1 = parseFloat(parts[0]);
    let operator = parts[1];
    let num2 = parseFloat(parts[2]);

    if (!isNaN(num1) && !isNaN(num2) && validOperators.includes(operator)) {
      return {
        num1,
        operator,
        num2
      };
    } else {
      console.log('Invalid input or operator. Please try again.');
    }
  }
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case '/': 
      if (num2 === 0) {
        return 'Error: Division by zero';
      }
      return num1 / num2;
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 'Invalid operator';
  }
}

function main() {
  console.log('Hi there!');
  const { num1, operator, num2 } = suitableOperators();
  const result = calculate(operator, num1, num2);
  console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
}

main();
