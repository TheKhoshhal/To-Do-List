"use strict";
const notes = document.querySelector(".notes");
const titleNote = document.querySelector(".note-title");
// const textNote = document.querySelector(".note-text");
const btnDone = document.querySelector(".btn--done");

const title = titleNote.value;
// const text = textNote.value;

let newTitle = String(title);
let titlesArray = localStorage.getItem("titles")
  ? JSON.parse(localStorage.getItem("titles"))
  : [];

const printNote = function () {
  titlesArray.push(title);
  localStorage.setItem("titles", JSON.stringify(titlesArray));
  location.reload;
};

btnDone.addEventListener("click", () => {
  printNote();

  inputContainer.classList.add("hidden");
  noteTitle.value = "";
  // noteText.value = "";
});

/* 
  notes.innerHTML += `<div class="tasks">
      <input type="checkbox" class="check-btn" />

      <p class="task-head">${title}</p>
      <p class="task-body hidden">
      ${text}
      </p>
    </div> `; 
*/
