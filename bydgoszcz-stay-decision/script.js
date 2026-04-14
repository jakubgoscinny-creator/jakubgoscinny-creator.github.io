const stays = [
  {
    id: "dream-team",
    name: "Dream Team Królowej Jadwigi",
    area: "Wyspa Młyńska edge",
    pricePln: 1389,
    priceType: "Confirmed",
    size: 31,
    sleepsComfortably: false,
    locationScore: 5,
    valueScore: 3,
    notes: "Already booked and in a preferred zone, but it is the tightest family layout in the set.",
    verdict: "Keep",
    isCurrent: true,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: true,
    decisionRank: 99,
    cardRank: 2,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Confirmed", "Prime walkability", "Smallest footprint"],
    whyCard: "Safe option if Amy values certainty over extra breathing room."
  },
  {
    id: "jezuicka-24",
    name: "Apartament Jezuicka 24",
    area: "Old Town / Wyspa Młyńska",
    pricePln: 1240,
    priceType: "Estimated July total",
    size: 55,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 5,
    notes: "Best balance of central magic, family space and spend discipline.",
    verdict: "Upgrade",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 1,
    cardRank: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: ["55 m²", "Old-town walk", "Budget-friendly upgrade"],
    whyCard: "More space, same atmosphere, and likely a lower total than the current booking."
  },
  {
    id: "jagiellonska-70",
    name: "Apartament Jagiellońska 70",
    area: "Riverside east / city centre",
    pricePln: 1050,
    priceType: "Estimated July total",
    size: 55,
    sleepsComfortably: true,
    locationScore: 4,
    valueScore: 5,
    notes: "The sharpest value play if Amy accepts a slightly less postcard-perfect micro-location.",
    verdict: "Upgrade",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 2,
    cardRank: 3,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    highlights: ["55 m²", "Best value score", "Riverside setting"],
    whyCard: "Big jump in usable space for materially less money than the booked stay."
  },
  {
    id: "dworcowa-13",
    name: "Apartament Dworcowa 13",
    area: "Centre west / Garbary side",
    pricePln: 1200,
    priceType: "Estimated July total",
    size: 52,
    sleepsComfortably: true,
    locationScore: 4,
    valueScore: 4,
    notes: "Family-friendly size and kitchen setup, with a slightly less charming walk than Jezuicka.",
    verdict: "Upgrade",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 3,
    cardRank: 4,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    highlights: ["52 m²", "Good family fit", "Strong fallback"],
    whyCard: "Not the prettiest address, but it solves the space problem without overspending."
  },
  {
    id: "chwytowo-14",
    name: "Apartament Chwytowo 14",
    area: "Garbary fringe",
    pricePln: 1310,
    priceType: "Estimated July total",
    size: 40,
    sleepsComfortably: true,
    locationScore: 4,
    valueScore: 4,
    notes: "Solid middle ground close to Garbary if Amy wants a second-choice neighbourhood.",
    verdict: "Consider",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 4,
    cardRank: 6,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Near Garbary", "Balanced spend", "Good compromise"],
    whyCard: "Worth checking if the very best central options disappear."
  },
  {
    id: "batorego-24c",
    name: "Apartament Batorego 2/4C",
    area: "Old Town core",
    pricePln: 1370,
    priceType: "Estimated July total",
    size: 40,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 3,
    notes: "Excellent historic-core address, but only a moderate space gain against the benchmark.",
    verdict: "Consider",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: true,
    decisionRank: 5,
    cardRank: 7,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: ["40 m²", "Best location", "Near-current spend"],
    whyCard: "A location-led choice, not a value-led one."
  },
  {
    id: "stary-port-115",
    name: "Apartament Stary Port 1/15",
    area: "Prime riverfront",
    pricePln: 1890,
    priceType: "Estimated July total",
    size: 52,
    sleepsComfortably: true,
    locationScore: 5,
    valueScore: 3,
    notes: "Beautiful river address and roomy layout, but Amy pays a clear premium for the view.",
    verdict: "Consider",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 6,
    cardRank: 5,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: ["52 m²", "River view premium", "Best postcard feel"],
    whyCard: "This is the location premium pick if Amy is willing to pay for the view."
  },
  {
    id: "bohaterow-suite",
    name: "Bohaterów Kragujewca 6 Suite",
    area: "Szwederowo alternative",
    pricePln: 1260,
    priceType: "Estimated July total",
    size: 40,
    sleepsComfortably: true,
    locationScore: 2,
    valueScore: 4,
    notes: "Useful budget fallback when price matters more than walking access to the old town.",
    verdict: "Consider",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 7,
    cardRank: 8,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Budget fallback", "40 m²", "Farther out"],
    whyCard: "Makes sense only if Amy wants to save and can trade away the central walk."
  },
  {
    id: "bohaterow-deluxe",
    name: "Bohaterów Kragujewca 6 Deluxe",
    area: "Szwederowo family layout",
    pricePln: 1840,
    priceType: "Estimated July total",
    size: 54,
    sleepsComfortably: true,
    locationScore: 2,
    valueScore: 3,
    notes: "A stronger sleeping setup for kids, but the location penalty is hard to ignore.",
    verdict: "Consider",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 8,
    cardRank: 9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    highlights: ["54 m²", "Best for separated sleep", "Location trade-off"],
    whyCard: "Good only if sleeping separation is the top priority and location is secondary."
  },
  {
    id: "teofila-5ab",
    name: "Teofila Magdzińskiego 5/A/B",
    area: "Śródmieście / music district",
    pricePln: 2240,
    priceType: "Estimated July total",
    size: 60,
    sleepsComfortably: true,
    locationScore: 3,
    valueScore: 2,
    notes: "Spacious, stylish and kid-friendly, but the budget starts to feel premium fast.",
    verdict: "Consider",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 9,
    cardRank: 10,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    highlights: ["60 m²", "Premium spend", "More style than value"],
    whyCard: "The space is strong, but Amy would be paying well above the practical sweet spot."
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

function getVisibleRows(state) {
  return [currentStay, ...getVisibleAlternatives(state)];
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
    heroDecisionHeading.textContent = "Keep the current booking unless a stronger layout appears.";
    heroDecisionText.textContent =
      "The active filters remove the practical switch candidates, so the booked stay remains the safest move.";
    heroTake.textContent = "Keep the current booking";
    heroSupport.textContent = "No visible option is clearly stronger once the current filters are applied.";
    metricBestOption.textContent = "Current booking";
    metricSpaceGain.textContent = "0 m²";
    metricBudgetDelta.textContent = "0 PLN";
    decisionTitle.textContent = "Keep unless a better-value 50+ m² option appears.";
    decisionReason.textContent =
      "With no stronger shortlist items visible, keeping the booked stay avoids churn and protects the preferred location.";
    whySwitch.textContent = "A switch only makes sense when Amy gains meaningful family space near the river core.";
    whyKeep.textContent = "The current booking is already confirmed and keeps the trip simple.";
    extraNight.textContent =
      "Use the current booking as the cost anchor until a larger central option appears at a sensible rate.";
    return;
  }

  const spaceGain = primary.size - currentStay.size;
  const budgetDelta = primary.pricePln - currentStay.pricePln;
  const nightlyEstimate = Math.round(primary.pricePln / 3 / 10) * 10;

  heroDecisionPill.textContent = primary.betterThanCurrent ? "Switch" : "Keep";
  decisionBadge.textContent = primary.betterThanCurrent ? "Switch" : "Keep";
  heroDecisionHeading.textContent = primary.betterThanCurrent
    ? "The best switch buys space, not status."
    : "The visible shortlist is interesting, but not stronger than the current booking.";
  heroDecisionText.textContent = primary.betterThanCurrent
    ? `${primary.name} adds ${spaceGain} m² and keeps Amy near the stronger walking zones without lifting the total budget.`
    : `${primary.name} is worth a look, but it does not improve the overall family trade-off enough to justify change.`;
  heroTake.textContent = primary.betterThanCurrent
    ? `Switch if ${primary.name} is still bookable`
    : "Keep unless a sharper-value central apartment appears";
  heroSupport.textContent = primary.betterThanCurrent
    ? "The strongest upside is family breathing room at roughly the same spend."
    : "The current booking still wins on simplicity and risk control.";
  metricBestOption.textContent = primary.name;
  metricSpaceGain.textContent = `${spaceGain > 0 ? "+" : ""}${spaceGain} m²`;
  metricBudgetDelta.textContent = formatSignedPln(budgetDelta);
  decisionTitle.textContent = primary.betterThanCurrent
    ? `Switch if ${primary.name} or a very similar central flat is available.`
    : "Keep the current booking unless a larger central unit appears under budget.";
  decisionReason.textContent = primary.betterThanCurrent
    ? `Compared with Dream Team, ${primary.name} gives the family ${spaceGain} extra m² and a more practical living setup for ${formatSignedPln(budgetDelta)} versus the current total.`
    : `The current booking still holds up because the visible alternatives either weaken the location or charge too much for the upgrade.`;
  whySwitch.textContent = primary.betterThanCurrent
    ? "Amy gets a genuine family-space upgrade rather than a cosmetic improvement."
    : "Switching only pays off when it improves both comfort and location logic.";
  whyKeep.textContent =
    "If live rates jump above roughly 1450 PLN, the certainty of the booked stay becomes the better business decision.";
  extraNight.textContent =
    `Expect an extra night in the leading shortlist to add about ${formatPln(nightlyEstimate)} before any cleaning or seasonal jump.`;
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
            <span class="score-chip">${stay.size} m²</span>
            <span class="score-chip">Location ${stay.locationScore}/5</span>
            <span class="status-chip ${verdictClass(stay.verdict)}">${stay.verdict}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function verdictClass(verdict) {
  return `is-${verdict.toLowerCase()}`;
}

function renderComparison(rows) {
  comparisonCount.textContent = `Showing ${rows.length} option${rows.length === 1 ? "" : "s"}`;

  comparisonBody.innerHTML = rows
    .map((stay) => {
      const comfortLabel = stay.sleepsComfortably ? "Yes" : "No";
      const comfortClass = stay.sleepsComfortably ? "is-yes" : "is-no";
      const rowClasses = [
        stay.isCurrent ? "is-current" : "",
        stay.betterThanCurrent ? "is-better" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <tr class="${rowClasses}">
          <td class="property-cell">
            <strong>${stay.name}</strong>
            <span>${stay.isCurrent ? "Current benchmark" : "Market comparable"}</span>
          </td>
          <td>${stay.area}</td>
          <td class="table-price">
            <strong>${formatPln(stay.pricePln)}</strong>
            <small>${stay.priceType}</small>
          </td>
          <td>${stay.size}</td>
          <td class="comfort-cell ${comfortClass}">
            ${comfortLabel}
            <span>${stay.sleepsComfortably ? "Good fit for 4" : "Too tight for 3–4 nights"}</span>
          </td>
          <td><span class="score-value">${stay.locationScore}</span>/5</td>
          <td><span class="score-value">${stay.valueScore}</span>/5</td>
          <td class="table-note">${stay.notes}</td>
          <td><span class="table-badge ${verdictClass(stay.verdict)}">${stay.verdict}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCards(visibleAlternatives) {
  const cardPool = [currentStay, ...visibleAlternatives]
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
              <span class="card-meta">Why it's better or not</span>
              <p>${stay.whyCard}</p>
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
    .filter((stay) => stay.bestLocation && stay.pricePln > currentStay.pricePln)
    .sort((a, b) => a.pricePln - b.pricePln)[0];
  const medianComfortable =
    alternatives
      .filter((stay) => stay.sleepsComfortably)
      .map((stay) => stay.pricePln)
      .sort((a, b) => a - b)[Math.floor(alternatives.filter((stay) => stay.sleepsComfortably).length / 2)];
  const extraAboveMedian = currentStay.pricePln - medianComfortable;

  const insightCards = [
    {
      label: "You are not overpaying, but...",
      title: "Amy is paying central-money for one of the smallest family-capable layouts.",
      text: `The current booking sits ${formatSignedPln(extraAboveMedian)} against the median comfortable shortlist, but the real issue is size: 31 m² is the least forgiving plan in the set.`
    },
    {
      label: "Best upgrade path",
      title: betterOptions[0].name,
      text: `${betterOptions[0].notes} It is the cleanest upgrade because it adds space without losing the walking experience.`
    },
    {
      label: "Best budget downgrade",
      title: cheapestComfortable.name,
      text: `${cheapestComfortable.notes} Choose it only if Amy wants lower spend more than an old-town doorstep.`
    },
    {
      label: "Best location premium",
      title: locationPremium.name,
      text: `${locationPremium.notes} This is the answer if Amy wants the most atmospheric setting and accepts paying above the benchmark.`
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
