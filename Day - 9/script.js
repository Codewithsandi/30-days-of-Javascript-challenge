//? Task 1: Select an HTML element by its ID and change its text content.

console.log((document.getElementById("name").innerText = "Sandipan Kundu"));

//? Task 2: Select an HTML element by its class and change its background color.

console.log(
  (document.getElementsByClassName("box")[0].style.backgroundColor = "red")
);

//? Task 3: Create a new div element with some text content and append it to the body.

let div = document.createElement("div");
div.innerHTML = "Created div element";
div.classList.add("py");
console.log(document.body.appendChild(div));

//? Task 4: Create a new li element and add it to an existing ul list.

let ulElement = document.getElementById("ulElement");
let li = document.createElement("li");
li.innerText = "Orange";
ulElement.appendChild(li);
console.log(ulElement);

//? Task 5: Select an HTML element and remove it from the DOM.

document.getElementById("remove").remove();

//? Task 6: Remove the last child of a specific HTML element.

console.log(ulElement.lastElementChild.remove());

//? Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

console.log(
  (document.getElementById("image").src =
    "https://plus.unsplash.com/premium_vector-1689096722893-cb443a77654f")
);

//? Task 8: Add and remove a CSS class to/from an HTML element.

document.querySelector("#color_div").classList.remove("color_red");
document.querySelector("#color_div").classList.add("color_blue");

//? Task 9: Add a click event listener to a button that changes the text content of a paragraph.

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".para").style.color = "green";
});

//? Task 10: Add a mouseover event listener to an element that changes its border color.

document.querySelector(".para").addEventListener("mouseover", () => {
  document.querySelector(".para").style.borderColor = "red";
});
