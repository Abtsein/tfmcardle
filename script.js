let solutionCard;
let attempts = 0;
let gameMode = localStorage.getItem("gameMode") || "infinite";
let viewMode = localStorage.getItem("viewMode") || "normal";
let showMatches = localStorage.getItem("showMatches") || "show";
let gameResult = [];
let selectedIndex = -1;
let solutionFromCode = null;
let cardCode = null;
let numberOfCodes = 1;
let guessedCards = [];
let matchesRemaining = [...cards];

const debugSolution = document.getElementById("debug-solution");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");
const searchCardCode = document.getElementById("search-card-code");
const resultsCardCode = document.getElementById("results-card-code");
const enterCardCodeInput = document.getElementById("enter-card-code");
const history = document.getElementById("history");
const matchesCount = document.getElementById("matchesCount");
const cardsPlayed = document.getElementById("cards-list");
const key = 769;
const MAX_ATTEMPTS = 5;
const FORCED_SOLUTION_NAME = null;
const acronyms = {
  "psc": "Power Supply Consortium",
  "dwh": "Deep Well Heating",
  "se": "Space Elevator",
  "aaa": "Aerobraked Ammonia Asteroid",
  "lht": "Local Heat Trapping",
  "nra": "Nitrogen-Rich Asteroid",
  "ics": "Interstellar Colony Ship",
  "bi": "Building Industries",
  "ro": "Research Outpost",
  "subres": "Subterranean Reservoir",
  "gsm": "Giant Space Mirror",
  "lc": "Large Convoy",
  "eo": "Earth Office",
  "stech": "Standard Technology",
  "steve": "Standard Technology",
  "ec": "Earth Catapult",
  "dets": "Underground Detonations",
  "gh": "Greenhouses",
  "oa": "Optimal Aerobraking",
  "ez": "Ecological Zone",
  "ecozone": "Ecological Zone",
  "swp": "Solar Wind Power",
  "tom": "Cloud Seeding",
  "gia": "Giant Ice Asteroid",
  "aa": "Arctic Algae",
  "nrb": "Nitrite Reducing Bacteria",
  "habs": "Protected Habitats",
  "selfsabo": "Protected Habitats",
  "wsp": "Water Splitting Plant",
  "bpd": "Black Polar Dust",
  "bfat": "Beam from a Thorium Asteroid",
  "tg": "Terraforming Ganymede",
  "tggg": "Terraforming Ganymede",
  "nz": "Nuclear Zone",
  "nuke": "Nuclear Zone",
  "gc": "Ganymede Colony",
  "amc": "Asteroid Mining Consortium",
  "cows": "Livestock",
  "agt": "Anti-Gravity Technology",
  "pv": "Protected Valley",
  "pi": "Power Infrastructure",
  "ecf": "Extreme-Cold Fungus",
  "sats": "Satellites",
  "am": "Asteroid Mining",
  "sfl": "Search for Life",
  "wife": "Water Import from Europa",
  "ra": "Restricted Area",
  "thread": "Tundra Farming"
};

const victoryModal = document.getElementById("victory-modal");
const victoryMessage = document.getElementById("victory-message");
const victoryCardImage = document.getElementById("victory-card-image");
const shareButton = document.getElementById("share-button");
const closeButton = document.getElementById("close-button");

const randomCodeButton = document.getElementById("random-code");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

const defeatModal = document.getElementById("defeat-modal");
const defeatMessage = document.getElementById("defeat-message");
const defeatCardImage = document.getElementById("defeat-card-image");
const closeDefeatButton = document.getElementById("close-defeat-button");

const infoButton = document.getElementById("info-button");
const infoModal = document.getElementById("info-modal");
const closeInfo = document.getElementById("close-info");

const menuButton = document.getElementById("menu-button");
const menuModal = document.getElementById("menu-modal");
const closeMenu = document.getElementById("close-menu");

const giveUpButton = document.getElementById("give-up-button");
const newGameButton = document.getElementById("new-game-button");
const randomCardButton = document.getElementById("random-card-button");

const tagImages = {
  Building: "images/tags/building.png",
  Space: "images/tags/space.png",
  Science: "images/tags/science.png",
  Power: "images/tags/power.png",
  Earth: "images/tags/earth.png",
  Jovian: "images/tags/jovian.png",
  City: "images/tags/city.png",
  Plant: "images/tags/plant.png",
  Microbe: "images/tags/microbe.png",
  Animal: "images/tags/animal.png",
  Wild: "images/tags/wild.png",
  None: "images/symbols/none.png"
};

