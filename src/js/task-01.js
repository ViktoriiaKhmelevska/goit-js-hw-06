// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const ulEl=document.querySelectorAll('ul')
// console.log(ulEl);
// const liEl=document.querySelectorAll('li.item')
// console.log(liEl)
// const categoriesItems=document.querySelector('#categories')
// console.log(categoriesItems);

const liItemsEl = document.querySelectorAll('li.item')
console.log(`Number of categories: ${liItemsEl.length}`)
const listEl = document.querySelectorAll('#categories li.item')
listEl.forEach((item) => {
console.log(`Category: ${item.querySelector('h2').textContent}`);
console.log(`Elements: ${item.querySelectorAll('li').length}`)})