const btnContinue = document.querySelector("#continue-btn");
const introText = document.querySelector(".intro-box");
const btnOpen = document.querySelector("#open-text");
const wisthPaper = document.querySelector(".piece-of-paper");
const wishText = document.querySelector(".wish-text");

btnContinue.addEventListener("click", () => {
  introText.classList.add("hidden");
  wisthPaper.classList.add("appear");
});

btnOpen.addEventListener("click", () => {
  wishText.classList.add("appear");
});

const launchBtn = btnOpen;
const balloonsContainer = document.querySelector(".balloons-container");

launchBtn.addEventListener("click", function () {
  balloonsContainer.classList.add("balloons-launch");
  launchBtn.innerText = "You can click again"
  setTimeout(() => {
    balloonsContainer.classList.remove("balloons-launch");
  }, 5000);
});