const effectImages = {
  MC: "images/effects/mc.png",
  Steel: "images/effects/steel.png",
  Titanium: "images/effects/titanium.png",
  Plant: "images/effects/plant.png",
  Energy: "images/effects/energy.png",
  Heat: "images/effects/heat.png",

  MCprod: "images/effects/mc_prod.png",
  Steelprod: "images/effects/steel_prod.png",
  Titaniumprod: "images/effects/titanium_prod.png",
  Plantprod: "images/effects/plant_prod.png",
  Energyprod: "images/effects/energy_prod.png",
  Heatprod: "images/effects/heat_prod.png",

  negMC: "images/effects/mc_neg.png",
  negSteel: "images/effects/steel_neg.png",
  negTitanium: "images/effects/titanium_neg.png",
  negPlant: "images/effects/plant_neg.png",
  negEnergy: "images/effects/energy_neg.png",
  negHeat: "images/effects/heat_neg.png",

  negMCprod: "images/effects/mc_neg_prod.png",
  negSteelprod: "images/effects/steel_neg_prod.png",
  negTitaniumprod: "images/effects/titanium_neg_prod.png",
  negPlantprod: "images/effects/plant_neg_prod.png",
  negEnergyprod: "images/effects/energy_neg_prod.png",
  negHeatprod: "images/effects/heat_neg_prod.png",

  Special: "images/effects/special.png",
  City: "images/effects/city.png",
  Greenery: "images/effects/greenery.png",
  Ocean: "images/effects/ocean.png",
  Temperature: "images/effects/temperature.png",
  Oxygen: "images/effects/oxygen.png",
  TR: "images/effects/TR.png",

  Microbe: "images/effects/microbe.png",
  Animal: "images/effects/animal.png",
  Card: "images/effects/card.png",
  Reduction: "images/effects/reduction.png",
  VP: "images/effects/VP.png",
  Other: "images/symbols/other.png",
  None: "images/symbols/none.png"
};

const requirementImages = {
  Temperature: "images/effects/temperature.png",
  Oxygen: "images/effects/oxygen.png",
  Oceans: "images/effects/ocean.png",
  Tags: "images/tags/wild.png",
  Other: "images/symbols/other.png",
  None: "images/symbols/none.png"
};

document.querySelectorAll('input[name="mode"]').forEach(input => {
  input.addEventListener('change', (e) => {
    changeGameMode(e.target.value.toLowerCase());
    startGame();
  });
});

document.querySelectorAll('input[name="view"]').forEach(input => {
  input.addEventListener('change', (e) => {
    changeView(e.target.value.toLowerCase());
  });
});

document.querySelectorAll('input[name="matches"]').forEach(input => {
  input.addEventListener('change', (e) => {
    changeShowMatches(e.target.value.toLowerCase());
  });
});

function initializeGame() {
  setupEventListeners();
  startGame();
}

function setupEventListeners() {
  menuButton.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuModal);
  menuModal.addEventListener("click", handleMenuOutsideClick);

  infoButton.addEventListener("click", openInfoModal);
  closeInfo.addEventListener("click", closeInfoModal);
  infoModal.addEventListener("click", handleInfoOutsideClick);

  searchInput.addEventListener("input", handleSearchInput);
  searchInput.addEventListener("keydown", handleSearchKeydown);

  searchCardCode.addEventListener("input", handleSearchInputCardCode);
  searchCardCode.addEventListener("keydown", handleSearchKeydownCardCode);

  shareButton.addEventListener("click", shareResult);
  closeButton.addEventListener("click", closeVictoryModal);
  
  randomCodeButton.addEventListener("click", getRandomCodes);
  plusButton.addEventListener("click", () => changeNumberOfCodes(1));
  minusButton.addEventListener("click", () => changeNumberOfCodes(-1));

  giveUpButton.addEventListener("click", showDefeatModal);
  closeDefeatButton.addEventListener("click", closeDefeatModal);

  defeatModal.addEventListener("click", handleDefeatOutsideClick);
  victoryModal.addEventListener("click", handleVictoryOutsideClick);

  newGameButton.addEventListener("click", startNewGame);

  randomCardButton.addEventListener("click", handleRandomCardClick);

  enterCardCodeInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 11) {
      readCode(e.target.value);
    }
  });
}

