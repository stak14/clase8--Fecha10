# Calculadora Funcional en JavaScript

Este proyecto implementa una calculadora simple utilizando un enfoque de programación funcional en JavaScript. El código define una función de orden superior para crear operaciones aritméticas básicas y luego las utiliza para construir un objeto de calculadora.

## Descripción del Código

El código se estructura de la siguiente manera:

### 1. Función `createOperation(operator)`

Esta es una función de orden superior que toma un string `operator` como argumento. Devuelve otra función que toma dos argumentos, `a` y `b`, y realiza una operación aritmética basada en el `operator` especificado.

```javascript
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
