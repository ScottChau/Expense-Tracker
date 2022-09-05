const name = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const form = document.getElementById("form");
const container = document.querySelector(".container");

let p = null;

function noItem() {
  p = document.createElement("p");
  p.appendChild(document.createTextNode("No expenses added yet!"));
  container.appendChild(p);
}

noItem();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (p) {
    container.removeChild(p);
    p = null;
  }

  const newDiv = document.createElement("div");

  const item = document.createElement("p");
  item.appendChild(document.createTextNode(name.value));
  const dateCopy = document.createElement("p");
  dateCopy.appendChild(document.createTextNode(date.value));
  const amt = document.createElement("p");
  amt.appendChild(document.createTextNode(amount.value));

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";
  deleteBtn.addEventListener("click", () => {
    container.removeChild(newDiv);

    if (document.querySelector(".section") === null) noItem();
  });

  newDiv.append(item, dateCopy, amt, deleteBtn);
  newDiv.classList.add("section");
  container.appendChild(newDiv);
  name.value = "";
  date.value = "";
  amount.value = "";
});
