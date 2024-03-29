/* const bookShelf = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};

bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
 */

/* const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPricePotions = 0;
    for (let potion of this.potions) {
      totalPricePotions += potions.price;
    }
    return totalPricePotions;
  },
};
 */

/* function addOverNum(value, ...args) {
  let sum = 0;
  for (const arg of args) {
    if (arg > value) {
      sum += arg;
    }
  }
  return sum;
} */

/* Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
Властивість best має містити найбільше число з масиву scores
Властивість worst має містити найменше число з масиву scores.
Використовуй оператор (...spread) і методи Math.max() і Math.min().
 */
/* 
function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
}
 */

// const car = {
//   brand: 'mers',
//   model: 'x5',
//   year: '2012',
//   color: 'blue',

//   drive() {
//     console.log('Автомобіль рухається');
//   },
// };
// console.log('Автомобіль рухається');

/* const car = {
  brand: 'mers',
  model: 'x5',
  year: 2012,
  color: 'blue',

  drive() {
    console.log('The car is moving.');
  },
};

car.drive(); */

/* Створіть об'єкт, який представляє книгу. У цьому об'єкті повинні бути наступні
 властивості:

title (назва книги)
author (автор книги)
pages (кількість сторінок)
isRead (логічне значення, що вказує, чи прочитана книга)
Також додайте метод readBook, який змінює значення властивості isRead на true. */
/* 
const book = {
  title: 'This book',
  author: 'Tom Gyuu',
  pages: 244,
  isRead: false,

  readBook() {
    this.isRead = true;
  },
};

book.readBook();
console.log(book); */

/* *****
  Система оцінювання студентів: Створіть масив об'єктів, кожен з яких представляє
   студента з інформацією про його ім'я, прізвище та оцінки за різні предмети.
 Реалізуйте метод для обчислення середнього балу кожного студента та метод для виведення 
 списку студентів,впорядкованого за середнім балом. */

/* const students = [
  { name: 'John', surname: 'Doe', grades: [85, 90, 75] },
  { name: 'Jane', surname: 'Smith', grades: [70, 80, 65] },
  { name: 'Alice', surname: 'Johnson', grades: [90, 95, 85] },
];
function calcAverageScore(studentsGrades) {
  let sum = 0;
  for (let grade of studentsGrades) {
    sum += grade;
  }
  return sum / studentsGrades.length;
}
for (let student of students) {
  console.log(
    `${student.name} ${student.surname}: Average score - ${calcAverageScore(
      student.grades
    )}`
  );
} */

/* ********* */
/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},

  /**
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},

  /**
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},

  /**
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /**
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /**
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},

  /* ============== Додаткові методи ============== */
  /**
   * Метод видаляє всі транзакції та скидає баланс рахунку до 0.
   */
  resetAccount() {},

  /**
   * Метод повертає кількість всіх транзакцій.
   */
  getTransactionCount() {},
  /**
   * Метод повертає середнє значення по типу транзакції за всю історію.
   * Якщо транзакцій немає повертає 0.
   */
  getAverageTransactionValue(type) {},
};

const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];
console.table(allUsers[1].friends);
