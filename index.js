const rs = require('readline-sync');

let init = rs.question('Hello!');

function suitableOperators(){

  const validOperators = ['/', '+', '-', '*', ];
  while(true){
  let operator = rs.question('What operation would you like to perform : / + - * ');

  if(validOperators.includes(operator)){
    return operator;
  }
  else{
    console.log('This is not a valid Operation');
  }
  }
}

function getNumbers(prompt){
  while(true){
    const input = rs.question(prompt);
    const number = parseFloat(input);
    if(!isNaN(number)){
      return number;
    }
    else{
      console.log('This is not a valid number, try again');
    }
  }
}

function calculate(operator, num1, num2){
  switch(operator){
    case '/': return num1 / num2;
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
  }
}

function main() {
  console.log('Hi there!')
  const operator = suitableOperators();
  const num1 = getNumbers('Please input first number: ');
  const num2 = getNumbers('Please input second number: ');
  const result = calculate(operator, num1, num2);
  console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
}

main();

