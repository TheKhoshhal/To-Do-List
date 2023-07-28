"use strict";

function displayItems() {
  let x = "";
  for (let i = 0; i < titlesArray.length; i++) {
    x += `<div class="tasks">
                  <input type="checkbox" class="check-btn" />

                  <p class="task-head">${titlesArray[i]}</p>
                </div>`;
  }
  notes.innerHTML = x;
}

window.onload = function () {
  displayItems();
};
