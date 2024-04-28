// VARIABLES
const uniqueCode = document.querySelector("#code");
const codeForm = document.querySelector(".card__form");
const submitBtn = document.querySelector(".btn");
const codeMessage = document.querySelector(".invalid-code");

// FUNCTIONS
// CHECK IF THE CODE IS INCORRECT AND PREVENT SUBMITION
const invalidCode = (event) => {
  event.preventDefault();
  submitBtn.setAttribute("disable", "");
};

// DISPLAY AN ERROR MESSAGE
const codeError = () => {
  codeMessage.style.display = "block";
  codeMessage.classList.add("code-error");
  setTimeout(() => codeMessage.setAttribute("id", "correctCode"), 3000);
};

// REMOVE AN ERROR MESSAVE
const removeCodeError = () => {
  codeMessage.classList.add("code-error");
  codeMessage.removeAttribute("id", "correctCode");
  codeMessage.style.display = "none";
};

// CALCULATE FOR THE CURRENT YEAR AND RETURN IT
const year = () => {
  const date = new Date();
  return (academicYear = Number(date.getFullYear().toString().substring(2, 4)));
};
document.addEventListener("DOMContentLoaded", () => year());

// EVENTS
// CALL FUNCTIONS WHEN THE SUBMIT BTN IS CLICKED
codeForm.addEventListener("submit", (e) => {
  /* TURN THE CODE INTO AN ARRAY */
  const codeList = uniqueCode.value.split("");
  console.log(codeList);

  /* CHECK IF THE CODE IS A NUMBER*/
  if (Number(isNaN(uniqueCode.value.substring(1)))) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (uniqueCode.value === "") {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (!Number(isNaN(uniqueCode.value[0]))) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (codeList.includes(".") || uniqueCode.value.substring(1) === "Infinity") {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  }

  /* CHECK IF THE CODE IS BELOW  MINIMUM OR ABOVE MAXIMUM */
  if (uniqueCode.value.length < 7 || (uniqueCode.value.length === 7 && Number(uniqueCode.value.substring(4, 5)) < 1)) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (uniqueCode.value.length === 8 && uniqueCode.value.substring(4, 6) < 10) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (uniqueCode.value.length === 9 && uniqueCode.value.substring(4, 7) < 100) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if ((uniqueCode.value.length === 10 && uniqueCode.value.substring(4, 8) < 1000) || Number(uniqueCode.value.length) > 10) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  }

  /* CHECK IF THE YEAR OR DATE IS VALID */
  if (uniqueCode.value.length === 7 && Number(uniqueCode.value.substring(5, 7)) !== year()) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (uniqueCode.value.length === 8 && Number(uniqueCode.value.substring(6, 8)) !== year()) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (uniqueCode.value.length === 9 && Number(uniqueCode.value.substring(7, 9)) !== year()) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (uniqueCode.value.length === 10 && Number(uniqueCode.value.substring(8, 10)) !== year()) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  }

  /* CHECK THE DEPARTMENT THE CODE IS FROM */
  // THE CODE MUST NOT BE ABOVE THE NUMBER OF STUDENTS IN THE DEPARTMENT
  if (
    // GENERAL SCIENCE
    uniqueCode.value[0].toUpperCase() === "S" &&
    uniqueCode.value.length === 10 &&
    Number(uniqueCode.value.substring(4, 8)) > 2000
  ) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (
    // GENERAL ARTS
    uniqueCode.value[0].toUpperCase() === "A" &&
    uniqueCode.value.length === 10 &&
    Number(uniqueCode.value.substring(4, 8)) > 3000
  ) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (
    // BUSINESS
    uniqueCode.value[0].toUpperCase() === "B" &&
    uniqueCode.value.length === 10 &&
    Number(uniqueCode.value.substring(4, 8)) > 1000
  ) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (
    // TECHNICAL
    uniqueCode.value[0].toUpperCase() === "T" &&
    uniqueCode.value.length === 10 &&
    Number(uniqueCode.value.substring(4, 8)) > 4000
  ) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (
    // HOME ECONS
    uniqueCode.value[0].toUpperCase() === "H" &&
    uniqueCode.value.length === 10 &&
    Number(uniqueCode.value.substring(4, 8)) > 5000
  ) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  } else if (
    // VISUAL ARTS
    uniqueCode.value[0].toUpperCase() === "V" &&
    uniqueCode.value.length === 10 &&
    Number(uniqueCode.value.substring(4, 8)) > 1000
  ) {
    invalidCode(e);
    codeError();
    setTimeout(() => removeCodeError(), 4000);
  }
});

// S.year()5.5.year()
// S.465.54.year()
// S.456.657.year()
// S.367.3678.year()
