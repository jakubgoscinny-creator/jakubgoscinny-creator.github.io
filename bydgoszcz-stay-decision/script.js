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
    notes: "Already booked and central, but still the tightest layout for 2 adults and 2 children.",
    verdict: "Keep",
    directUrl: "",
    bookingUrl: "https://www.booking.com/hotel/pl/dream-team-krolowej-jadwigi.html",
    linkNote: "",
    isCurrent: true,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: true,
    decisionRank: 99,
    cardRank: 99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    whyCard: "This is the low-risk baseline, but it is also the smallest layout in the group."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/20/Apartament-Jezuicka-24",
    bookingUrl: "https://www.booking.com/hotel/pl/apartament-jezuicka-24.html",
    linkNote: "",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 1,
    cardRank: 1,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/0/2/256.jpg",
    whyCard: "The best mix of space, area and price in the whole shortlist."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/33/Apartament-Stary-Rynek-34C",
    bookingUrl: "https://www.booking.com/hotel/pl/apartamenty-stary-rynek-bydgoszcz.en-gb.html",
    linkNote: "Booking.com opens the broader Stary Rynek property page.",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 2,
    cardRank: 2,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/3/3/394.jpg",
    whyCard: "A good choice if being in the old town matters more than squeezing out the very best value."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/16/Apartament-Jagiellonska-70",
    bookingUrl: "https://www.booking.com/hotel/pl/bydgoszcz-apartament-jagielloaska-70.en-gb.html",
    linkNote: "",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 3,
    cardRank: 3,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/6/1/165.jpg",
    whyCard: "Probably the best value if Amy can live with a location that is good rather than lovely."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/18/Apartament-Dworcowa-13",
    bookingUrl: "https://www.booking.com/hotel/pl/apartament-dworcowa-13.html",
    linkNote: "",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 4,
    cardRank: 4,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/8/1/238.jpg",
    whyCard: "Less charming than the top two, but still a sensible family upgrade."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/26/Apartament-Stary-Port-115",
    bookingUrl: "https://www.booking.com/hotel/pl/apartament-stary-port-1.html",
    linkNote: "Booking.com opens the Stary Port property page rather than the exact 1/15 unit.",
    isCurrent: false,
    betterThanCurrent: true,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 5,
    cardRank: 5,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/6/2/321.jpg",
    whyCard: "Worth it if Amy wants the nicest setting and the live price still feels fair."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/29/Apartament-Batorego-24C",
    bookingUrl: "https://www.booking.com/hotel/pl/apartamenty-batorego-2.html",
    linkNote: "Booking.com opens the Batorego property page.",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: true,
    decisionRank: 6,
    cardRank: 6,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/9/2/339.jpg",
    whyCard: "A decent option, but it does not solve the space issue as well as the leaders."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/23/Apartamenty-Chwytowo-14",
    bookingUrl: "https://www.booking.com/hotel/pl/apartamenty-chwytowo-14.html",
    linkNote: "",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 7,
    cardRank: 7,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/3/2/294.jpg",
    whyCard: "A useful fallback if the top picks disappear."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/45/Teofila-Magdzinskiego-5AB",
    bookingUrl: "https://www.booking.com/hotel/pl/apartamenty-teofila-magdzinskiego-5.html",
    linkNote: "Booking.com opens the wider Teofila Magdzinskiego 5 listing.",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: false,
    decisionRank: 8,
    cardRank: 8,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/5/4/795.jpg",
    whyCard: "Only worth it if space matters more than being in Amy's preferred area."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/24/Apartament-Grodzka-44",
    bookingUrl: "https://www.booking.com/hotel/pl/apartament-grodzka-4.html",
    linkNote: "Booking.com opens the Grodzka 4 property page rather than the exact 4/4 unit.",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: true,
    bestLocation: true,
    decisionRank: 9,
    cardRank: 9,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/4/2/303.jpg",
    whyCard: "It is big, but not especially sharp value for this trip."
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
    directUrl: "https://booking-bydgoszcz.pl/offer/14/Apartament-Bohaterow-Kragujewca-6-typu-Suite",
    bookingUrl: "https://www.booking.com/hotel/pl/apartament-bohaterow-kragujewca-6.html",
    linkNote: "Booking.com opens the Bohaterow Kragujewca 6 property page.",
    isCurrent: false,
    betterThanCurrent: false,
    kidsPick: false,
    bestLocation: false,
    decisionRank: 10,
    cardRank: 10,
    image: "https://booking-bydgoszcz.pl/images/objects/pictures/large/4/1/99.jpg",
    whyCard: "Only open this if budget starts to matter more than location."
  }
];

const tripDetails = {
  checkin: "2026-07-09",
  checkout: "2026-07-12",
  adults: "2",
  children: ["4", "7"]
};

