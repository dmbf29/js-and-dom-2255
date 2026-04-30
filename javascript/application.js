console.log("Hello from JavaScript!");

// Select (HTML element) the H1 on the page
document.querySelector("h1");
// Select (ID)
document.querySelector("#group-name");
// Select (class)
document.querySelector(".cards");
// Select nested obejects
document.querySelector(".card ul");
document.querySelector(".card #Anna");
// Select from specific object
const card = document.querySelector(".card");
const ul = card.querySelector("ul");

// Select all of a specific class
const cards = document.querySelectorAll(".cards");
// returns a NodeList (aka an array)

// select the element we need
// select the card first
// const tokyoCard = document.querySelectorAll(".card")[2];
// const tokyoCard = document.querySelector('#tokyo')
const tokyoCard = document.getElementById("tokyo");

// get the ul from the card
const ulElement = tokyoCard.querySelector("ul");

// add an li into that ul
const noemiLi = `<li>
  <img
    id="Noemi"
    src="https://d26jy9fbi4q9wx.cloudfront.net/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOGVyQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ba2eb58a94a9128a5782b531ac7aac3964f908a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQWNocEFjaDdCam9KWTNKdmNEb09ZWFIwWlc1MGFXOXUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--b67d9ded4d28d0969fbb98b4c21b79257705a99a/noemi-ashizuka.jpg"
    alt="Noemi photo"
  />
  <p>Noemi</p>
</li>`;
ulElement.insertAdjacentHTML("beforeend", noemiLi);

// thing.insertAdjacentHTML("where?", "what?")
// where -> beforebegin, afterbegin, beforeend, afterend
// what -> HTML as a string

// To change style in JS
ulElement.style.backgroundColor = "green";
// ulElement.style.color = "skyblue";

// To add a class to an element
ulElement.classList.add("text-white");
// To remove a class to an element
ulElement.classList.remove("text-white");
// To toggle a class to an element (add if doesnt have, removes if does have)
ulElement.classList.toggle("text-white");

// to get text from an element
// element.innerText
// element.innerText = "new"

// to get text from an input
// input.value
// input.value = "new value"
