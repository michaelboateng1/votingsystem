// VARIABLES
const netxBtn = document.querySelectorAll(".next");
const backBtn = document.querySelectorAll(".back");
const lastNxtBtn = document.querySelector(".lastNextBtn");
const lastBakBtn = document.querySelector(".lastBackBtn");
const candidates = document.querySelectorAll(".candidate");
const yearDisplay = document.querySelector(".year");
const preview = Array.from(document.querySelectorAll(".prefect-position"));
const previewBtn = document.querySelector(".previewBtn");
const newDate = new Date();

// MODAL VARIABLES
const modal = document.querySelector(".modal-background");
const close = document.querySelector(".close");
const modalTextContainer = document.querySelector(".modal-text-container");
const modalContainer = document.querySelector(".modal-container");

// HEADING AND DATE
document.addEventListener("DOMContentLoaded", () => (yearDisplay.textContent = `KSTS 2023/${newDate.getFullYear()} PREFECTSHIP ELECTION`));

// PROGRESS BAR
const progressBar = document.querySelector("#progress");
const progressIndicator = document.querySelector("#progress .indicator");
const displayProgress = document.querySelector(".percentage");
// THIS CALCULATE FOR THE PERCENTAGE BASE ON THE NUMBER OF CARDS
let percent = Math.floor(100 / 19);
let progressBarWidth = 0;

// THIS SHOWS HOW MUCH YOU'R DONE VOTING (COMPLETION PERCENTAGE)
function progress(navigator) {
  if (navigator === "next") {
    // progressBar.value += percent;
    // displayProgress.textContent = `${Math.floor(progressBar.value)}% completed `;
    progressBarWidth += percent;
    progressIndicator.style.width = `${progressBarWidth}%`;
    displayProgress.textContent = `${Math.floor(progressBarWidth)}% completed `;
  } else if (navigator === "back") {
    // progressBar.value -= percent;
    // displayProgress.textContent = `${Math.floor(progressBar.value)}% completed `;
    progressBarWidth -= percent;
    progressIndicator.style.width = `${progressBarWidth}%`;
    displayProgress.textContent = `${Math.floor(progressBarWidth)}% completed `;
  } else {
    // displayProgress.textContent = `${Math.floor(progressBar.value)}% completed `;
    progressIndicator.style.width = `${progressBarWidth}%`;
    displayProgress.textContent = `${Math.floor(progressBarWidth)}% completed `;
  }

  if (progressBarWidth === 100) progressIndicator.classList.add("squareBorder");
  else progressIndicator.classList.remove("squareBorder");
}

// VOTING CARDS
// THIS IS AN ARRAY OF ALL THE PREFECTSHIP CARDS
const positionvotingCards = Array.from(document.querySelectorAll(".prefects-card"));

// EVENTLISTENERS
// THIS TAKE YOU TO THE PREVIOUS CARD WHEN THE backBtn IS CLICKED
backBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    goBack(e);
  });
});

// THIS TAKE YOU TO THE NEXT CARD WHEN THE netxBtn IS CLICKED
netxBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetParentElement = e.target.parentElement.parentElement;
    nextPosition(e);
    handleProgressBar(targetParentElement);
    if (targetParentElement.classList.contains("last-card")) {
      progressBarWidth += 10;
      progress();
      console.log("last added", progressBarWidth);
    } else if (targetParentElement.classList.contains("voted") && !targetParentElement.classList.contains("changed")) progress("next");
  });
});

// FUNCTIONS
// ACCUMLATOR (this calculate for the next card or previous card)
let acumlator = 0;

// THIS TAKE YOU DIRECTLY TO THE PREFECT YOU WANT TO CHANGE AT PREVIEW, WHEN THE INDEX IS GIVEN
const changePrefect = (index) => {
  hideCard(acumlator);
  displayCard(index);
  positionvotingCards[index].classList.add("changed");
  acumlator--;
};

// THIS FUNCTION SHOWS OR DISPLAY THE NEXT CARD WHEN THE next OR THE nextPosition FUNCTION IS CALLED OR WHEN THE netxBtn IS CLICKED
function displayCard(parameter) {
  // positionvotingCards[parameter].style.visibility = "visible";
  positionvotingCards[parameter].style.display = "block";
  positionvotingCards[parameter].style.zIndex = 1;
  positionvotingCards[parameter].style.opacity = 1;
}

