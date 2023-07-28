"use strict";

//DOM
const btnAdd = document.querySelector(".btn--add");
const inputContainer = document.querySelector(".input-container");

const btnClose = document.querySelector(".btn-close");
const noteTitle = document.querySelector(".note-title");

const notes = document.querySelector(".notes");
const btnDone = document.querySelector(".btn--done");

const tasks = document.querySelector(".tasks");

let moreTasks = document.querySelectorAll(".tasks");

let currenTask;

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

console.log(itemsArray);

// Events
btnAdd.addEventListener("click", () => {
  inputContainer.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  inputContainer.classList.add("hidden");
  noteTitle.value = "";
});

btnDone.addEventListener("click", () => {
  const noteTitle = document.querySelector(".note-title");
  !noteTitle.value ? alert("Please fill the box") : createItem(noteTitle);
});

// functions
function createItem(item) {
  itemsArray.push(item.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function displayItems() {
  let base = "";
  for (let i = 0; i < itemsArray.length; i++) {
    base += `<div class="tasks new${i}">
              <button class="check-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  </svg>
                  </button>
                  
                  <p class="task-head">${itemsArray[i]}</p>
                  </div>`;
  }

  notes.innerHTML = base;

  activateDeleteListener();
}

function activateDeleteListener() {
  let checkBtn = document.querySelectorAll(".check-btn");
  checkBtn.forEach((dleteBtn, i) => {
    dleteBtn.addEventListener("click", () => {
      currenTask = document.querySelectorAll(`.tasks:nth-child(${i + 1})`);

      showDone();

      setInterval(() => {
        deleteItem(i);
        this.disabled = "true";
      }, 1500);
    });
  });
}

function showDone() {
  let taskOver = document.querySelector(".task-over");
  taskOver.style.opacity = "1";

  setInterval(() => {
    taskOver.style.opacity = "0";
  }, 1500);
}

function deleteItem(i) {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

window.onload = function () {
  displayItems();
};