const currentStay = stays.find((stay) => stay.isCurrent);
const comparisonBody = document.querySelector("#comparisonBody");
const comparisonCount = document.querySelector("#comparisonCount");
const cardsGrid = document.querySelector("#cardsGrid");
const insightsGrid = document.querySelector("#insightsGrid");
const decisionBadge = document.querySelector("#decisionBadge");
const decisionTitle = document.querySelector("#decisionTitle");
const decisionSummary = document.querySelector("#decisionSummary");
const decisionLinks = document.querySelector("#decisionLinks");
const metricBestOption = document.querySelector("#metricBestOption");
const metricSpaceGain = document.querySelector("#metricSpaceGain");
const metricBudgetDelta = document.querySelector("#metricBudgetDelta");
const whySwitch = document.querySelector("#whySwitch");
const whyKeep = document.querySelector("#whyKeep");

const sortBy = document.querySelector("#sortBy");
const betterOnly = document.querySelector("#betterOnly");
const kidsOnly = document.querySelector("#kidsOnly");
const locationOnly = document.querySelector("#locationOnly");

const plnFormatter = new Intl.NumberFormat("pl-PL");

function formatPln(value) {
  return `${plnFormatter.format(value)} PLN`;
}

function formatSignedPln(value) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${formatPln(value)}`;
}

function bookingHref(url) {
  if (!url) {
    return "";
  }

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("checkin", tripDetails.checkin);
    parsed.searchParams.set("checkout", tripDetails.checkout);
    parsed.searchParams.set("group_adults", tripDetails.adults);
    parsed.searchParams.set("no_rooms", "1");
    parsed.searchParams.set("group_children", String(tripDetails.children.length));
    parsed.searchParams.set("selected_currency", "PLN");
    parsed.searchParams.delete("age");
    tripDetails.children.forEach((age) => parsed.searchParams.append("age", age));
    return parsed.toString();
  } catch (error) {
    return url;
  }
}

function verdictClass(verdict) {
  return `is-${verdict.toLowerCase()}`;
}

function getState() {
  return {
    sortBy: sortBy.value,
    betterOnly: betterOnly.checked,
    kidsOnly: kidsOnly.checked,
    locationOnly: locationOnly.checked
  };
}

function getVisibleAlternatives(state) {
  const alternatives = stays.filter((stay) => !stay.isCurrent);

  const filtered = alternatives.filter((stay) => {
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

  return filtered.sort((left, right) => {
    if (state.sortBy === "price") {
      return left.pricePln - right.pricePln;
    }

    if (state.sortBy === "location") {
      return right.locationScore - left.locationScore || left.pricePln - right.pricePln;
    }

    if (state.sortBy === "value") {
      return right.valueScore - left.valueScore || left.pricePln - right.pricePln;
    }

    return left.decisionRank - right.decisionRank;
  });
}

function renderLinks(stay, stacked = false) {
  const links = [];
  const stackedClass = stacked ? " stacked" : "";

  if (stay.bookingUrl) {
    links.push(
      `<a class="link-button is-primary" href="${bookingHref(stay.bookingUrl)}">${stay.linkNote ? "Open on Booking.com (property)" : "Open on Booking.com"}</a>`
    );
  }

  if (stay.directUrl) {
    links.push(
      `<a class="link-button is-secondary" href="${stay.directUrl}">Open direct page</a>`
    );
  }

  if (!links.length) {
    return `<div class="offer-links${stackedClass}"><span class="link-button is-muted">No live link</span></div>`;
  }

  return `
    <div class="offer-links${stackedClass}">
      ${links.join("")}
      ${stay.linkNote ? `<small class="offer-note">${stay.linkNote}</small>` : ""}
    </div>
  `;
}

function updateRecommendation(primary) {
  if (!primary) {
    decisionBadge.textContent = "Keep";
    decisionBadge.className = "decision-badge";
    decisionTitle.textContent = "Keep Dream Team unless a clearly better central option appears.";
    decisionSummary.textContent =
      "With the active filters, nothing visible beats the current booking strongly enough to justify the change.";
    metricBestOption.textContent = "Current booking";
    metricSpaceGain.textContent = "0 m2";
    metricBudgetDelta.textContent = "0 PLN";
    decisionLinks.innerHTML = renderLinks(currentStay);
    whySwitch.textContent =
      "Only switch if Amy gets a clear bump in comfort, not just a different address.";
    whyKeep.textContent =
      "The current booking is already confirmed, central, and easy to fall back on.";
    return;
  }

  const spaceGain = primary.size - currentStay.size;
  const budgetDelta = primary.pricePln - currentStay.pricePln;
  const cheaperOrSimilar = budgetDelta <= 0;

  decisionBadge.textContent = primary.betterThanCurrent ? "Switch" : "Keep";
  decisionTitle.textContent = primary.betterThanCurrent
    ? `If ${primary.name} is still available around this price, I would switch.`
    : "I would keep the current booking unless one of the stronger options comes back.";
  decisionSummary.textContent = primary.betterThanCurrent
    ? `${primary.name} gives Amy about ${spaceGain} extra m2, a better family layout, and ${cheaperOrSimilar ? "a lower" : "a still-manageable"} price screen than the current booking.`
    : `${primary.name} is still worth a look, but it is not a strong enough overall improvement to justify changing the booking.`;
  metricBestOption.textContent = primary.name;
  metricSpaceGain.textContent = `${spaceGain > 0 ? "+" : ""}${spaceGain} m2`;
  metricBudgetDelta.textContent = formatSignedPln(budgetDelta);
  decisionLinks.innerHTML = renderLinks(primary);
  whySwitch.textContent = primary.betterThanCurrent
    ? "It feels much easier for a family of four while keeping the trip in the right part of town."
    : "The only good reason to switch is more space plus a location Amy actually wants.";
  whyKeep.textContent =
    "If the live price moves up sharply, or the best units disappear, Dream Team is still the sensible safe choice.";
}

function renderComparison(rows) {
  comparisonCount.textContent = `Showing ${rows.length} option${rows.length === 1 ? "" : "s"}`;

  comparisonBody.innerHTML = rows
    .map((stay) => {
      const comfortClass = stay.sleepsComfortably ? "is-yes" : "is-no";
      const comfortText = stay.sleepsComfortably ? "Yes" : "No";
      const rowClasses = [stay.isCurrent ? "is-current" : "", stay.betterThanCurrent ? "is-better" : ""]
        .filter(Boolean)
        .join(" ");

      return `
        <tr class="${rowClasses}">
          <td>
            <div class="property-name">
              <strong>${stay.name}</strong>
              <span class="property-meta">${stay.isCurrent ? "Current booking" : "Alternative"}</span>
            </div>
          </td>
          <td>${stay.area}</td>
          <td>
            <strong>${formatPln(stay.pricePln)}</strong>
            <small class="table-type">${stay.priceType}</small>
          </td>
          <td>${stay.size} m2</td>
          <td class="comfort ${comfortClass}">${comfortText}</td>
          <td><span class="score-pill">${stay.locationScore}/5</span></td>
          <td><span class="score-pill">${stay.valueScore}/5</span></td>
          <td class="table-note">${stay.notes}</td>
          <td>${renderLinks(stay, true)}</td>
          <td><span class="verdict ${verdictClass(stay.verdict)}">${stay.verdict}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCards(visibleAlternatives) {
  const topCards = visibleAlternatives
    .slice()
    .sort((left, right) => left.cardRank - right.cardRank)
    .slice(0, 4);

  cardsGrid.innerHTML = topCards
    .map((stay) => {
      return `
        <article class="card">
          <img src="${stay.image}" alt="${stay.name}">
          <div class="card-body">
            <p class="card-meta">${stay.area}</p>
            <h3>${stay.name}</h3>
            <p>${stay.whyCard}</p>
            <div class="card-stats">
              <span class="score-pill">${stay.size} m2</span>
              <span class="score-pill">${formatPln(stay.pricePln)}</span>
              <span class="verdict ${verdictClass(stay.verdict)}">${stay.verdict}</span>
            </div>
            <div class="card-actions">
              ${renderLinks(stay)}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInsights(visibleAlternatives) {
  const alternatives = visibleAlternatives.length ? visibleAlternatives : stays.filter((stay) => !stay.isCurrent);
  const bestUpgrade = alternatives.find((stay) => stay.betterThanCurrent) || stays.find((stay) => stay.id === "jezuicka-24");
  const budgetFallback = stays.find((stay) => stay.id === "bohaterow-suite");
  const propertyMatch = stays.find((stay) => stay.linkNote);

  const notes = [
    {
      label: "Honest read",
      title: "The current booking is not overpriced, but it is cramped.",
      text: `Dream Team is central and already secured, but at ${currentStay.size} m2 it asks a lot from a family of four.`
    },
    {
      label: "Best upgrade",
      title: bestUpgrade.name,
      text: `${bestUpgrade.notes} It is the one I would open first.`
    },
    {
      label: "Budget fallback",
      title: budgetFallback.name,
      text: `${budgetFallback.notes} That only makes sense if price starts to matter more than location.`
    },
    {
      label: "Booking.com note",
      title: "A few links go to the property page, not the exact unit.",
      text: propertyMatch.linkNote
    }
  ];

  insightsGrid.innerHTML = notes
    .map((note) => {
      return `
        <article class="note-card">
          <span class="note-label">${note.label}</span>
          <h3>${note.title}</h3>
          <p>${note.text}</p>
        </article>
      `;
    })
    .join("");
}

function render() {
  const state = getState();
  const visibleAlternatives = getVisibleAlternatives(state);
  const rows = [currentStay, ...visibleAlternatives];
  const primary = visibleAlternatives[0];

  updateRecommendation(primary);
  renderComparison(rows);
  renderCards(visibleAlternatives);
  renderInsights(visibleAlternatives);
}

[sortBy, betterOnly, kidsOnly, locationOnly].forEach((input) => {
  input.addEventListener("change", render);
});

render();
