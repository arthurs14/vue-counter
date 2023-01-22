let count = 0;

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("minus");
const counter = document.getElementById("count");

counter.innerText = count;

addBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

subtractBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});
