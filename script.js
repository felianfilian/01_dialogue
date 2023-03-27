let dialogueBg = document.querySelector(".dialogue-bg");
let text01 = document.querySelector(".dialogue p");

function openDialogue(message) {
  dialogueBg.classList.remove("d-none");
  text01.innerHTML = message;
}

function closeDialogue() {
  dialogueBg.classList.add("d-none");
}
