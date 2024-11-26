function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const numIn = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", () => {
  const amount = numIn.value;
  if (amount < 0 || amount > 100) {
    return;
  }
  destroyBoxes();
  createBoxes(amount);
  numIn.value = "";
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxArray = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxArray.push(box);
  }
  boxes.append(...boxArray);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

console.log(boxes);
