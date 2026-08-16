let solutionCard;
let attempts = 0;
let gameMode = localStorage.getItem("gameMode") || "daily";
let gameResult = [];
let selectedIndex = -1;

const debugSolution = document.getElementById("debug-solution");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");
const history = document.getElementById("history");
const MAX_ATTEMPTS = 5;

const victoryModal = document.getElementById("victory-modal");
const victoryMessage = document.getElementById("victory-message");
const victoryCardImage = document.getElementById("victory-card-image");
const shareButton = document.getElementById("share-button");
const closeButton = document.getElementById("close-button");

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

const dailyModeButton = document.getElementById("daily-mode");
const infiniteModeButton = document.getElementById("infinite-mode");
const currentModeText = document.getElementById("current-mode");

const giveUpButton = document.getElementById("give-up-button");
const newGameButton = document.getElementById("new-game-button");

const tagImages = {
  Building: "images/tags/building.png",
  Space: "images/tags/space.png",
  Science: "images/tags/science.png",
  Energy: "images/tags/power.png",
  Earth: "images/tags/earth.png",
  Jovian: "images/tags/jovian.png",
  City: "images/tags/city.png",
  Plant: "images/tags/plant.png",
  Microbe: "images/tags/microbe.png",
  Animal: "images/tags/animal.png",
  Wild: "images/tags/wild.png"
};

const effectImages = {
  MC: "images/effects/megacredit.png",
  Steel: "images/effects/steel.png",
  Titanium: "images/effects/titanium.png",
  Plant: "images/effects/plant.png",
  Power: "images/effects/power.png",
  Heat: "images/effects/heat.png",

  MCprod: "images/effects/megacredit_prod.png",
  Steelprod: "images/effects/steel_prod.png",
  Titaniumprod: "images/effects/titanium_prod.png",
  Plantprod: "images/effects/plant_prod.png",
  Powerprod: "images/effects/power_prod.png",
  Heatprod: "images/effects/heat_prod.png",

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
  Other: "images/effects/other.png",

  anyHeatprod: "images/effects/any_heat_prod.png",
  anyMC: "images/effects/any_megacredit.png",
  anyMCprod: "images/effects/any_megacredit_prod.png",
  anyPlant: "images/effects/any_plant.png",
  anyPlantprod: "images/effects/any_plant_prod.png",
  anyPowerprod: "images/effects/any_power_prod.png",
  anyPower: "images/effects/any_power.png",
  anyTR: "images/effects/any_TR.png"
};

function initializeGame() {
  setupEventListeners();
  startGame();
  updateModeText();
}

function setupEventListeners() {
  menuButton.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuModal);
  menuModal.addEventListener("click", handleMenuOutsideClick);

  dailyModeButton.addEventListener("click", () => {
    changeGameMode("daily");
  });

  infiniteModeButton.addEventListener("click", () => {
    changeGameMode("infinite");
  });

  infoButton.addEventListener("click", openInfoModal);
  closeInfo.addEventListener("click", closeInfoModal);
  infoModal.addEventListener("click", handleInfoOutsideClick);

  searchInput.addEventListener("input", handleSearchInput);
  searchInput.addEventListener("keydown", handleSearchKeydown);

  shareButton.addEventListener("click", shareResult);
  closeButton.addEventListener("click", closeVictoryModal);

  giveUpButton.addEventListener("click", showDefeatModal);
  closeDefeatButton.addEventListener("click", closeDefeatModal);
  defeatModal.addEventListener("click", handleDefeatOutsideClick);

  newGameButton.addEventListener("click", startNewGame);
}

function openMenu() {
  menuModal.classList.remove("hidden");
  updateModeText();
}

function closeMenuModal() {
  menuModal.classList.add("hidden");
}

function handleMenuOutsideClick(event) {
  if (event.target === menuModal) {
    closeMenuModal();
  }
}

function changeGameMode(mode) {
  gameMode = mode;
  localStorage.setItem("gameMode", gameMode);
  updateModeText();
  startGame();
  closeMenuModal();
}

