// VARIABLES
const navigationBtns = document.querySelector(".navigation-btn");
const prefectsListContainer = document.querySelector(".prefects-list-container");
const prefectTitle = document.querySelector(".prefects-position");
const girlsResultsBtn = document.querySelector("#girlsResults");
const boysResultsBtn = document.querySelector("#boysResults");
const dashboard = document.querySelector(".summry");
const resultsDisplay = document.getElementById("resultsDisplay");
const topLeftHeader = document.querySelector(".headding-wrapper");
let count = 0;
const getBoysPrefectsList = [];
const getGirlsPrefectsList = [];

let boysPrefectsList = [boysData.schoolPrefects, boysData.compoundPrefects, boysData.diningHallPrefects, boysData.libraryPrefects, boysData.healthPrefects, boysData.protocolPrefects, boysData.prepPrefects, boysData.sportsPrefects, boysData.entertainmentPrefects];
const boysTitles = ["School Prefect (Boys)", "Compound Oversear (Boys)", "Dining Hall Prefect (Boys)", "Library Prefect (Boys)", "Health Prefect (Boys)", "Protocol Prefect (Boys)", "Prep Prefect (Boys)", "Sports Prefect (Boys)", "Entertainment Prefect (Boys)"];

let girlsPrefectsList = [girlsData.schoolPrefects, girlsData.compoundPrefects, girlsData.diningHallPrefects, girlsData.libraryPrefects, girlsData.healthPrefects, girlsData.protocolPrefects, girlsData.prepPrefects, girlsData.sportsPrefects, girlsData.entertainmentPrefects];
const girlsTitles = ["School Prefect (Girls)", "Compound Oversear (Girls)", "Dining Hall Prefect (Girls)", "Library Prefect (Girls)", "Health Prefect (Girls)", "Protocol Prefect (Girls)", "Prep Prefect (Girls)", "Sports Prefect (Girls)", "Entertainment Prefect (Girls)"];

getData(boysPrefectsList);
getData(girlsPrefectsList);
boysPrefectsList = getBoysPrefectsList;
girlsPrefectsList = getGirlsPrefectsList;

boysPrefectsList.forEach((cat) => {
  cat[0].name += "🥇";
  cat[1].name += "🥈";
});

girlsPrefectsList.forEach((cat) => {
  cat[0].name += "🥇";
  cat[1].name += "🥈";
});

// window.addEventListener("mousemove", (e) => {
//   if (e.y > 570 && e.y < 700) {
//     prefectsListContainer.classList.add("decrease-prefects-list-container");
//     navigationBtns.classList.add("show-navigation-btns");
//   } else {
//     navigationBtns.classList.remove("show-navigation-btns");
//     prefectsListContainer.classList.remove("decrease-prefects-list-container");
//   }
// });

function changeBoysPrefect(cardNumber) {
  prefectsListContainer.innerHTML = "";
  boysPrefectsList[cardNumber].forEach((prefect) => {
    prefectTitle.innerText = boysTitles[cardNumber];
    prefectsListContainer.innerHTML += `
    <section class="prefect">
              <div class="prefect-name" id="name">${prefect.name}</div>
              <figure>
                <img src="${prefect.image}" alt="" width="200" height="200" />
                <p class="position" style="display: none;"></p>
              </figure>
              <div class="number-of-votes-container">
                <p class="votes" id="votes">${prefect.numberOfVotes}</p>
                <p class="votes-percent" id="votesPercent">${prefect.votesPercentage}</p>
              </div>
            </section>
    `;
  });
  // DISPLAY STYLE ON FIRST
  prefectsListContainer.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.innerHTML = "1st";
  prefectsListContainer.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.style.display = "block";
  // DISPLAY STYLE ON SECOND
  prefectsListContainer.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.innerHTML = "2nd";
  prefectsListContainer.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.style.display = "block";
}