// THIS FUNCTION HIDES THE CURRENT CARD WHEN backBtn IS CLICKED
function hideCard(parameter) {
  // positionvotingCards[parameter].style.visibility = "hidden";
  positionvotingCards[parameter].style.display = "none";
  positionvotingCards[parameter].style.zIndex = 0;
  positionvotingCards[parameter].style.opacity = 0;
}

// DETERMINS WHICH CARD OR THE PREVIOUS CARD WHEN THE backBtn IS CLICKED
function goBack(e) {
  const targetParentCard = e.target.parentElement.parentElement;
  hideCard(acumlator);
  acumlator--;
  if (acumlator <= 0) acumlator = 0;
  displayCard(acumlator);
  if (targetParentCard.classList.contains("last-preview")) {
    progressBarWidth -= 10;
    progress();
  } else progress("back");
}

// THIS FUNCTION CALLS THE NEXT FUNCTION WHEN CALLED
const nextCard = (card) => {
  next(card);
};

// POSITION
// HIDE ALL THE PREFECTSHIP CARDS
positionvotingCards.forEach((card) => (card.style.display = "none"));

// DISPLAYS THE FIRST CARD WHEN THE PAGE IS LOADED
displayCard(acumlator);

// DETERMINS WHICH CARD TO DISPLAY IF YOU'VE VOTED, ELSE SHOW A MESSAGE IF NOT VOTED WHEN THE netxBtn IS CLICKED
function nextPosition(event) {
  if (!event.target.parentElement.parentElement.classList.contains("voted")) {
    displayModal();
  } else {
    /* give the first card a lower index  */
    hideCard(acumlator);
    if (acumlator === positionvotingCards.length - 1) {
      acumlator = positionvotingCards.length - 1;
    } else acumlator++;
    /* give the next card a higher index */
    displayCard(acumlator);
    /* display the backBtn */
    backBtn.forEach((btn) => (btn.style.visibility = "visible"));
  }
}

// MOVE TO THE NEXT CARD WHEN INVOKED BY ADDING 1 TO THE ACCUMLATOR AND DISPLAY IT WITH THE displayCard FUNCTION
function next(card) {
  hideCard(acumlator);
  if (acumlator === positionvotingCards.length - 1) {
    acumlator = positionvotingCards.length - 1;
  } else acumlator++;
  displayCard(acumlator);
  backBtn.forEach((btn) => (btn.style.visibility = "visible"));
  handleProgressBar(card);
  if (card !== undefined && card.classList.contains("last-card")) {
    progressBarWidth += 10;
    progress();
  } else if (card !== undefined && !card.classList.contains("changed")) progress("next");
}

// THIS SHOW THE PERCENTAGE OF PROGRESS WHEN PREFECT IS CHANGED AT PREVIEW
function handleProgressBar(target) {
  if (target !== undefined && target.dataset.section === "boys" && target.classList.contains("changed")) {
    progressBarWidth = 40;
    progress();
    target.classList.remove("changed");
    console.log(target);
  } else if (target !== undefined && target.dataset.section === "girls" && target.classList.contains("changed")) {
    progressBarWidth = 95;
    progress();
    target.classList.remove("changed");
    console.log(target);
  }
}

