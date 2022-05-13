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

// const imageList = document.querySelector('.gallery')

// const elements = document.createElement("li");
// const liList = document.createElement('img');
// liList.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// liList.alt = 'White and Black Long Fur Cat';

// liList.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// liList.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';

// liList.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// liList.alt = 'Group of Horses Running';


// imageList.append(elements, liList);

const newList = document.querySelector(".gallery");
newList.insertAdjacentHTML("afterbegin", images
  .map( image => `<li class = "image-item"><img src = "${image.url}" alt  = "${image.alt}"></li>`)
  .join(""));
console.log(newList);