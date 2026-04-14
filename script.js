const stays = [
  {
    id: "dream-team",
    name: "Dream Team Krolowej Jadwigi",
    area: "Krolowej Jadwigi / edge of Wyspa Mlynska",
    pricePln: 1389,
    priceType: "Confirmed 3-night total",
    size: 31,
    sleepsComfortably: false,
    locationScore: 5,
    valueScore: 3,
    notes: "Already booked and central, but it is still the tightest layout for 2 adults and 2 children.",
    verdict: "Keep",
    offerUrl: "",
    offerText: "Booked already",
    isCurrent: true,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: true,
    decisionRank: 99,
    cardRank: 99,
    image: "",
    highlights: ["Confirmed", "Prime walkability", "Smallest footprint"],
    whyCard: "Useful only as the certainty benchmark."
  },
  {
    id: "jezuicka-24",
    name: "Apartament Jezuicka 24",
    area: "Old Town / Wyspa Mlynska",
    pricePln: 708,
    priceType: "Screened 3-night total from listed rate",
    size: 55,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 5,
    notes: "Best all-round move: real family space, old-town feel, and the strongest value screen.",
    verdict: "Upgrade",
    offerUrl: "https://booking-bydgoszcz.pl/offer/20/Apartament-Jezuicka-24",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 1,
    cardRank: 1,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/0/2/256.jpg",
    highlights: ["55 m2", "Old-town walk", "Lowest-risk switch"],
    whyCard: "It fixes the space problem without giving up the atmosphere Amy actually wants."
  },
  {
    id: "stary-rynek-34c",
    name: "Apartament Stary Rynek 3/4C",
    area: "Old Town core",
    pricePln: 897,
    priceType: "Screened 3-night total from listed rate",
    size: 50,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 4,
    notes: "A stronger old-town upgrade if Amy wants the most central feel without overshooting the current spend.",
    verdict: "Upgrade",
    offerUrl: "https://booking-bydgoszcz.pl/offer/33/Apartament-Stary-Rynek-34C",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 2,
    cardRank: 2,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/3/3/394.jpg",
    highlights: ["50 m2", "Market-square address", "Strong location premium"],
    whyCard: "This is the best location-led switch that still looks sensible on price."
  },
  {
    id: "jagiellonska-70",
    name: "Apartament Jagiellonska 70",
    area: "Riverside east / city centre",
    pricePln: 612,
    priceType: "Screened 3-night total from listed rate",
    size: 55,
    sleepsComfortably: true,
    locationScore: 4,
    valueScore: 5,
    notes: "The sharpest value play if Amy accepts a slightly less postcard-perfect micro-location.",
    verdict: "Upgrade",
    offerUrl: "https://booking-bydgoszcz.pl/offer/16/Apartament-Jagiellonska-70",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 3,
    cardRank: 3,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/6/1/165.jpg",
    highlights: ["55 m2", "Best value score", "Lower screening cost"],
    whyCard: "It gives the family much more room for materially less money, with only a small location trade."
  },
  {
    id: "dworcowa-13",
    name: "Apartament Dworcowa 13",
    area: "Centre west / Garbary side",
    pricePln: 672,
    priceType: "Screened 3-night total from listed rate",
    size: 52,
    sleepsComfortably: true,
    locationScore: 4,
    valueScore: 5,
    notes: "Very practical fallback: good size, strong value, and still walkable for family sightseeing.",
    verdict: "Upgrade",
    offerUrl: "https://booking-bydgoszcz.pl/offer/18/Apartament-Dworcowa-13",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 4,
    cardRank: 4,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/8/1/238.jpg",
    highlights: ["52 m2", "Good fallback", "Strong practical fit"],
    whyCard: "Not the prettiest address, but it solves the family layout issue cleanly."
  },
  {
    id: "stary-port-115",
    name: "Apartament Stary Port 1/15",
    area: "Prime riverfront",
    pricePln: 1137,
    priceType: "Screened 3-night total from listed rate",
    size: 52,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 4,
    notes: "Best postcard experience in the shortlist, with enough room and a still-defensible price screen.",
    verdict: "Upgrade",
    offerUrl: "https://booking-bydgoszcz.pl/offer/26/Apartament-Stary-Port-115",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 5,
    cardRank: 5,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/6/2/321.jpg",
    highlights: ["52 m2", "Riverfront", "Best experience pick"],
    whyCard: "This is the location premium that still looks credible against the current booking."
  },
  {
    id: "batorego-24c",
    name: "Apartament Batorego 2/4C",
    area: "Old Town core",
    pricePln: 849,
    priceType: "Screened 3-night total from listed rate",
    size: 40,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 4,
    notes: "Great address and a fair screen price, but the space jump is smaller than the leading upgrades.",
    verdict: "Consider",
    offerUrl: "https://booking-bydgoszcz.pl/offer/29/Apartament-Batorego-24C",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: true,
    decisionRank: 6,
    cardRank: 6,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/9/2/339.jpg",
    highlights: ["40 m2", "Historic core", "Location-led choice"],
    whyCard: "Worth opening if Amy prioritises address over maximum breathing room."
  },
  {
    id: "chwytowo-14",
    name: "Apartamenty Chwytowo 14",
    area: "Garbary fringe",
    pricePln: 747,
    priceType: "Screened 3-night total from listed rate",
    size: 40,
    sleepsComfortably: true,
    locationScore: 4,
    valueScore: 4,
    notes: "Solid middle ground close to Garbary if Amy wants a pragmatic second-choice district.",
    verdict: "Consider",
    offerUrl: "https://booking-bydgoszcz.pl/offer/23/Apartamenty-Chwytowo-14",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 7,
    cardRank: 7,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/3/2/294.jpg",
    highlights: ["40 m2", "Good compromise", "Near Garbary"],
    whyCard: "A smart fallback when the top old-town choices disappear or reprice."
  },
  {
    id: "teofila-5ab",
    name: "Teofila Magdzinskiego 5/A/B",
    area: "Srodmiescie / opera side",
    pricePln: 1347,
    priceType: "Screened 3-night total from listed rate",
    size: 60,
    sleepsComfortably: true,
    locationScore: 3,
    valueScore: 3,
    notes: "Big and family-capable, but the location is less aligned with Amy's preferred walking zones.",
    verdict: "Consider",
    offerUrl: "https://booking-bydgoszcz.pl/offer/45/Teofila-Magdzinskiego-5AB",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 8,
    cardRank: 8,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/5/4/795.jpg",
    highlights: ["60 m2", "Large layout", "Less charming location"],
    whyCard: "Makes sense only if family space matters more than being in the prettiest part of town."
  },
  {
    id: "grodzka-44",
    name: "Apartament Grodzka 4/4",
    area: "Old Town core",
    pricePln: 1563,
    priceType: "Screened 3-night total from listed rate",
    size: 90,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 2,
    notes: "Huge and central, but Amy starts paying for excess space rather than a balanced family upgrade.",
    verdict: "Consider",
    offerUrl: "https://booking-bydgoszcz.pl/offer/24/Apartament-Grodzka-44",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 9,
    cardRank: 9,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/4/2/303.jpg",
    highlights: ["90 m2", "Old-town address", "Overkill for 4"],
    whyCard: "Impressive on paper, but not the sharpest business decision for this family trip."
  },
  {
    id: "bohaterow-suite",
    name: "Apartament Bohaterow Kragujewca 6 typu Suite",
    area: "Szwederowo alternative",
    pricePln: 756,
    priceType: "Screened 3-night total from listed rate",
    size: 40,
    sleepsComfortably: true,
    locationScore: 2,
    valueScore: 3,
    notes: "The clear budget fallback if price starts to dominate the decision and central walkability matters less.",
    verdict: "Consider",
    offerUrl: "https://booking-bydgoszcz.pl/offer/14/Apartament-Bohaterow-Kragujewca-6-typu-Suite",
    offerText: "Open offer",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: false,
    decisionRank: 10,
    cardRank: 10,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/4/1/99.jpg",
    highlights: ["40 m2", "Budget fallback", "Szwederowo base"],
    whyCard: "Only worth a live check if Amy wants a cheaper reset rather than a better central stay."
  }
];

