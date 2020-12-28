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
  'Your frogs have been waiting for you',
  'What\'s hopping, ribbit?',
  'Seen any tasty flies around lately?',
  'All frogs are valuable; rarity is mere human invention.',
  'Are you up for a swim and ribbiting at twilight?',
  'We\'ve gathered some flies for brunch.'
]

var buttonMessages = [
  'Gimme a whirl, hoppity',
  'Receive a frog of destiny',
  'Pull me... if you dare',
  'Meet your new BFF, Best Frog Forever',
  'Pull the bright handle',
  'Pray for your favorite frog'
]
/**
 * Called on page load.
*/
window.onload = function() {
  let messageCenter = document.querySelector("#message-center");
  let button = document.querySelector("#frogpon");
  let visited = localStorage.getItem("visitedBefore");
  if (!visited) {
    document.cookie = "frogponVisit=true";
    messageCenter.innerHTML = "Welcome to Frogpon, stranger!";
  } else {
    messageCenter.innerHTML = "Welcome back to Frogpon, friend!<br />" + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    button.innerHTML = buttonMessages[Math.floor(Math.random() * buttonMessages.length)];
  }

  if (state['loading'] === false) //TODO: doesn't work -- fix later lol
    button.onclick = retrieveCard;

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
  console.log("key name:" + randomKeyName);

  // Add the frog to the user's screen
  addFrog(frog);
  if (!frogExists(randomKeyName)) {
    saveToLibrary(frog, randomKeyName);
  } else {
    // if (frogCount() === cards.length) {
    //   //user has all frogExists
    //   console.log("You have collected all dem frogs!");
    // } else {
    //   //     retrieveCard(); //call again ----
    //   // not sure why i had this. keep for now.
    // }
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
 * Add to HTML inventory
 * @param {object} frog the chosen frog
 * @return {void}
*/
function addFrog(frog) {
  // create div of Frog.
  // this is how the card is added to the main list.
  let frogCard = document.createElement("div");
  frogCard.className = 'card';
  frogCard.innerHTML = "<img src='"+ frog.image +"' alt='Card for " + frog.name + ". Description states, "+ frog.description +"' tabindex='0' / >";
  document.getElementById('card-library').appendChild(frogCard);

  /*
    let url = 'https://raw.githubusercontent.com/jonthornton/MTAPI/master/data/stations.json';
    fetch(url, { method: 'GET'}).then(resp => ( createChildren(resp) )).catch((e) => (console.log(e)));

  */
}
