// GET BOYS PREFECTS CONTAINER
const boysSP = document.getElementById("BoysSP");
const boysCO = document.getElementById("BoysCO");
const boysDH = document.getElementById("BoysDH");
const boysLI = document.getElementById("BoysLI");
const boysHP = document.getElementById("BoysHP");
const boysPP = document.getElementById("BoysPP");
const boysPRP = document.getElementById("BoysPRP");
const boysSTP = document.getElementById("BoysSTP");
const boysEP = document.getElementById("BoysEP");

// GET GIRLS PREFECTS CONTAINER
const girlsSP = document.getElementById("girlsSP");
const girlsCO = document.getElementById("girlsCO");
const girlsDH = document.getElementById("girlsDH");
const girlsLI = document.getElementById("girlsLI");
const girlsHP = document.getElementById("girlsHP");
const girlsPP = document.getElementById("girlsPP");
const girlsPRP = document.getElementById("girlsPRP");
const girlsSTP = document.getElementById("girlsSTP");
const girlsEP = document.getElementById("girlsEP");

const STATIC_URL = "https://votingsystem-static.onrender.com/";

// HEADER TITLE
const header = document.getElementById("header");

// PREVEIW
const boysPreview = document.querySelector(".boys-preview");
const girlsPreview = document.querySelector(".girls-preview");

// INSERT BOYS PREFECTS DATA
boysPrefects.schoolPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysSP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysSP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.compoundPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysCO.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysCO.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.diningHallPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysDH.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysDH.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.libraryPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysLI.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysLI.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.healthPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysHP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysHP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.protocolPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysPP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysPP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.prepPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysPRP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysPRP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.sportsPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysSTP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysSTP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

boysPrefects.entertainmentPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  boysEP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  boysEP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

// INSET GIRLS PREFECTS DATA
girlsPrefects.schoolPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsSP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsSP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.compoundPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsCO.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsCO.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.diningHallPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsDH.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsDH.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.libraryPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsLI.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsLI.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.healthPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsHP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsHP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.protocolPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsPP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsPP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.prepPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsPRP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsPRP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.sportsPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsSTP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsSTP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

girlsPrefects.entertainmentPrefects.forEach((prefect) => {
  const prefectName = prefect.name.split(" ");
  const firstName = prefectName[0].toLowerCase();
  const secondName = prefectName[1].toLowerCase().substring(0, 1).toUpperCase();
  const nameId = firstName + secondName + prefectName[1].toLowerCase().substring(1);

  girlsEP.innerHTML += `<section class="candidate ${prefect.attributes.class}" id="${nameId}">
    <figure class="image">
      <img src="${STATIC_URL}${prefect.image}" alt="${prefect.name}" />
    </figure>
    <div class="candidate-name">
      <h3>${prefect.name}</h3>
      <input type="checkbox" name="${prefect.attributes.name}" id="${prefect.attributes.id}" value="${prefect.name}" />
    </div>

    <p class="candidate-number">#${prefect.number}</p>
  </section> `;

  girlsEP.nextElementSibling.firstElementChild.firstElementChild.innerHTML += `<li class="number-tab"><a href="#${nameId}">#${prefect.number}</a></li>`;
});

// INSERT BOYS PREVIEW LAYOUT
boysPreview.innerHTML = `
<!-- Selected School Prefect (boy) -->
<section class="prefect-review" id="schoolPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="schoolPrefectBoys">Boys Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Compound Oversear (boy) -->
<section class="prefect-review" id="compoundOversearBoy">
  <h3 class="prefect-position" data-portfolio-id="compoundOversearBoys">Compound Oversear</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Dining Hall Prefect (boy) -->
<section class="prefect-review" id="diningPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="dininghallBoys">Dining Hall Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Library Prefect (boy) -->
<section class="prefect-review" id="libraryPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="libraryBoys">Library Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Health Prefect (boy) -->
<section class="prefect-review" id="healthPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="healthBoys">Health Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Protocol Prefect (boy) -->
<section class="prefect-review" id="protocolPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="protocolBoys">Protocol Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Prep Prefect (boy) -->
<section class="prefect-review" id="prepPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="prepBoys">Prep Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Sports Prefect (boy) -->
<section class="prefect-review" id="sportsPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="sportsBoys">Sports Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Entertainment Prefect (boy) -->
<section class="prefect-review" id="entertainmentPrefectBoy">
  <h3 class="prefect-position" data-portfolio-id="entertainmentBoys">Entertainment Prefect</h3>
  <div class="candidate-review boys-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>`;

// INSERT GIRLS PREVIEW LAYOUT
girlsPreview.innerHTML = `
<!-- Selected School Prefect (girl) -->
<section class="prefect-review" id="schoolPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="schoolPrefectGirls">Girls Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Compound Oversear (girl) -->
<section class="prefect-review" id="compoundOversearGirl">
  <h3 class="prefect-position" data-portfolio-id="compoundoversearGirls">Compound Oversear</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Dining Hall Prefect (girl) -->
<section class="prefect-review" id="diningPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="dininghallGirls">Dining Hall Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Library Prefect (girl) -->
<section class="prefect-review" id="libraryPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="libraryGirls">Library Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Health Prefect (girl) -->
<section class="prefect-review" id="healthPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="healthGirls">Health Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Protocol Prefect (girl) -->
<section class="prefect-review" id="protocolPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="protocolGirls">Protocol Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Prep Prefect (girl) -->
<section class="prefect-review" id="prepPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="prepGirls">Prep Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Sports Prefect (girl) -->
<section class="prefect-review" id="sportsPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="sportsGirls">Sports Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>

<!-- Selected Entertainment Prefect (girl) -->
<section class="prefect-review" id="entertainmentPrefectGirl">
  <h3 class="prefect-position" data-portfolio-id="entertainmentGirls">Entertainment Prefect</h3>
  <div class="candidate-review girls-review">
    <figure class="image">
      <img src="" alt="" />
    </figure>
    <div class="candidate-name">
      <h3></h3>
    </div>
  </div>
</section>`;

// INSERT PROGRESS BAR AND TITLE IN HEADER
header.innerHTML = `
<div class="top-titles" id="headerTitle">
        <h1 class="year"></h1>
      </div>

      <div class="progress-bar">
        <div id="progress"><span class="indicator"></span></div>
        <span class="percentage">0% Completed</span>
      </div>`;
