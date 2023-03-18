// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const Elems = []
// const list = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i += 1){
//   const elem = document.createElement("li");
//   elem.textContent = ingredients[i];
//   elem.classList.add('item');
//   Elems.push(elem)
//   // console.log(elem);
//   // list.append(elem);
// }
// list.append(...Elems)
// // console.log(Elems);

const list = document.querySelector("#ingredients");
const makeListIngredients = ingredients => {
  return ingredients.map(ingredient => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add('item');
    return elem;
  })
}
const elements = makeListIngredients(ingredients);
list.append(...elements)

// const list = document.querySelector("#ingredients");
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;
