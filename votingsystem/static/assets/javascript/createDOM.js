window.addEventListener("load", () => {
  // VARIABLES
  // SELECTED PREFECTS (Boys) from preview card
  const schoolPrefectBoy = document.querySelector("#schoolPrefectBoy");
  const compoundOversearBoy = document.querySelector("#compoundOversearBoy");
  const diningPrefectBoy = document.querySelector("#diningPrefectBoy");
  const healthPrefectBoy = document.querySelector("#healthPrefectBoy");
  const protocolPrefectBoy = document.querySelector("#protocolPrefectBoy");
  const prepPrefectBoy = document.querySelector("#prepPrefectBoy");
  const sportsPrefectBoy = document.querySelector("#sportsPrefectBoy");
  const entertainmentPrefectBoy = document.querySelector("#entertainmentPrefectBoy");
  const libraryPrefectBoy = document.querySelector("#libraryPrefectBoy");

  // SELECTED PREFECTS (Girls) from preview card
  const schoolPrefectGirl = document.querySelector("#schoolPrefectGirl");
  const compoundOversearGirl = document.querySelector("#compoundOversearGirl");
  const diningPrefectGirl = document.querySelector("#diningPrefectGirl");
  const healthPrefectGirl = document.querySelector("#healthPrefectGirl");
  const protocolPrefectGirl = document.querySelector("#protocolPrefectGirl");
  const prepPrefectGirl = document.querySelector("#prepPrefectGirl");
  const sportsPrefectGirl = document.querySelector("#sportsPrefectGirl");
  const entertainmentPrefectGirl = document.querySelector("#entertainmentPrefectGirl");
  const libraryPrefectGirl = document.querySelector("#libraryPrefectGirl");

  const STATIC_URL = "https://votingsystem-static.onrender.com/";

  // PREFECTS CARTYGORY VARIABLES (Boys)
  const schoolPrefectsCartBoys = document.querySelectorAll("#schoolPrefectCartBoys");
  const compoundPrefectsCartBoys = document.querySelectorAll("#compoundPrefectCartBoys");
  const diningHallPrefectsCartBoys = document.querySelectorAll("#diningHallPrefectCartBoys");
  const healthPrefectsCartBoys = document.querySelectorAll("#healthPrefectCartBoys");
  const protocolPrefectsCartBoys = document.querySelectorAll("#protocolPrefectCartBoys");
  const prepPrefectsCartBoys = document.querySelectorAll("#prepPrefectCartBoys");
  const sportsPrefectsCartBoys = document.querySelectorAll("#sportsPrefectCartBoys");
  const entertainmentPrefectsCartBoys = document.querySelectorAll("#entertainmentPrefectCartBoys");
  const libraryPrefectsCartBoys = document.querySelectorAll("#libraryPrefectCartBoys");

  // PREFECTS CARTYGORY VARIABLES (Girls)
  const schoolPrefectsCartGirls = document.querySelectorAll("#schoolPrefectCartGirls");
  const compoundPrefectsCartGirls = document.querySelectorAll("#compoundPrefectCartGirls");
  const diningHallPrefectsCartGirls = document.querySelectorAll("#diningHallPrefectCartGirls");
  const healthPrefectsCartGirls = document.querySelectorAll("#healthPrefectCartGirls");
  const protocolPrefectsCartGirls = document.querySelectorAll("#protocolPrefectCartGirls");
  const prepPrefectsCartGirls = document.querySelectorAll("#prepPrefectCartGirls");
  const sportsPrefectsCartGirls = document.querySelectorAll("#sportsPrefectCartGirls");
  const entertainmentPrefectsCartGirls = document.querySelectorAll("#entertainmentPrefectCartGirls");
  const libraryPrefectsCartGirls = document.querySelectorAll("#libraryPrefectCartGirls");

  // FUNCTIONS
  /*
    THIS WILL RECIVE THE SELECTED PREFECT VARIABLE (choosen prefect) FROM PREVIEW AND THE PREFECTSHIP CARD
    THEN ADD IT'S INFO TO THE RECIEVED PREVIEW CARD (prefect) OR CHANGE THE INFO AT PREVIEW WHEN YOU CHANGE PREFECT
  */
  function choosenPrefect(prefect, el) {
    /* SET THE CANDIDATES SRC LINK */
    prefect.lastElementChild.firstElementChild.firstElementChild.setAttribute("src", `${STATIC_URL}${el.parentElement.previousElementSibling.firstElementChild.getAttribute("src")}`);

    /* SET THE CANDIDATES ALT */
    prefect.lastElementChild.firstElementChild.firstElementChild.setAttribute("alt", `${el.previousElementSibling.textContent}`);

    /* DISPLAY THE CANDIDATES NAME */
    prefect.lastElementChild.lastElementChild.firstElementChild.textContent = `${el.previousElementSibling.textContent}`;
  }

  /*
    THIS WILL RECIVE THE TARGETED ELEMENT AND ADD voted TO THE CARD WHEN YOU VOTE 
    AND ADD changed TO THE CARD WHEN YOU CHANGE YOU VOTE AT PREVIEW 
    IT WILL LOOK FOR THE INDEX OF card IN  positionvotingCards AND PASS IT TO hideCard
    TO HIDE IT AND DISPLAY THE PREVIEW CARD
  */
  function addVoted(el) {
    el.parentElement.parentElement.classList.add("voted");
    if (el.parentElement.parentElement.classList.contains("changed")) {
      let card = el.parentElement.parentElement;
      hideCard(positionvotingCards.indexOf(card));
    }
  }

  // THIS WILL CALL nextCard FUNCTION IN 0.5s AND PASS IN THE TARGETED CARD
  const moveToNextCart = (card) => {
    setTimeout(() => nextCard(card), 73);
    // nextCard(card)
  };

  /*
    THIS FUNCTION WILL TAKE THE TARGET AND THE TARGET ELEMENT FORM candidates EVENT
    AND CHECK THE CARTIGORY OF THE TARGET THEN PASS THE ELEMENT AND THE SELECTED PREFECT
    VARIABLE TO choosenPrefect FUNCTION THEN PASS THE TARGET TO addVoted FUNCTION THEN
    PASS THE TARGET PARENT ELEMENT (the card) TO moveToNextCart FUNCTION
  */
  const checkPrefectPort = (target, el) => {
    if (target.classList.contains("boysSP")) {
      choosenPrefect(schoolPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysCO")) {
      choosenPrefect(compoundOversearBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysDH")) {
      choosenPrefect(diningPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysLI")) {
      choosenPrefect(libraryPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysHP")) {
      choosenPrefect(healthPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysPP")) {
      choosenPrefect(protocolPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysPRP")) {
      choosenPrefect(prepPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysSTP")) {
      choosenPrefect(sportsPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("boysEP")) {
      choosenPrefect(entertainmentPrefectBoy, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsSP")) {
      choosenPrefect(schoolPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsCO")) {
      choosenPrefect(compoundOversearGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsDH")) {
      choosenPrefect(diningPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsLI")) {
      choosenPrefect(libraryPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsHP")) {
      choosenPrefect(healthPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsPP")) {
      choosenPrefect(protocolPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsPRP")) {
      choosenPrefect(prepPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsSTP")) {
      choosenPrefect(sportsPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    } else if (target.classList.contains("girlsEP")) {
      choosenPrefect(entertainmentPrefectGirl, el);
      addVoted(target);
      moveToNextCart(target.parentElement.parentElement);
    }
  };

  /*
  FOR EACH ASPIRING PREFECT (candidate) THIS WILL LISTEN FOR THE CLICK EVENT AND PASS
  THE TARGET PREFECT CARD ELEMENT TO THE removeChecked FUNCTION TO REMOVE checked 
  ATTRIBUTE IF ANY THEN IT WILL GIVE THE  checked ATTRIBUTE TO THE SINGLE TARGET PREFECT
  IT WILL ALSO PASS THE TARGET PREFECT AND THE PREFECT ELEMENT TO checkPrefectPort FUNCTION
*/
  candidates.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.alt) {
        removeChecked(e.target.parentElement.parentElement);
        e.target.parentElement.nextElementSibling.lastElementChild.setAttribute("checked", "");
        checkPrefectPort(e.target.parentElement.parentElement, e.target.parentElement.nextElementSibling.lastElementChild);
      } else if (e.target.classList.contains("candidate-name")) {
        removeChecked(e.target.parentElement);
        e.target.lastElementChild.setAttribute("checked", "");
        checkPrefectPort(e.target.parentElement, e.target.lastElementChild);
      } else if (e.target.parentElement.classList.contains("candidate-name")) {
        removeChecked(e.target.parentElement.parentElement);
        e.target.parentElement.lastElementChild.setAttribute("checked", "");
        checkPrefectPort(e.target.parentElement.parentElement, e.target.parentElement.lastElementChild);
      } else if (e.target.previousElementSibling.classList.contains("candidate-name")) {
        removeChecked(e.target.parentElement);
        e.target.previousElementSibling.lastElementChild.setAttribute("checked", "");
        checkPrefectPort(e.target.parentElement, e.target.previousElementSibling.lastElementChild);
      }
    });
  });

  /*
    THIS FUNCTION WILL RECIVE THE TARGETED ASPIRING PREFECT FROM THE CANDIDATES EVENT
    FOR EACH CART (cartygory), THE FUNCTION WILL LOOK FOR THE PREFECTSHIP CARTYGORY VARIABLE (eg: schoolPrefectsCartBoys)
    THEN FOR EACH ASPIRING PREFECT IT WILL REMOVE THE CHECKED ATTRIBUTE
  */
  function removeChecked(target) {
    if (target.classList.contains("boysSP")) {
      schoolPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysCO")) {
      compoundPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysDH")) {
      diningHallPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysLI")) {
      libraryPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysHP")) {
      healthPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysPP")) {
      protocolPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysPRP")) {
      prepPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysSTP")) {
      sportsPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysEP")) {
      entertainmentPrefectsCartBoys.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsSP")) {
      schoolPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsCO")) {
      compoundPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsDH")) {
      diningHallPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsLI")) {
      libraryPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsHP")) {
      healthPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsPP")) {
      protocolPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("boysPRP")) {
      prepPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsSTP")) {
      sportsPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    } else if (target.classList.contains("girlsEP")) {
      entertainmentPrefectsCartGirls.forEach((prefect) => {
        prefect.removeAttribute("checked", "");
      });
    }
  }
});

// CHECK FOR KEYBOARD EVENT
