
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const container = document.querySelector(".gallery");
const imgEl = images.map(({ url, alt}) => `<li> <img src="${url}" alt="${alt}" class="gallery-image" width=320px height=200px></li>`).join("");
container.insertAdjacentHTML("beforeend", imgEl);

container.style.display = `flex`; 
container.style.gap = `15px`;
const gallEl = document.querySelectorAll(".gallery-image");
container.style.listStyleType = `none`;