function updateModeText() {
  const modeName = gameMode === "daily" ? "Daily" : "Infinite";
  currentModeText.textContent = `Current mode: ${modeName}`;
}

function openInfoModal() {
  infoModal.classList.remove("hidden");
}

function closeInfoModal() {
  infoModal.classList.add("hidden");
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

  filteredCards.forEach(card => {
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

function selectCard(card) {
  attempts++;

  const result = getGuessResult(card);

  gameResult.push(result);
  addGuess(card);

  searchInput.value = "";
  searchInput.focus();
  searchInput.select();
  results.innerHTML = "";

  if (card.name === solutionCard.name) {
    searchInput.disabled = true;
    showVictoryModal();
    return;
  }

  if (attempts >= MAX_ATTEMPTS) {
    showDefeatModal();
  }
}

function startGame() {
  newGameButton.classList.add("hidden");

  solutionCard = getSolutionCard();
  attempts = 0;

  gameResult = [];
  history.innerHTML = "";
  results.innerHTML = "";
  searchInput.value = "";
  searchInput.disabled = false;

  hideVictoryModal();
  hideDefeatModal();
  showGiveUpButton();

  searchInput.focus();
}

function getSolutionCard() {
  return gameMode === "daily"
    ? getDailyCard()
    : getRandomCard();
}

function getRandomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function getDailyCard() {
  const today = new Date();

  const dateNumber =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  return cards[dateNumber % cards.length];
}

function addGuess(card) {
  const row = document.createElement("tr");

  row.appendChild(createNameCell(card));
  row.appendChild(createCostCell(card));
  row.appendChild(createColorCell(card));
  row.appendChild(createTagsCell(card));
  row.appendChild(createEffectsCell(card));

  history.appendChild(row);
}

function createNameCell(card) {
  const cell = document.createElement("td");

  const image = document.createElement("img");
  image.src = card.image;
  image.alt = card.name;
  image.classList.add("history-card-image");

  const name = document.createElement("div");
  name.textContent = card.name;

  cell.appendChild(image);
  cell.appendChild(name);

  return cell;
}

function createCostCell(card) {
  const cell = document.createElement("td");
  cell.textContent = card.cost;

  if (card.cost === solutionCard.cost) {
    cell.classList.add("correct-info");
    return cell;
  }

  cell.classList.add("incorrect-info");

  const arrow = document.createElement("span");
  arrow.textContent = solutionCard.cost > card.cost ? "⬆️" : "⬇️";

  cell.appendChild(arrow);

  return cell;
}

function createColorCell(card) {
  const cell = document.createElement("td");
  cell.textContent = card.color;

  cell.classList.add(
    card.color === solutionCard.color
      ? "correct-info"
      : "incorrect-info"
  );

  return cell;
}

function createTagsCell(card) {
  const cell = document.createElement("td");
  const result = compareTags(card.tags, solutionCard.tags);

  displayTags(cell, card.tags, solutionCard.tags);

  cell.classList.add(getComparisonClass(result));

  return cell;
}

function createEffectsCell(card) {
  const cell = document.createElement("td");
  const result = compareEffects(card.effects, solutionCard.effects);

  displayEffects(cell, card.effects, solutionCard.effects);

  cell.classList.add(getComparisonClass(result));

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
      tag,
      "tag-image"
    );

    usedCounts[tag] = (usedCounts[tag] || 0) + 1;

    const isCorrect =
      usedCounts[tag] <= (solutionCounts[tag] || 0);

    const symbol = createSymbol(isCorrect);

    container.appendChild(image);
    container.appendChild(symbol);
    cell.appendChild(container);
  });
}