const currentStay = stays.find((stay) => stay.isCurrent);
const plnFormatter = new Intl.NumberFormat("pl-PL");
const comparisonBody = document.querySelector("#comparisonBody");
const rankingList = document.querySelector("#rankingList");
const cardsGrid = document.querySelector("#cardsGrid");
const insightsGrid = document.querySelector("#insightsGrid");
const comparisonCount = document.querySelector("#comparisonCount");

const sortBy = document.querySelector("#sortBy");
const betterOnly = document.querySelector("#betterOnly");
const kidsOnly = document.querySelector("#kidsOnly");
const locationOnly = document.querySelector("#locationOnly");

function formatPln(value) {
  return `${plnFormatter.format(value)} PLN`;
}

function formatSignedPln(value) {
  if (value === 0) {
    return "0 PLN";
  }

  const sign = value > 0 ? "+" : "-";
  return `${sign}${plnFormatter.format(Math.abs(value))} PLN`;
}

function verdictClass(verdict) {
  return `is-${verdict.toLowerCase()}`;
}

function getState() {
  return {
    sort: sortBy.value,
    betterOnly: betterOnly.checked,
    kidsOnly: kidsOnly.checked,
    locationOnly: locationOnly.checked
  };
}

function getVisibleAlternatives(state) {
  const visible = stays.filter((stay) => {
    if (stay.isCurrent) {
      return false;
    }

    if (state.betterOnly && !stay.betterThanCurrent) {
      return false;
    }

    if (state.kidsOnly && !stay.kidsPick) {
      return false;
    }

    if (state.locationOnly && !stay.bestLocation) {
      return false;
    }

    return true;
  });

  const sorters = {
    decision: (a, b) => a.decisionRank - b.decisionRank || a.pricePln - b.pricePln,
    price: (a, b) => a.pricePln - b.pricePln || a.decisionRank - b.decisionRank,
    location: (a, b) => b.locationScore - a.locationScore || a.decisionRank - b.decisionRank,
    value: (a, b) => b.valueScore - a.valueScore || a.decisionRank - b.decisionRank
  };

  return visible.sort(sorters[state.sort]);
}