function changeGirlsPrefect(cardNumber) {
  prefectsListContainer.innerHTML = "";
  girlsPrefectsList[cardNumber].forEach((prefect) => {
    prefectTitle.innerText = girlsTitles[cardNumber];
    prefectsListContainer.innerHTML += `
    <section class="prefect">
              <div class="prefect-name" id="name">${prefect.name}</div>
              <figure>
                <img src="${prefect.image}" alt="" width="200" height="200" />
                <p class="position" style="display: none;"></p>
              </figure>
              <div class="number-of-votes-container">
                <p class="votes" id="votes">${prefect.numberOfVotes}</p>
                <p class="votes-percent" id="votesPercent">${prefect.votesPercentage}</p>
              </div>
            </section>
    `;
  });
  // DISPLAY STYLE ON FIRST
  prefectsListContainer.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.innerHTML = "1st";
  prefectsListContainer.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.style.display = "block";
  // DISPLAY STYLE ON SECOND
  prefectsListContainer.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.innerHTML = "2nd";
  prefectsListContainer.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.style.display = "block";
}

boysResultsBtn.addEventListener("click", () => display("boys"));

girlsResultsBtn.addEventListener("click", () => display("girls"));

topLeftHeader.lastElementChild.addEventListener("click", () => {
  showDashboard();
});

function showDashboard() {
  dashboard.classList.remove("hide");
  resultsDisplay.classList.remove("show");
}

function hideDashboard() {
  dashboard.classList.add("hide");
  resultsDisplay.classList.add("show");
}

function display(page) {
  if (page === "boys") {
    hideDashboard();
    boysNavigation();
  } else if (page === "girls") {
    hideDashboard();
    girlsNavigation();
  } else {
    showDashboard();
  }
}

// ? THIS INSERT A NEW BTN FOR THE GIRLS RESULTS SECTION
function girlsNavigation() {
  navigationBtns.innerHTML = `<button type="button" class="girls-back-btn"><span><</span></button>
                              <button type="button" class="girls-next-btn"><span>></span></button>`;
  const girlsNextBtn = document.querySelector(".girls-next-btn");
  const girlsBackBtn = document.querySelector(".girls-back-btn");
  count = 0;
  changeGirlsPrefect(count);
  girlsNextBtn.addEventListener("click", () => {
    count > girlsPrefectsList.length - 2 ? console.log("End") : count++;
    changeGirlsPrefect(count);
    // console.log('girlsNext', count);
  });

  girlsBackBtn.addEventListener("click", () => {
    count < 1 ? console.log("End") : count--;
    changeGirlsPrefect(count);
  });
}

// ? THIS INSERT A NEW BTN FOR THE BOYS RESULTS SECTION
function boysNavigation() {
  navigationBtns.innerHTML = `<button type="button" class="boys-back-btn"><span><</span></button>
                              <button type="button" class="boys-next-btn"><span>></span></button>`;
  const boysNextBtn = document.querySelector(".boys-next-btn");
  const boysBackBtn = document.querySelector(".boys-back-btn");
  count = 0;
  changeBoysPrefect(count);
  boysNextBtn.addEventListener("click", () => {
    count > boysPrefectsList.length - 2 ? console.log("End") : count++;
    changeBoysPrefect(count);
    // console.log('boysNext', count);
  });

  boysBackBtn.addEventListener("click", () => {
    count < 1 ? console.log("End") : count--;
    changeBoysPrefect(count);
  });
}

function getData(prefects) {
  let data = [];
  for (let i = 0; i < prefects.length; ) {
    prefects[i].forEach((cart) => data.push(cart));
    sortVotes(data, prefects[i], prefects);
    ++i;
    data = [];
  }
  return prefects;
}

function sortVotes(data, prefects, dataType) {
  let votes = [];
  data.forEach((prefect) => {
    const getNumber = prefect.numberOfVotes.split(" ");
    getNumber.pop();
    votes.push(Number(getNumber));
  });
  votes.sort((a, b) => b - a);
  if (dataType === boysPrefectsList) {
    getBoysPrefectsList.push(sortData(votes, prefects));
  } else if (dataType === girlsPrefectsList) {
    getGirlsPrefectsList.push(sortData(votes, prefects));
  }
  votes = [];
}

function sortData(votes, prefects) {
  const list = [];

  for (let v = 0; v < votes.length; ++v) {
    for (let p = 0; p < prefects.length; ++p) {
      const getNumber = prefects[p].numberOfVotes.split(" ");
      getNumber.pop();
      if (votes[v] === Number(getNumber)) {
        !list.includes(prefects[p]) ? list.push(prefects[p]) : " ";
      }
    }
  }
  return list;
}
