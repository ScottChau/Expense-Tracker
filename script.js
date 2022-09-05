const name = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const form = document.getElementById("form");
const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
  });

  newDiv.append(item, dateCopy, amt, deleteBtn);
  newDiv.classList.add("display_section");

  container.appendChild(newDiv);
});