function openMenu() {
  menuModal.classList.remove("hidden");
  searchCardCode.placeholder = "Enter card name";
  enterCardCodeInput.placeholder = "Enter code";
  numberOfCodes = 1;
  randomCodeButton.textContent = "Get 1 random card's code";
}

function closeMenuModal() {
  menuModal.classList.add("hidden");
  searchInput.focus();
}

function handleMenuOutsideClick(event) {
  if (event.target === menuModal) {
    closeMenuModal();
  }
}

function changeGameMode(mode) {
  if (gameMode !== mode){
    gameMode = mode;
    localStorage.setItem("gameMode", gameMode);
    document.getElementById("infinite-mode").checked = (gameMode === "infinite");
    document.getElementById("daily-mode").checked = (gameMode === "daily");
  }
}

function changeView(view) {
  if (viewMode !== view){
    viewMode = view;
    localStorage.setItem("viewMode", viewMode);
    
    if (attempts !== 0) {
      document.querySelectorAll(".card-column").forEach(el => {
        if (viewMode === "mobile" && el.id === "card") {
          el.classList.add("hidden");
        } else {
          el.classList.remove("hidden");
        }
      });
      if (viewMode === "mobile") {
        cardsPlayed.classList.remove("hidden");
      } else {
        cardsPlayed.classList.add("hidden");
      }
    }
    updateTableView();
  }
}

function changeShowMatches(show) {
  if (showMatches !== show) {
    showMatches = show;
    localStorage.setItem("showMatches", showMatches);
    matchesCount.style.display = showMatches === "show" ? "block" : "none";
  }
}

function openInfoModal() {
  infoModal.classList.remove("hidden");
}

function closeInfoModal() {
  infoModal.classList.add("hidden");
  searchInput.focus();
}

function handleInfoOutsideClick(event) {
  if (event.target === infoModal) {
    closeInfoModal();
  }
}

function handleSearchInput() {
  const searchText = searchInput.value.toLowerCase();

  results.innerHTML = "";
  selectedIndex = 0;

  if (!searchText) {
    return;
  }

  const acronymMatch = acronyms[searchText]

  const filteredCards = cards
    .filter(card =>
      card.name.toLowerCase().includes(searchText)
    )
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      const positionA = a.name.toLowerCase().indexOf(searchText);
      const positionB = b.name.toLowerCase().indexOf(searchText);
      
      if (positionA !== positionB) {
        return positionA - positionB;
      }

      return nameA.localeCompare(nameB);
    });
  
  if (acronymMatch) {
    acronymCard = cards.find(
        card => card.name === acronymMatch
      );
    filteredCards.unshift(acronymCard);
  }

  filteredCards.slice(0, 5).forEach(card => {
    console.log("Création bouton pour:", card.name);
    const button = createSuggestionButton(card);
    results.appendChild(button);
  });

  updateSelectedSuggestion(results.querySelectorAll(".card"));
}

function createSuggestionButton(card) {
  const button = document.createElement("button");
  button.classList.add("card");

  const name = document.createElement("span");
  name.textContent = card.name;

  button.appendChild(name);
  button.addEventListener("click", () => selectCard(card));

  return button;
}

function handleSearchInputCardCode() {
  const searchText = searchCardCode.value.toLowerCase();

  resultsCardCode.innerHTML = "";
  selectedIndex = 0;

  if (!searchText) {
    return;
  }

  const acronymMatch = acronyms[searchText]

  const filteredCards = cards
    .filter(card =>
      card.name.toLowerCase().includes(searchText)
    )
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      const positionA = a.name.toLowerCase().indexOf(searchText);
      const positionB = b.name.toLowerCase().indexOf(searchText);
      
      if (positionA !== positionB) {
        return positionA - positionB;
      }

      return nameA.localeCompare(nameB);
    });
  
  if (acronymMatch) {
    acronymCard = cards.find(
        card => card.name === acronymMatch
      );
    filteredCards.unshift(acronymCard);
  }

  filteredCards.slice(0, 3).forEach(card => {
    const button = createSuggestionButtonCardCode(card);
    resultsCardCode.appendChild(button);
  });

  updateSelectedSuggestion(resultsCardCode.querySelectorAll(".card"));
}