function displayEffects(cell, effects, solutionEffects) {
  const usedSolutionIndexes = new Set();
  const shownIncorrectEffects = new Set();
  const anyEffectsInSolution = solutionEffects.filter(effect =>
    effect.startsWith("any")
  );

  effects.forEach(effect => {
    let matched = false;
    let matchingIndex = -1;

    for (let index = 0; index < solutionEffects.length; index++) {
      if (
        !usedSolutionIndexes.has(index) &&
        !solutionEffects[index].startsWith("any") &&
        solutionEffects[index] === effect
      ) {
        matchingIndex = index;
        matched = true;
        break;
      }
    }

    if (!matched) {
      const baseEffect = baseEffectName(effect);

      matched = anyEffectsInSolution.some(
        anyEffect => baseEffectName(anyEffect) === baseEffect
      );
    }

    if (!matched && effect.startsWith("any")) {
      const baseEffect = baseEffectName(effect);

      for (let index = 0; index < solutionEffects.length; index++) {
        if (
          !usedSolutionIndexes.has(index) &&
          (
            solutionEffects[index] === baseEffect ||
            solutionEffects[index] === effect
          )
        ) {
          matchingIndex = index;
          matched = true;
          break;
        }
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
      effect,
      "effect-image"
    );

    const symbol = createSymbol(matched);

    container.appendChild(image);
    container.appendChild(symbol);
    cell.appendChild(container);
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
        !solutionEffects[index].startsWith("any") &&
        solutionEffects[index] === proposedEffect
      ) {
        usedSolutionIndexes.add(index);
        matched = true;
        break;
      }
    }

    if (!matched) {
      const proposedBaseEffect = baseEffectName(proposedEffect);

      matched = solutionEffects.some(solutionEffect =>
        solutionEffect.startsWith("any") &&
        baseEffectName(solutionEffect) === proposedBaseEffect
      );
    }

    if (!matched && proposedEffect.startsWith("any")) {
      const proposedBaseEffect = baseEffectName(proposedEffect);

      for (let index = 0; index < solutionEffects.length; index++) {
        if (
          !usedSolutionIndexes.has(index) &&
          (
            solutionEffects[index] === proposedBaseEffect ||
            solutionEffects[index] === proposedEffect
          )
        ) {
          usedSolutionIndexes.add(index);
          matched = true;
          break;
        }
      }
    }

    if (matched) {
      correctCount++;
    }
  });

  const unmatchedConcreteEffects = solutionEffects.filter(
    (solutionEffect, index) =>
      !solutionEffect.startsWith("any") &&
      !usedSolutionIndexes.has(index)
  );

  const isFullyCorrect =
    proposedEffects.length > 0 &&
    correctCount === proposedEffects.length &&
    unmatchedConcreteEffects.length === 0;

  return {
    correctCount,
    isFullyCorrect
  };
}

function baseEffectName(effect) {
  return effect.startsWith("any")
    ? effect.slice(3)
    : effect;
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
    getComparisonEmoji(tagResult),
    getComparisonEmoji(effectResult)
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
  victoryMessage.textContent =
    `You found the card: ${solutionCard.name}`;

  victoryCardImage.src = solutionCard.image;
  victoryCardImage.alt = solutionCard.name;

  victoryModal.classList.remove("hidden");
  victoryModal.classList.add("show");

  hideGiveUpButton();
  updateNewGameButton();
}

function hideVictoryModal() {
  victoryModal.classList.remove("show");
  victoryModal.classList.add("hidden");
}

function shareResult() {
  const resultText =
    `Terraforming Mars Card Guess\n` +
    `You found today's card!\n\n` +
    gameResult.join("\n");

  navigator.clipboard.writeText(resultText).then(() => {
    shareButton.textContent = "Copied to clipboard!";
  });
}

function closeVictoryModal() {
  victoryModal.classList.remove("show");
  victoryModal.classList.add("hidden");
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
}

function hideDefeatModal() {
  defeatModal.classList.remove("show");
  defeatModal.classList.add("hidden");
}

function closeDefeatModal() {
  hideDefeatModal();
}

function handleDefeatOutsideClick(event) {
  if (event.target === defeatModal) {
    closeDefeatModal();
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

initializeGame();
