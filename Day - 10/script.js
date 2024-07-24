//? Task 1: Add a click event listener to a button that changes the text content of a paragraph.

document.getElementById("btn").addEventListener("click", () => {
  console.log(
    (document.querySelector("#para").innerHTML = "Hi I am sandipan kunndu")
  );
});

//? Task 2: Add a double-click event listener to an image that toggles its visibility.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#IMGBtn").addEventListener("dblclick", () => {
    const image = document.querySelector("#dbImage");

    if (image.style.visibility === "hidden") {
      image.style.visibility = "visible";
    } else {
      image.style.visibility = "hidden";
    }
  });
});
//? Task 3: Add a mouseover event listener to an element that changes its background color.
let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "pink";
});

//? Task 4: Add a mouseout event listener to an element that resets its background color.

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "brown";
});

//? Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let keydown = document.querySelector("#keydown");

keydown.addEventListener("keydown", (e) => {
  console.log(e);
});

//? Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

let keyup = document.querySelector("#keyup");

keyup.addEventListener("keyup", (e) => {
  console.log(e.key);
});

//? Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target[0].value);
});

//? Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.querySelector("#selectOptions").addEventListener("change", (e) => {
  console.log(e.target.value);
  document.querySelector("#selectValue").innerHTML = e.target.value;
});

//? Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let listItem = document.querySelector("#listItem");

listItem.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log(e.target.textContent);
  }
});

//? Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

let cnt = 0;
document.querySelector("#addBtn").addEventListener("click", (e) => {
  let li = document.createElement("li");
  li.textContent = "guava";
  if (cnt == 0) { 
    listItem.appendChild(li);
    cnt++;
  }
  console.log(cnt);
});
