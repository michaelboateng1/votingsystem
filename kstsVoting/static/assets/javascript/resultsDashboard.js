// // VARIABLES
// const nextResultsBtn = Array.from(document.querySelectorAll(".next-results"));
// const backResultsBtn = Array.from(document.querySelectorAll(".back-results"));

// // VOTING CARDS
// const positionvotingCards = Array.from(document.querySelectorAll(".prefects-card"));

// // ACUMLATORS
// let zIndexNumber = 0;
// let clicksCounter = 0;

// // EVENTLISTENERS
// backResultsBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     positionvotingCards[zIndexNumber].style.zIndex = 0;
//     positionvotingCards[zIndexNumber].style.opacity = 0;
//     zIndexNumber--;
//     if (zIndexNumber <= 0) {
//       zIndexNumber = 0;
//     }
//     positionvotingCards[zIndexNumber].style.zIndex = 1;
//     positionvotingCards[zIndexNumber].style.opacity = 1;
//   });
// });

// positionvotingCards[zIndexNumber].style.zIndex = 2;
// positionvotingCards[zIndexNumber].style.opacity = 1;

// // FUNCTIONS
// const nextResults = () => {
//   nextResultsBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       /* GIVE THE positionCards INDEX 0 A LOWER zINDEX  */
//       positionvotingCards[zIndexNumber].style.zIndex = 0;
//       // positionvotingCards[zIndexNumber].style.zIndex = 0;

//       if (zIndexNumber === positionvotingCards.length - 1) {
//         zIndexNumber = positionvotingCards.length - 1;
//       } else {
//         zIndexNumber++;
//       }

//       /* GIVE THE NEXT INDEX A HIGHER INDEX */
//       positionvotingCards[zIndexNumber].style.zIndex = 2;
//       positionvotingCards[zIndexNumber].style.opacity = 1;

//       // backResultsBtn.forEach((btn) => {
//       //   btn.style.visibility = "visible";
//       // });
//     });
//   });
// };

// // INVOKE FUNCTIONS
// nextResults();

// // DISABLE LAST NEXT BTN
// nextResultsBtn[nextResultsBtn.length - 1].setAttribute("disabled", "");

// console.log("h1");

console.log("you're welcome");

// VARIABLES
const navigationBtns = document.querySelector(".navigation-btn");
const prefectsListContainer = document.querySelector(".prefects-list-container");

window.addEventListener("mousemove", (e) => {
  if (e.y > 570 && e.y < 700) {
    console.log(e.y);
    prefectsListContainer.classList.add("decrease-prefects-list-container");
    navigationBtns.classList.add("show-navigation-btns");
  } else {
    navigationBtns.classList.remove("show-navigation-btns");
    prefectsListContainer.classList.remove("decrease-prefects-list-container");
  }
});
