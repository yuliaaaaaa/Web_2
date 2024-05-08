// Створення 5 функцій, які працюють з різними типами даних

// Function Declaration
function add(x, y) {
    return x + y;
  }
  
  // Function Expression
  const subtract = function(x, y) {
    return x - y;
  };
  
  // Arrow Function
  const multiply = (x, y) => {
    return x * y;
  };
  
  // Функція, яка перевіряє, чи є число парним чи непарним
  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Функція, яка визначає тип переданого значення
  function checkType(value) {
    switch (typeof value) {
      case "number":
        return "Number";
      case "string":
        return "String";
      case "boolean":
        return "Boolean";
      case "object":
        if (Array.isArray(value)) {
          return "Array";
        } else if (value === null) {
          return "Null";
        } else {
          return "Object";
        }
      default:
        return "Unknown";
    }
  }
  
  // Використовуючи class, створити Animal -> Dog та Cat
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    bark() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
  
    meow() {
      return "Meow!";
    }
  }
  
  // Приклади використання функцій та класів
  
  console.log(add(5, 3)); 
  
  console.log(subtract(10, 4));
  
  console.log(multiply(2, 6)); 
  
  console.log(checkEvenOdd(7)); 
  
  console.log(checkType("hello")); 
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog.name); 
  console.log(myDog.breed); 
  console.log(myDog.bark()); 
  
  const myCat = new Cat("Whiskers", "Grey");
  console.log(myCat.name); 
  console.log(myCat.color); 
  console.log(myCat.meow()); 
  