function createSuggestionButtonCardCode(card) {
  const button = document.createElement("button");
  button.classList.add("card");

  const name = document.createElement("span");
  name.textContent = card.name;

  button.appendChild(name);
  button.addEventListener("click", () => {
    const code = getCode(card);
    searchCardCode.placeholder = "Code copied to clipboard!";
    navigator.clipboard.writeText(code);
    searchCardCode.value = "";
    resultsCardCode.innerHTML = "";
  });
  return button;
}

function getCode(card) {
  const index = cards.findIndex(c => c.name === card.name)
  const primes1 = [17, 23, 31, 41, 47, 59, 67, 73, 83, 97];
  const primes2 = [19, 29, 37, 43, 53, 61, 71, 79, 89, 101];
  const code1 = (index + key) * primes1[Math.floor(Math.random() * primes1.length)];
  const code2 = (index + key) * primes2[Math.floor(Math.random() * primes2.length)];
  const code = `${code1}-${code2}`;
  return code;
}

function getRandomCodes() {
  let clipboard = "";
  const over1 = numberOfCodes !== 1;
  for (let i = 0; i < numberOfCodes; i++) {
    const card = cards[Math.floor(Math.random() * cards.length)];
    if (i > 0) clipboard += "\n";
    clipboard += getCode(card);
  }
  navigator.clipboard.writeText(clipboard);
  randomCodeButton.textContent = `Code${over1 ? "s" : ""} copied to clipboard!`;
  setTimeout(() => {
    const text = `Get ${numberOfCodes} random card${over1 ? "s'" : "'s"} code${over1 ? "s" : ""}`;
    randomCodeButton.textContent = text;
  }, 1000);
}

function changeNumberOfCodes(a) {
  if (numberOfCodes + a > 0 && numberOfCodes + a <= cards.length) {
    numberOfCodes = numberOfCodes + a;
    const over1 = numberOfCodes !== 1;
    const text = `Get ${numberOfCodes} random card${over1 ? "s'" : "'s"} code${over1 ? "s" : ""}`;
    randomCodeButton.textContent = text;
  }
}

function handleSearchKeydown(event) {
  const suggestions = results.querySelectorAll(".card");

  if (suggestions.length === 0) {
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    selectedIndex = (selectedIndex + 1) % suggestions.length;
    updateSelectedSuggestion(suggestions);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    selectedIndex--;

    if (selectedIndex < 0) {
      selectedIndex = suggestions.length - 1;
    }

    updateSelectedSuggestion(suggestions);
  }

  if (event.key === "Enter" && selectedIndex >= 0) {
    event.preventDefault();
    suggestions[selectedIndex].click();
  }
}

function updateSelectedSuggestion(suggestions) {
  suggestions.forEach((suggestion, index) => {
    suggestion.classList.toggle("selected", index === selectedIndex);
  });
}

function handleSearchKeydownCardCode(event) {
  const suggestions = resultsCardCode.querySelectorAll(".card");

  if (suggestions.length === 0) {
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    selectedIndex = (selectedIndex + 1) % suggestions.length;
    updateSelectedSuggestionCardCode(suggestions);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    selectedIndex--;

    if (selectedIndex < 0) {
      selectedIndex = suggestions.length - 1;
    }

    updateSelectedSuggestionCardCode(suggestions);
  }

  if (event.key === "Enter" && selectedIndex >= 0) {
    event.preventDefault();
    suggestions[selectedIndex].click();
  }
}

function updateSelectedSuggestionCardCode(suggestions) {
  suggestions.forEach((suggestion, index) => {
    suggestion.classList.toggle("selected", index === selectedIndex);
  });
}

function selectCard(card) {
  attempts++;
  addGuess(card);

  const result = getGuessResult(card);

  gameResult.push(result);

  searchInput.value = "";
  searchInput.focus();
  searchInput.select();
  results.innerHTML = "";

  if (card.name === solutionCard.name) {
    searchInput.disabled = true;
    matchesCount.style.display = "none";
    showVictoryModal();
    return;
  }

  if (attempts >= MAX_ATTEMPTS) {
    showDefeatModal();
  }
  else {
    searchInput.placeholder = `Guess a card (${attempts + 1}/${MAX_ATTEMPTS})`;
  }
}

