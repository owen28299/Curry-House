var curry = require('./curry');

function calculate (num1) {
  return function(operator){
    return function(num2) {

      switch(true){
        case(operator === "+" || operator === "add"):
          return (num1 + num2);
        case(operator === "-" || operator === "subtract"):
          return (num1 - num2);
        case(operator === "*" || operator === "multiply"):
          return (num1 * num2);
        case(operator === "/" || operator === "divide"):
          return (num1 / num2);
        case(operator === "%" || operator === "modulo"):
          return (num1 % num2);
        case(operator === "^" || operator === "power of"):
          return (Math.pow(num1,num2));
      }

    };
  };
}

function random (start) {
  return {
    to: function(end){
      return Math.floor(Math.random()*(end - start) ) + start;
    },
    toInclude: function(end){
      return Math.floor(Math.random()*(end - start + 1) ) + start;
    }
  };

}

function concat(a, b){

    return "" + a + b;

}

var prependGreeting = function(b) {
  return concat("Hello ", b);
};

function add (a, b, c) {
  return a + b + c;
}

var add4and5 = function(c){
  return add (4, 5, c);
};

function calculator(operation){

  return function(op2, op1){

      switch(true){
        case(operation === "+" || operation === "add"):
          return (op1 + op2);
        case(operation === "-" || operation === "subtract"):
          return (op1 - op2);
        case(operation === "*" || operation === "multiply"):
          return (op1 * op2);
        case(operation === "/" || operation === "divide"):
          return (op1 / op2);
        case(operation === "%" || operation === "modulo"):
          return (op1 % op2);
        case(operation === "^" || operation === "power of"):
          return (Math.pow(op1,op2));
      }

  };

}

var add5 = function(num){
  return calculator("+")(5, num);
};

var sub5 = curry(calculator("-"), 5);
var multiply5 = curry(calculator("*"), 5);
var divide5 = curry(calculator("/"), 5);
var mod5 = curry(calculator("%"), 5);
var pow3 = curry(calculator("^"), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};