function renderOfferLink(stay, className = "offer-link") {
  if (!stay.offerUrl) {
    return `<span class="${className} ${className}--muted">${stay.offerText}</span>`;
  }

  return `<a class="${className}" href="${stay.offerUrl}" target="_blank" rel="noreferrer">${stay.offerText}</a>`;
}

function updateDecision(primary) {
  const heroDecisionPill = document.querySelector("#heroDecisionPill");
  const heroDecisionHeading = document.querySelector("#heroDecisionHeading");
  const heroDecisionText = document.querySelector("#heroDecisionText");
  const heroTake = document.querySelector("#heroTake");
  const heroSupport = document.querySelector("#heroSupport");
  const metricBestOption = document.querySelector("#metricBestOption");
  const metricSpaceGain = document.querySelector("#metricSpaceGain");
  const metricBudgetDelta = document.querySelector("#metricBudgetDelta");
  const decisionBadge = document.querySelector("#decisionBadge");
  const decisionTitle = document.querySelector("#decisionTitle");
  const decisionReason = document.querySelector("#decisionReason");
  const whySwitch = document.querySelector("#whySwitch");
  const whyKeep = document.querySelector("#whyKeep");
  const extraNight = document.querySelector("#extraNight");

  if (!primary) {
    heroDecisionPill.textContent = "Keep";
    decisionBadge.textContent = "Keep";
    heroDecisionHeading.textContent = "Keep the current booking unless a stronger live option appears.";
    heroDecisionText.textContent =
      "The active filters remove the strongest click-through alternatives, so the booked stay remains the safest move.";
    heroTake.textContent = "Keep the current booking";
    heroSupport.textContent = "No visible live offer is clearly stronger once the current filters are applied.";
    metricBestOption.textContent = "Current booking";
    metricSpaceGain.textContent = "0 m2";
    metricBudgetDelta.textContent = "0 PLN";
    decisionTitle.textContent = "Keep unless a better-value 50+ m2 option appears live.";
    decisionReason.textContent =
      "With no stronger shortlist items visible, keeping the booked stay avoids churn and protects the preferred zone.";
    whySwitch.textContent = "A switch only makes sense when Amy gains meaningful family space in a better walking location.";
    whyKeep.textContent = "The current booking is already confirmed and still keeps the trip simple.";
    extraNight.textContent =
      "Use the current booking as the cost anchor until a larger central option appears on a live offer page.";
    return;
  }

  const spaceGain = primary.size - currentStay.size;
  const budgetDelta = primary.pricePln - currentStay.pricePln;
  const nightlyEstimate = Math.round(primary.pricePln / 3);

  heroDecisionPill.textContent = primary.betterThanCurrent ? "Switch" : "Keep";
  decisionBadge.textContent = primary.betterThanCurrent ? "Switch" : "Keep";
  heroDecisionHeading.textContent = primary.betterThanCurrent
    ? "The best switch is now real, clickable, and easier to trust."
    : "The visible live offers are useful, but not strong enough to beat the current booking.";
  heroDecisionText.textContent = primary.betterThanCurrent
    ? `${primary.name} adds ${spaceGain} m2 and still screens ${formatSignedPln(budgetDelta)} against the current total before Amy checks the live July rate.`
    : `${primary.name} is worth opening, but it does not improve the family trade-off enough to justify the change.`;
  heroTake.textContent = primary.betterThanCurrent
    ? `Switch if ${primary.name} still prices well live`
    : "Keep unless a sharper-value central apartment appears";
  heroSupport.textContent = primary.betterThanCurrent
    ? "The upside is not just space. Amy can now open the real offer immediately."
    : "The current booking still wins on certainty and risk control.";
  metricBestOption.textContent = primary.name;
  metricSpaceGain.textContent = `${spaceGain > 0 ? "+" : ""}${spaceGain} m2`;
  metricBudgetDelta.textContent = formatSignedPln(budgetDelta);
  decisionTitle.textContent = primary.betterThanCurrent
    ? `Switch if ${primary.name} or a very similar live old-town offer is still bookable.`
    : "Keep the current booking unless a larger central unit appears live under budget.";
  decisionReason.textContent = primary.betterThanCurrent
    ? `${primary.name} is the clearest switch because Amy gets ${spaceGain} extra m2, a stronger family layout, and a real listing page to verify before cancelling the current stay.`
    : "The visible alternatives either weaken the location logic, offer too little extra space, or rely on a weaker value case than the current booking.";
  whySwitch.textContent = primary.betterThanCurrent
    ? "Amy gets a real family-space upgrade and can check the offer page immediately instead of trusting a proxy comp."
    : "Switching only pays off when it improves both comfort and the practical booking path.";
  whyKeep.textContent =
    "If the live July rate jumps materially above the screening number, the certainty of the booked stay becomes the better decision.";
  extraNight.textContent =
    `Use about ${formatPln(nightlyEstimate)} as the first-pass extra-night screen, then confirm the exact July 2026 total on the offer page.`;
}

