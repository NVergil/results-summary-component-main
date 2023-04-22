import data from "./data.json" assert { type: "json" };
let insert = document.querySelector(".card_2-content h3");
let score = document.querySelector(".circle-container h1");

let scoresData = []

data.forEach(({category, score, icon, alt}, index) => {
  const container = document.createElement('div');
  container.classList.add(`${alt}-container`, 'sum-container');
  container.innerHTML = `
    <div>
      <img src="${icon}" alt="${alt}" />
      <p>${category}</p>
    </div>
    <p class="count-p">${score}<span> / 100</span></p>
  `;
  
  if (index === 0) {
    insert.insertAdjacentElement('afterend', container);
  } else {
    const previousContainer = document.querySelector(`.${data[index - 1].alt}-container`);
    previousContainer.insertAdjacentElement('afterend', container);
  }

  scoresData.push(score);
});

score.innerText = parseInt(scoresData.reduce((acc, curr) => acc + curr) / 4);