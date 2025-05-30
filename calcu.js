function createOperation(operator) {
  return function (a, b) {
    switch (operator) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        return "Operación no soportada";
    }
  };
}

const addFn = createOperation("add");
const subtractFn = createOperation("subtract");
const multiplyFn = createOperation("multiply");
const divideFn = createOperation("divide");

const functionalCalculator = {
  add: addFn,
  subtract: subtractFn,
  multiply: multiplyFn,
  divide: divideFn,
};

console.log(functionalCalculator.add(2, 2));
console.log(functionalCalculator.subtract(2, 2));
console.log(functionalCalculator.multiply(2, 2));
console.log(functionalCalculator.divide(2, 2));