function startGame() {
  newGameButton.classList.add("hidden");

  cardCode = null;
  solutionCard = getSolutionCard();
  guessedCards = [];
  cardsPlayed.textContent = "";
  matchesRemaining = [...cards];
  matchesCount.textContent = `Matches remaining: ${matchesRemaining.length}`;
  matchesCount.style.display = showMatches === "show" ? "block" : "none";
  attempts = 0;

  document.querySelectorAll(".card-column").forEach(el => {
    el.classList.add("hidden");
  });

  gameResult = [];
  history.innerHTML = "";
  results.innerHTML = "";
  searchInput.value = "";
  searchInput.disabled = false;
  searchInput.placeholder = "Guess a card (1/5)";

  closeVictoryModal();
  closeDefeatModal();
  showGiveUpButton();
  showRandomButton();

  searchInput.focus();
}

function readCode(code) {
  enterCardCodeInput.value = "";
  if (code.length > 11 || !code.includes("-")) {
    enterCardCodeInput.placeholder = "Invalid code";
    return;
  }
  const [code1, code2] = code.split("-").map(Number);
  if (isNaN(code1) || isNaN(code2)) {
    enterCardCodeInput.placeholder = "Invalid code";
    return;
  }
  const index = calculateGCD(code1, code2) - key;
  if (index > 0 && index <= cards.length) {
    changeGameMode("infinite");
    closeMenuModal();
    solutionFromCode = cards[index];
    startGame();
    cardCode = code;
    solutionFromCode = null;
  } else {
    enterCardCodeInput.placeholder = "Invalid code";
  }
}

