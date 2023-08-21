// Task 1

// const stringArray = [
//   "enjoy",
//   "dream",
//   "nothing",
//   "note",
//   "journey",
//   "deer",
//   "stick",
//   "equal",
//   "quickly",
//   "aid",
//   "listen",
//   "each",
//   "strike",
//   "primitive",
//   "pole",
//   "lay",
//   "clearly",
//   "bowl",
//   "seat",
//   "bank",
//   "combine",
//   "accurate",
//   "fish",
//   "coffee",
// ];

// const container = document.querySelector(".container");

// for (let string of stringArray) {
//   const par = document.createElement("p");
//   par.classList.add("paragraph");
//   par.innerText = string;
//   container.append(par);
// }

// const parList = document.querySelectorAll(".paragraph");

// for (let par of parList) {
//   par.addEventListener("click", () => {
//     par.innerText = "*****";
//   });
// }

// Task2,3

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const cards = document.querySelector(".cards");

// for (let number of numbers) {
//   const cardElement = document.createElement("div");
//   cardElement.classList.add("card");
//   cardElement.innerText = number;
//   cards.append(cardElement);
// }

// const cardList = document.querySelectorAll(".card");

// for (let card of cardList) {
//   card.addEventListener("click", () => {
//     card.classList.toggle("active");
//   });
// }

// Task4

// const images = [
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg",
//   "https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg",
//   "https://us.feliway.com/cdn/shop/articles/10_fascinating_facts_about_black_cats-3_1200x1200.jpg?v=1667409596",
// ];

// const cats = document.querySelector(".cats");

// for (let imageURL of images) {
//   const img = document.createElement("img");
//   img.src = imageURL;
//   img.style.width = "100px";
//   img.classList.add("imgSmall");
//   cats.append(img);
// }

// const imgList = document.querySelectorAll(".imgSmall");
// console.log(imgList);

// const catsBigSize = document.querySelector(".catsBigSize");

// for (let oldImg of imgList) {
//   oldImg.addEventListener("click", () => {
//     const imgElement = document.createElement("img");
//     imgElement.src = oldImg.src;
//     imgElement.style.width = "300px";
//     catsBigSize.append(imgElement);
//   });
// }

// Task 5,6

const cards = [
  { ru: "Венера", en: "Venus" },
  { ru: "Земля", en: "Earth" },
  { ru: "Марс", en: "Mars" },
];

const cadrsContainer = document.querySelector(".cards");
const ruLangButton = document.getElementById("ruLangButton");
const enLangButton = document.getElementById("enLangButton");

for (let card of cards) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const ruPar = document.createElement("p");
  ruPar.innerText = card.ru;
  ruPar.classList.add("hidden");

  const enPar = document.createElement("p");
  enPar.innerText = card.en;

  cardElement.append(ruPar, enPar);

  cardElement.addEventListener("click", () => {
    ruPar.classList.toggle("hidden");
    enPar.classList.toggle("hidden");
  });

  ruLangButton.addEventListener("click", () => {
    if (ruPar.classList.contains("hidden")) {
      ruPar.classList.remove("hidden");
      enPar.classList.add("hidden");
    }
  });

  enLangButton.addEventListener("click", () => {
    if (enPar.classList.contains("hidden")) {
      enPar.classList.remove("hidden");
      ruPar.classList.add("hidden");
    }
  });

  cadrsContainer.append(cardElement);
}
