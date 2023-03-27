const liItemsEl = document.querySelectorAll('li.item')
console.log(`Number of categories: ${liItemsEl.length}`)
const listEl = document.querySelectorAll('#categories li.item')
listEl.forEach((item) => {
console.log(`Category: ${item.querySelector('h2').textContent}`);
console.log(`Elements: ${item.querySelectorAll('li').length}`)})