function calculateGCD(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function getSolutionCard() {
  if (FORCED_SOLUTION_NAME) {
    const forcedCard = cards.find(
      card => card.name === FORCED_SOLUTION_NAME
    );

    if (forcedCard) {
      return forcedCard;
    }
  }
  
  if (solutionFromCode) {
    return solutionFromCode;
  }

  return gameMode === "daily"
    ? getDailyCard()
    : getRandomCard();
}

function getRandomCard() {
  const availableCards = cards.filter(
    (card) => !guessedCards.some((guessed) => guessed.name === card.name)
  );

  return availableCards[Math.floor(Math.random() * availableCards.length)];
}

function getDailyCard() {
  const parisTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
  
  const dateNumber =
    parisTime.getFullYear() * 10000 +
    (parisTime.getMonth() + 1) * 100 +
    parisTime.getDate();

  return cards[dateNumber % cards.length];
}

function addGuess(card) {
  guessedCards.push(card);
  if (attempts === 1) {
    cardsPlayed.textContent += "Cards played: " + card.name;
  } else {
    cardsPlayed.textContent += ", " + card.name;
  }

  if (attempts === 1) {
    document.querySelectorAll(".card-column").forEach(el => {
        if (viewMode === "mobile" && el.id === "card") {
          el.classList.add("hidden");
        } else {
          el.classList.remove("hidden");
        }
    });
    if (viewMode === "mobile") {
      cardsPlayed.classList.remove("hidden");
    } else {
      cardsPlayed.classList.add("hidden");
    }

  }
  const row = document.createElement("tr");

  row.appendChild(createNameCell(card));
  row.appendChild(createCostCell(card));
  row.appendChild(createColorCell(card));
  row.appendChild(createRequirementCell(card));
  row.appendChild(createTagsCell(card));
  row.appendChild(createEffectsCell(card));

  history.appendChild(row);

  matchesCount.textContent = `Matches remaining: ${matchesRemaining.length}`;
}

function createNameCell(card) {
  const cell = document.createElement("td");
  cell.classList.add("card-column");
  cell.id = "card";

  if (viewMode === "mobile") {
    cell.classList.add("hidden");
  }

  const image = document.createElement("img");
  image.src = card.image;
  image.classList.add("history-card-image");

  cell.appendChild(image);

  return cell;
}

function costCellText(arrow, cost) {
  const fragment = document.createDocumentFragment();
  
  if (viewMode === "mobile") {
    if (arrow === ">") {
      const arrowSpan = document.createElement("span");
      arrowSpan.textContent = "⬆️";
      fragment.appendChild(arrowSpan);
      fragment.appendChild(document.createElement("br"));
      fragment.appendChild(document.createTextNode(cost));
    } else if (arrow === "<") {
      fragment.appendChild(document.createTextNode(cost));
      fragment.appendChild(document.createElement("br"));
      const arrowSpan = document.createElement("span");
      arrowSpan.textContent = "⬇️";
      fragment.appendChild(arrowSpan);
    } else {
      fragment.appendChild(document.createTextNode(cost));
    }
  } else {
    fragment.appendChild(document.createTextNode(cost + " "));
    if (arrow !== "") {
      const arrowSpan = document.createElement("span");
      arrowSpan.textContent = arrow === ">" ? "⬆️" : "⬇️";
      fragment.appendChild(arrowSpan);
    }
  }
  
  return fragment;
}

function createCostCell(card) {
  const cell = document.createElement("td");
  cell.classList.add("card-cost");
  cell.id = "cost";

  if (card.cost === solutionCard.cost) {
    cell.classList.add("correct-info");
    cell.appendChild(costCellText("", card.cost));
    matchesRemaining = matchesRemaining.filter(item =>
      card.cost === item.cost
    );
    return cell;
  }

  cell.classList.add("incorrect-info");

  const arrow = solutionCard.cost > card.cost ? ">" : "<";
  cell.appendChild(costCellText(arrow, card.cost));

  matchesRemaining = matchesRemaining.filter(item =>
    solutionCard.cost > card.cost
    ? item.cost > card.cost
    : item.cost < card.cost
  )

  return cell;
}

function createColorCell(card) {
  const cell = document.createElement("td");
  cell.classList.add("card-color");
  cell.id = "color";

  cell.textContent = viewMode === "mobile" ? card.color.charAt(0).toUpperCase() : card.color;

    if (card.color === solutionCard.color) {
    cell.classList.add("correct-info");
    matchesRemaining = matchesRemaining.filter(item =>
      item.color === card.color
    );
    return cell;
  }

  cell.classList.add("incorrect-info");
  
  matchesRemaining = matchesRemaining.filter(item =>
    item.color !== card.color
  );

  return cell;
}

function createRequirementCell(card) {
  const cell = document.createElement("td");
  cell.id = "requirement";

  const img = document.createElement("img");
  img.src = requirementImages[card.requirement] || requirementImages["None"];
  img.alt = card.requirement;
  img.title = card.requirement;
  img.classList.add(viewMode === "mobile" ? "requirement-image-mobile" : "requirement-image");
  cell.appendChild(img);

  const isCorrect = card.requirement === solutionCard.requirement;
  cell.classList.add(isCorrect ? "correct-info" : "incorrect-info");

  matchesRemaining = matchesRemaining.filter(item => {
    return (item.requirement === card.requirement) === isCorrect;
  });

  return cell;
}

function createTagsCell(card) {
  const cell = document.createElement("td");
  cell.id = "tags";
  const result = compareTags(card.tags, solutionCard.tags);

  displayTags(cell, card.tags, solutionCard.tags);

  cell.classList.add(getComparisonClass(result));

  matchesRemaining = matchesRemaining.filter(item => {
    const itemResult = compareTags(item.tags, card.tags);
    return itemResult.isFullyCorrect === result.isFullyCorrect;
  });

  return cell;
}

function createEffectsCell(card) {
  const cell = document.createElement("td");
  cell.id = "effects";
  const result = compareEffects(card.effects, solutionCard.effects);

  displayEffects(cell, card.effects, solutionCard.effects);

  cell.classList.add(getComparisonClass(result));

  matchesRemaining = matchesRemaining.filter(item => {
    const itemResult = compareEffects(item.effects, card.effects);
    return itemResult.isFullyCorrect === result.isFullyCorrect;
  });

  return cell;
}

function getComparisonClass(result) {
  if (result.isFullyCorrect) {
    return "correct-info";
  }

  if (result.correctCount > 0) {
    return "partial-info";
  }

  return "incorrect-info";
}

function displayTags(cell, tags, solutionTags) {
  const solutionCounts = countOccurrences(solutionTags);
  const usedCounts = {};

  tags.forEach(tag => {
    const container = document.createElement("div");
    container.classList.add("tag-container");

    const image = createIcon(
      tagImages[tag],
      tag, viewMode === "mobile" ? "tag-image-mobile" : "tag-image"
    );

    usedCounts[tag] = (usedCounts[tag] || 0) + 1;

    const isCorrect =
      usedCounts[tag] <= (solutionCounts[tag] || 0);

    const symbol = createSymbol(isCorrect);

    container.appendChild(image);
    container.appendChild(symbol);
    cell.appendChild(container);

    matchesRemaining = matchesRemaining.filter(item => 
      item.tags.includes(tag) === isCorrect
    );
  });
}

function displayEffects(cell, effects, solutionEffects) {
  const usedSolutionIndexes = new Set();
  const shownIncorrectEffects = new Set();

  effects.forEach(effect => {
    let matched = false;
    let matchingIndex = -1;

    for (let index = 0; index < solutionEffects.length; index++) {
      if (
        !usedSolutionIndexes.has(index) &&
        solutionEffects[index] === effect
      ) {
        matchingIndex = index;
        matched = true;
        break;
      }
    }

    if (matchingIndex !== -1) {
      usedSolutionIndexes.add(matchingIndex);
    }

    if (!matched) {
      if (shownIncorrectEffects.has(effect)) {
        return;
      }

      shownIncorrectEffects.add(effect);
    }

    const container = document.createElement("div");
    container.classList.add("tag-container");

    const image = createIcon(
      effectImages[effect],
      effect, viewMode === "mobile" ? "effect-image-mobile" : "effect-image"
    );

    const symbol = createSymbol(matched);

    container.appendChild(image);
    container.appendChild(symbol);
    cell.appendChild(container);

    matchesRemaining = matchesRemaining.filter(item => 
      item.effects.includes(effect) === matched
    );
  });
}

function createIcon(src, alt, className) {
  const image = document.createElement("img");

  image.src = src;
  image.alt = alt;
  image.title = alt;
  image.classList.add(className);

  return image;
}

function createSymbol(isCorrect) {
  const symbol = document.createElement("img");

  symbol.classList.add("symbol-image");
  symbol.src = isCorrect
    ? "images/symbols/checkmark.png"
    : "images/symbols/crossmark.png";
  symbol.alt = isCorrect ? "Correct" : "Incorrect";

  return symbol;
}

function compareTags(proposedTags, solutionTags) {
  const solutionCounts = countOccurrences(solutionTags);
  const proposedCounts = countOccurrences(proposedTags);

  let correctCount = 0;

  Object.keys(proposedCounts).forEach(tag => {
    const proposedAmount = proposedCounts[tag];
    const solutionAmount = solutionCounts[tag] || 0;

    correctCount += Math.min(proposedAmount, solutionAmount);
  });

  const isFullyCorrect =
    proposedTags.length === solutionTags.length &&
    Object.keys(solutionCounts).every(tag =>
      solutionCounts[tag] === (proposedCounts[tag] || 0)
    );

  return {
    correctCount,
    isFullyCorrect
  };
}

function compareEffects(proposedEffects, solutionEffects) {
  const usedSolutionIndexes = new Set();
  let correctCount = 0;

  proposedEffects.forEach(proposedEffect => {
    let matched = false;

    for (let index = 0; index < solutionEffects.length; index++) {
      if (
        !usedSolutionIndexes.has(index) &&
        solutionEffects[index] === proposedEffect
      ) {
        usedSolutionIndexes.add(index);
        matched = true;
        break;
      }
    }

    if (matched) {
      correctCount++;
    }
  });

  const isFullyCorrect =
    proposedEffects.length === solutionEffects.length &&
    correctCount === proposedEffects.length &&
    usedSolutionIndexes.size === solutionEffects.length;

  return {
    correctCount,
    isFullyCorrect
  };
}

function countOccurrences(array) {
  const counts = {};

  array.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
  });

  return counts;
}

