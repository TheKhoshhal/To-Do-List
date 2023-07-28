"use strict";

// Main Page
const btnAdd = document.querySelector(".btn--add");
const inputContainer = document.querySelector(".input-container");

// Container
const btnClose = document.querySelector(".btn-close");
const noteTitle = document.querySelector(".note-title");
// const noteText = document.querySelector(".note-text");

// Events
btnAdd.addEventListener("click", () => {
  inputContainer.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  inputContainer.classList.add("hidden");
  noteTitle.value = "";
  // noteText.value = "";
});
