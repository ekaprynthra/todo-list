const ul = document.querySelector("ul");
const lists = document.getElementById("lists");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

checkList();

function checkList() {
  if (document.querySelector("li") === null) {
    const p = document.createElement("p");
    lists.appendChild(p);
    p.className = "text-secondary m-0";
    p.setAttribute("id", "list");
    p.innerHTML = "No List";
  }
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  ul.appendChild(li);
  li.className =
    "d-flex justify-content-between align-items-center list-group-item";
  li.appendChild(span);
  span.className = "title";
  span.innerHTML = input.value;

  li.addEventListener("click", () => {
    const checked = span.classList.toggle("checked");

    if (checked) {
      const btn = document.createElement("button");
      li.appendChild(btn);
      btn.className = "btn btn-danger";
      btn.innerHTML = "Delete";
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });
    } else {
      li.getElementsByClassName("btn")[0].remove();
      checkList();
    }
  });

  input.value = null;

  const element = document.getElementById("list");
  if (element) {
    element.remove();
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

submit.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