function getGuessResult(card) {
  const tagResult = compareTags(card.tags, solutionCard.tags);
  const effectResult = compareEffects(
    card.effects,
    solutionCard.effects
  );

  return [
    getCostResult(card),
    card.color === solutionCard.color ? "🟩" : "🟥",
    card.requirement === solutionCard.requirement ? "🟩" : "🟥",
    getComparisonEmoji(tagResult),
    getComparisonEmoji(effectResult),
    " (",matchesRemaining.length," matches)"
  ].join("");
}

function getCostResult(card) {
  if (card.cost === solutionCard.cost) {
    return "🟩";
  }

  return card.cost < solutionCard.cost ? "⬆️" : "⬇️";
}

function getComparisonEmoji(result) {
  if (result.isFullyCorrect) {
    return "🟩";
  }

  return result.correctCount > 0 ? "🟧" : "🟥";
}

function showVictoryModal() {
  victoryMessage.textContent = "You found the card: ";
  
  const strongElement = document.createElement("strong");
  strongElement.textContent = solutionCard.name;
  victoryMessage.appendChild(strongElement);

  victoryCardImage.src = solutionCard.image;
  victoryCardImage.alt = solutionCard.name;

  victoryModal.classList.remove("hidden");
  victoryModal.classList.add("show");

  hideGiveUpButton();
  hideRandomButton();
  updateNewGameButton();
}

