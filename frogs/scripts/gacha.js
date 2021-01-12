/**
 * Gacha.js contains all the logic for Frogpon.
 * This is the parent javascript file. Other files are
 * supplementary for organization purposes.
 * @owner tono email@email.com
 * @author Kredgons and Crobats, do not use without permission.
 * @year Built 2020
 *
 * @TODO remove all console logs and unnecessary comments.
 * @TODO create a loading state and error state
*/

var cards = FROG_CARDS;
var state = {
  'loading': false,
  'error': false
};

var welcomeMessages = [
  'Your frogs have been waiting for you!',
  'Your frogs have been hopping at the thought of your return!',
  'Your frogs have been ribbiting your name for hours!',
  'What\'s hopping, ribbit?',
  'Seen any tasty flies around lately, hoppity?',
  'All frogs are valuable; rarity is human construct.',
  'Are you for ribbiting at dusk?',
  'We\'ve gathered some flies for brunch.',
  'Are you ready to meet your new BFF, Best Frog Forever?'
]

/**
 * Called on page load.
*/
window.onload = function() {
  let messageCenter = document.querySelector(".message-center");
  let machine = document.querySelector("#frogpon");
  let visited = window.localStorage.getItem("visitedBefore");
  let collectionView = document.querySelector('#saved-cards');

  if (visited) {
    messageCenter.innerHTML = "Welcome back to Frogpon, friend!<br />" + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  } else {
    let clickMe = document.querySelector(".click-me");
    clickMe.style.display = "block";
    clickMe.addEventListener('click', function (e) {
      e.preventDefault;
      retrieveCard();
      onclickBounceAnimation(machine);
      clickMeClose();
      if (window.getComputedStyle(collectionView, null).display === "flex") {
        switchView();
      }
      messageCenter.innerHTML = "Thank you for playing. Support our artists!";
    }, false);

  }

  // document.querySelector("click-me").addEventListener('click', function (e) {
  //   e.style.display="block";
  // }, false)


  if (state['loading'] === false) {
    machine.addEventListener('click', function (e) {
      e.preventDefault;
      retrieveCard();
      onclickBounceAnimation(machine);
      if (!visited) clickMeClose();
      if (window.getComputedStyle(collectionView, null).display === "flex") {
        switchView();
      }
      messageCenter.innerHTML = "Thank you for playing. Support our artists!";
    }, false)
  }

  /* DELETE AFTER TESTING */
  document.querySelector("#clearStorage").addEventListener('click', function(e) {
    localStorage.clear();
    window.location.reload();
    return false;
  });

  document.querySelector("#switch-cards").addEventListener('click', function(e) {
    switchView();
  });

  buildLibraryOnload();
}

/**
 * Called when a user clicks #frogpon button
 * This begins the gacha process. If
 * looking for a bug, start here.
 * @param {none}
 * @return {void}
*/
function retrieveCard() {
  state['loading'] = true;

  //First, get rarity of frog that we'll select
  let frog = getRarity();

  // This works by getting a random index from cards.rarity
  // then re-assigning frog to the random index
  const keys = Object.keys(frog);
  const randomKeyName = keys[Math.floor(Math.random() * keys.length)];
  frog = frog[randomKeyName];

  // Add the frog to the user's screen
  addFrog(frog, randomKeyName);
  if (!frogExists(randomKeyName)) {
    saveToLibrary(frog, randomKeyName);
    newCardModal(frog); //@TODO bug: this modal is called when clicking to see artist credits on something you found this round
  }
}

/**
 * Select rarity between 3 possibilities:
 * "ultra rare", "rare", and "common"
 * @TODO rename "uncommon" to "rare" and "rare" to "ultra rare"
 * @param {none}
 * @return {object} containing all the cards of chosen rarity
*/
function getRarity() {
  let frogRarity = 0;
  let rarityOptions = {
    'rare': 10,
    'uncommon': 35,
    'common': 55
  };

  let chance = Math.floor(Math.random() * 100);

  if (chance < rarityOptions.rare) {
    frogRarity = cards.rare;
    console.log("rare frog picked");
  } else if (chance < rarityOptions.uncommon) {
    frogRarity = cards.uncommon;
    console.log("uncommon frog picked");
  } else {
    frogRarity = cards.common;
    console.log("common frog picked");
  }

  return frogRarity;
}

/**
 * Add to HTML inventory. Creates a div and adds the frog to the front.
 * @param {object} frog the chosen frog
 * @return {void}
*/
function addFrog(frog, frogKey) {
  let frogCard = document.createElement("div");
  frogCard.className = 'card show-artist slide-card';
  frogCard.innerHTML = "<img src='"+ frog.image +"' alt='Card for " + frog.name + ". Description states, "+ frog.description +"' tabindex='0' name="+frogKey+" / >";
  document.getElementById('card-library-content').prepend(frogCard);
  frogCard.onclick = function() {
      artistCreditsModal(frogKey);
  }
  cardAnimation(frogCard);
}

/**
 * Switch the card views.
 * @return {void}
*/
function switchView() {
  let collectionView = document.querySelector('#saved-cards');
  let newCards = document.querySelector('#card-library-content');
  let switchButton = document.querySelector('#switch-cards');

  if (window.getComputedStyle(collectionView, null).display === "none") {
    collectionView.style.display = 'flex';
    newCards.style.display = 'none';
    switchButton.innerHTML = "See all your pulls"
  } else {
    collectionView.style.display = 'none';
    newCards.style.display = 'flex';
    switchButton.innerHTML = "See your collection"

  }


}