function renderRanking(visibleAlternatives) {
  const topThree = visibleAlternatives.slice(0, 3);

  if (!topThree.length) {
    rankingList.innerHTML =
      "<div class='ranking-item'><small>No shortlist</small><strong>Current booking wins under the active filters.</strong></div>";
    return;
  }

  rankingList.innerHTML = topThree
    .map((stay, index) => {
      return `
        <article class="ranking-item">
          <small>#${index + 1} recommendation</small>
          <strong>${stay.name}</strong>
          <p>${stay.notes}</p>
          <div class="ranking-meta">
            <span class="score-chip">${formatPln(stay.pricePln)}</span>
            <span class="score-chip">${stay.size} m2</span>
            <span class="score-chip">Location ${stay.locationScore}/5</span>
            <span class="status-chip ${verdictClass(stay.verdict)}">${stay.verdict}</span>
          </div>
          <div class="ranking-actions">
            ${renderOfferLink(stay, "offer-link")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderComparison(rows) {
  comparisonCount.textContent = `Showing ${rows.length} option${rows.length === 1 ? "" : "s"}`;

  comparisonBody.innerHTML = rows
    .map((stay) => {
      const comfortLabel = stay.sleepsComfortably ? "Yes" : "No";
      const comfortClass = stay.sleepsComfortably ? "is-yes" : "is-no";
      const rowClasses = [stay.isCurrent ? "is-current" : "", stay.betterThanCurrent ? "is-better" : ""]
        .filter(Boolean)
        .join(" ");

      return `
        <tr class="${rowClasses}">
          <td class="property-cell">
            <strong>${stay.name}</strong>
            <span>${stay.isCurrent ? "Current benchmark" : "Real public offer"}</span>
          </td>
          <td>${stay.area}</td>
          <td class="table-price">
            <strong>${formatPln(stay.pricePln)}</strong>
            <small>${stay.priceType}</small>
          </td>
          <td>${stay.size}</td>
          <td class="comfort-cell ${comfortClass}">
            ${comfortLabel}
            <span>${stay.sleepsComfortably ? "Works for 4 people" : "Too tight for 3-4 nights"}</span>
          </td>
          <td><span class="score-value">${stay.locationScore}</span>/5</td>
          <td><span class="score-value">${stay.valueScore}</span>/5</td>
          <td class="table-note">${stay.notes}</td>
          <td class="table-offer">${renderOfferLink(stay, "offer-link offer-link--table")}</td>
          <td><span class="table-badge ${verdictClass(stay.verdict)}">${stay.verdict}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCards(visibleAlternatives) {
  const cardPool = visibleAlternatives
    .slice()
    .sort((a, b) => a.cardRank - b.cardRank)
    .slice(0, 5);

  cardsGrid.innerHTML = cardPool
    .map((stay) => {
      return `
        <article class="card-item">
          <img src="${stay.image}" alt="${stay.name}">
          <div class="card-body">
            <span class="card-meta">${stay.area}</span>
            <h3>${stay.name}</h3>
            <p>${stay.notes}</p>
            <div class="card-highlights">
              ${stay.highlights.map((item) => `<span>${item}</span>`).join("")}
            </div>
            <div class="card-why">
              <span class="card-meta">Why it is better or not</span>
              <p>${stay.whyCard}</p>
            </div>
            <div class="card-actions">
              ${renderOfferLink(stay, "offer-link")}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInsights() {
  const alternatives = stays.filter((stay) => !stay.isCurrent);
  const betterOptions = alternatives.filter((stay) => stay.betterThanCurrent);
  const cheapestComfortable = alternatives
    .filter((stay) => stay.sleepsComfortably)
    .sort((a, b) => a.pricePln - b.pricePln)[0];
  const locationPremium = alternatives
    .filter((stay) => stay.bestLocation && stay.pricePln <= currentStay.pricePln)
    .sort((a, b) => a.decisionRank - b.decisionRank)[0];
  const budgetFallback = alternatives.find((stay) => stay.id === "bohaterow-suite");

  const comfortablePrices = alternatives
    .filter((stay) => stay.sleepsComfortably)
    .map((stay) => stay.pricePln)
    .sort((a, b) => a - b);
  const medianComfortable = comfortablePrices[Math.floor(comfortablePrices.length / 2)];
  const extraAboveMedian = currentStay.pricePln - medianComfortable;

  const insightCards = [
    {
      label: "You are not overpaying, but...",
      title: "Amy is paying central-money for one of the smallest layouts in the whole set.",
      text: `The current booking is ${formatSignedPln(extraAboveMedian)} versus the median screened family option, but the bigger issue is space: 31 m2 is the least forgiving plan for a 4-person stay.`
    },
    {
      label: "Best upgrade path",
      title: betterOptions[0].name,
      text: `${betterOptions[0].notes} It is the cleanest move because Amy gets a real click-through offer page and a meaningful family-space upgrade.`
    },
    {
      label: "Best budget downgrade",
      title: budgetFallback.name,
      text: `${budgetFallback.notes} Use it only if spend becomes the priority and central walkability stops mattering.`
    },
    {
      label: "Best location premium",
      title: locationPremium.name,
      text: `${locationPremium.notes} This is the most atmospheric live alternative that still screens below the current confirmed total.`
    },
    {
      label: "Best pure value",
      title: cheapestComfortable.name,
      text: `${cheapestComfortable.notes} It is the cheapest family-fit live page to open first if Amy wants the best value screen.`
    }
  ];

  insightsGrid.innerHTML = insightCards
    .map((insight) => {
      return `
        <article class="insight-card">
          <span class="insight-label">${insight.label}</span>
          <h3>${insight.title}</h3>
          <p>${insight.text}</p>
        </article>
      `;
    })
    .join("");
}

function render() {
  const state = getState();
  const visibleAlternatives = getVisibleAlternatives(state);
  const visibleRows = [currentStay, ...visibleAlternatives];
  const primary = visibleAlternatives[0];

  updateDecision(primary);
  renderRanking(visibleAlternatives);
  renderComparison(visibleRows);
  renderCards(visibleAlternatives);
}

[sortBy, betterOnly, kidsOnly, locationOnly].forEach((input) => {
  input.addEventListener("change", render);
});

renderInsights();
render();