function shareResult() {
  let resultText;

  if (gameMode === "infinite") {
    resultText =
      `Terraforming Mars Cardle
You found the card: ${cardCode ? cardCode : solutionCard.name}

${gameResult.join("\n")}`;
  } else {
    resultText =
      `Terraforming Mars Cardle
You found today's card!

${gameResult.join("\n")}`;
  }

  navigator.clipboard.writeText(resultText).then(() => {
    shareButton.textContent = "Copied to clipboard!";
  });
}

function closeVictoryModal() {
  victoryModal.classList.remove("show");
  victoryModal.classList.add("hidden");
  shareButton.textContent = "Share result";
}

function showDefeatModal() {
  defeatMessage.textContent = solutionCard.name;

  defeatCardImage.src = solutionCard.image;
  defeatCardImage.alt = solutionCard.name;

  defeatModal.classList.remove("hidden");
  defeatModal.classList.add("show");

  searchInput.disabled = true;

  updateNewGameButton();
  hideGiveUpButton();
  hideRandomButton();
}

function closeDefeatModal() {
  defeatModal.classList.remove("show");
  defeatModal.classList.add("hidden");
}

function handleDefeatOutsideClick(event) {
  if (event.target === defeatModal) {
    closeDefeatModal();
  }
}

function handleVictoryOutsideClick(event) {
  if (event.target === victoryModal) {
    closeVictoryModal();
  }
}

function startNewGame() {
  if (gameMode === "infinite") {
    startGame();
  }
}

function updateNewGameButton() {
  const gameFinished =
    victoryModal.classList.contains("show") ||
    defeatModal.classList.contains("show");

  const shouldShow =
    gameMode === "infinite" && gameFinished;

  newGameButton.classList.toggle("hidden", !shouldShow);
}

function hideGiveUpButton() {
  giveUpButton.classList.add("hidden");
}

function showGiveUpButton() {
  giveUpButton.classList.remove("hidden");
}

function hideRandomButton() {
  randomCardButton.classList.add("hidden");
}

function showRandomButton() {
  randomCardButton.classList.remove("hidden");
}

function handleRandomCardClick() {
  if (searchInput.disabled || attempts >= MAX_ATTEMPTS) {
    return;
  }

  const randomCard = getRandomCard();
  selectCard(randomCard);
}

function updateTableView() {
  const rows = history.querySelectorAll("tr");
  
  rows.forEach((row) => {
    const costCell = row.cells[1];
    const costText = costCell.textContent;
    const cost = parseInt(costText.replace(/[⬆️⬇️]/g, ""));
    const arrow = costText.includes("⬆️") ? ">" : costText.includes("⬇️") ? "<" : "";
    costCell.innerHTML = "";
    costCell.appendChild(costCellText(arrow, cost));

    const colorCell = row.cells[2];
    const colorMap = {"R": "Red", "B": "Blue", "G": "Green"};
    const color = colorMap[colorCell.textContent[0]];
    colorCell.textContent = viewMode === "mobile" ? color[0] : color;

    const requirementCell = row.cells[3];
    const reqimg = requirementCell.querySelector("img");
    reqimg.classList.remove("requirement-image", "requirement-image-mobile");
    reqimg.classList.add(viewMode === "mobile" ? "requirement-image-mobile" : "requirement-image");

    const tagsCell = row.cells[4];
    const tagimgs = tagsCell.querySelectorAll("img");
    tagimgs.forEach((tagimg) => {
      tagimg.classList.remove("tag-image", "tag-image-mobile");
      tagimg.classList.add(viewMode === "mobile" ? "tag-image-mobile" : "tag-image");
    })

    const effectsCell = row.cells[5];
    const effectimgs = effectsCell.querySelectorAll("img");
    effectimgs.forEach((effectimg) => {
      effectimg.classList.remove("effect-image", "effect-image-mobile");
      effectimg.classList.add(viewMode === "mobile" ? "effect-image-mobile" : "effect-image");
    })
  });
}

initializeGame();