// PREVIEW
// CHANGE YOUR VOTE WHEN THE PREFECT TITLE IS CLICKED
preview.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.portfolioId === "schoolPrefectBoys") {
      progressBarWidth = Math.floor(0 * percent);
      disableBackBtn(0);
      progress();
      changePrefect(0);
    } else if (card.dataset.portfolioId === "compoundOversearBoys") {
      progressBarWidth = Math.floor(1 * percent);
      progress();
      disableBackBtn(1);
      changePrefect(1);
    } else if (card.dataset.portfolioId === "dininghallBoys") {
      progressBarWidth = Math.floor(2 * percent);
      disableBackBtn(2);
      progress();
      changePrefect(2);
    } else if (card.dataset.portfolioId === "libraryBoys") {
      progressBarWidth = Math.floor(3 * percent);
      disableBackBtn(3);
      progress();
      changePrefect(3);
    } else if (card.dataset.portfolioId === "healthBoys") {
      progressBarWidth = Math.floor(4 * percent);
      disableBackBtn(4);
      progress();
      changePrefect(4);
    } else if (card.dataset.portfolioId === "protocolBoys") {
      progressBarWidth = Math.floor(5 * percent);
      disableBackBtn(5);
      progress();
      changePrefect(5);
    } else if (card.dataset.portfolioId === "prepBoys") {
      progressBarWidth = Math.floor(6 * percent);
      disableBackBtn(6);
      progress();
      changePrefect(6);
    } else if (card.dataset.portfolioId === "sportsBoys") {
      progressBarWidth = Math.floor(7 * percent);
      disableBackBtn(7);
      progress();
      changePrefect(7);
    } else if (card.dataset.portfolioId === "entertainmentBoys") {
      progressBarWidth = Math.floor(8 * percent);
      disableBackBtn(8);
      progress();
      changePrefect(8);
    } else if (card.dataset.portfolioId === "schoolPrefectGirls") {
      progressBarWidth = Math.floor(9 * percent);
      disableBackBtn(10);
      progress();
      changePrefect(10);
    } else if (card.dataset.portfolioId === "compoundoversearGirls") {
      progressBarWidth = Math.floor(10 * percent);
      disableBackBtn(11);
      progress();
      changePrefect(11);
    } else if (card.dataset.portfolioId === "dininghallGirls") {
      progressBarWidth = Math.floor(11 * percent);
      disableBackBtn(12);
      progress();
      changePrefect(12);
    } else if (card.dataset.portfolioId === "libraryGirls") {
      progressBarWidth = Math.floor(12 * percent);
      disableBackBtn(13);
      progress();
      changePrefect(13);
    } else if (card.dataset.portfolioId === "healthGirls") {
      progressBarWidth = Math.floor(13 * percent);
      disableBackBtn(14);
      progress();
      changePrefect(14);
    } else if (card.dataset.portfolioId === "protocolGirls") {
      progressBarWidth = Math.floor(14 * percent);
      disableBackBtn(15);
      progress();
      changePrefect(15);
    } else if (card.dataset.portfolioId === "prepGirls") {
      progressBarWidth = Math.floor(15 * percent);
      disableBackBtn(16);
      progress();
      changePrefect(16);
    } else if (card.dataset.portfolioId === "sportsGirls") {
      progressBarWidth = Math.floor(16 * percent);
      disableBackBtn(17);
      progress();
      changePrefect(17);
    } else if (card.dataset.portfolioId === "entertainmentGirls") {
      progressBarWidth = Math.floor(17 * percent);
      disableBackBtn(18);
      progress();
      changePrefect(18);
    }
  });
});

// REMOVE backBtn WHEN CHANGING VOTE
function disableBackBtn(index) {
  if (index === 0 || index === 10) {
    return;
  } else {
    positionvotingCards[index].lastElementChild.lastElementChild.previousElementSibling.style.visibility = "hidden";
  }
}

// netxBtn ON THE PREVIEW CARD (it let the preview card to skip the check of voted attribute on the card)
previewBtn.addEventListener("click", () => {
  setTimeout(nextCard, 300);
  progress("next");
});

// *** MODAL DISPLAY
function displayModal() {
  document.removeEventListener("click", removeModal);
  close.removeEventListener("click", closeModal);
  modal.style.display = "block";
  modalContainer.classList.add("not-vote");
  modalTextContainer.innerHTML = `<p>Sorry, you have to vote to continue.</p>`;
  document.addEventListener("click", (e) => {
    removeModal(e);
  });
  close.addEventListener("click", () => closeModal());
}

// REMOVE MODAL WHEN A BLANK SPACE IS CLICKED
function removeModal(e) {
  if (e.target.classList.contains("modal-background")) {
    modal.style.display = "none";
  }
}

// REMOVE MODAL WHEN CLOSE BTN IS CLICKED
function closeModal() {
  modal.style.display = "none";
}

document.addEventListener("click", removeModal);
close.addEventListener("click", closeModal);

// console.log(navigation.canGoBack);
// console.log(navigation)
// console.log(navigator)
