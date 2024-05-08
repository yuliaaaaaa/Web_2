// Створення 5 об'єктів з різними типами даних
let object1 = {
    name: "Yulia",
    age: 19,
    isStudent: true
  };
  
  let object2 = {
    building: "Home",
    number: 114,
    floor: 3
  };
  
  let object3 = {
    city: "Vinnytsia",
    population: 8538000,
    isCapital: false
  };
  
  let object4 = {
    colors: ["white", "black", "blue"],
    shade: "cold"
  };
  
  let object5 = {
    title: "dog",
    age: 3.5,
    girl: true
  };
  
  // Додаємо нові та змінюємо існуючі значення в об'єктах
  object1.job = "gamedeveloper";
  object2.square = 90;
  object3.isCapital = true;
  object4.colors.push("grey");
  object5.age = 4;
  
  // Використовуємо if…else для зміни
  if (object1.age >= 18) {
    console.log(`${object1.name} is an adult.`);
  } else {
    console.log(`${object1.name} is a minor.`);
  }
  
  // Використовуємо switch…case для виведення дня тижня
  let day = 3;
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
  }
  
  // Використання методів для роботи з об'єктами: .assign(), .freeze(), .keys(), .entries()
  
  // .assign() - об'єднує об'єкти
  
  let mergedObject = Object.assign({}, object1, object2);
  console.log(mergedObject);
  
  // .freeze() - забороняє змінювати об'єкт
  
  const frozenObject = Object.freeze(object3);
  // frozenObject.isCapital = false; // Цей рядок видасть помилку, оскільки об'єкт заморожений
  
  // .keys() - повертає масив ключів об'єкта
  console.log(Object.keys(object4));
  
  // .entries() - повертає масив масивів [ключ, значення]
  
  console.log(Object.entries(object5));