/**
 * Gacha.js contains all the logic for Frogpon.
 * This is the parent javascript file. Other files are
 * supplementary for organization purposes.

 * @author Kredgons and Crobats, do not use without permission.
 * @TODO remove all console logs and unnecessary comments.
*/

var cards = FROG_CARDS;

/**
 * @TODO create a loading state
*/
let state = {
  'loading': false,
  'error': false
};

/**
 * Called on page load.
*/
window.onload = function() {
  console.log(document.cookie)
  let messageCenter = document.querySelector("#message-center");
  if (!document.cookie) {
    document.cookie = "frogponVisit=true";
    messageCenter.innerHTML = "Welcome to Frogpon, stranger!";
  } else {
    messageCenter.innerHTML = "Welcome back to Frogpon, friend!<br /> Your frogs have been waiting for you.";
  }

  let frogpon = document.querySelector('#frogpon');
  if (state['loading'] === false) //TODO: doesn't work -- fix later lol
    frogpon.onclick = retrieveCard;
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
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  frog = frog[randomIndex];
  console.log(frog);

  // Add the frog to the user's screen
  addFrog(frog);

  saveToLibrary(frog);

  // if (/*do not have frog*/) {
  //
  // } else { /*have frog*/
  //   if (/*has all frogs*/) {
  //     alert("You've found all the frogs we have to offer!");
  //   } else {
  //     retrieveCard(); //call again
  //   }
  // }

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
  frogCard.innerHTML = "<div class='card'><img src='"+ frog.image +"' alt='Card for " + frog.name + ". Description states, "+ frog.description +"' tabindex='0' / ></div>";
  document.getElementById('card-library').appendChild(frogCard);


  /*
    let url = 'https://raw.githubusercontent.com/jonthornton/MTAPI/master/data/stations.json';
    fetch(url, { method: 'GET'}).then(resp => ( createChildren(resp) )).catch((e) => (console.log(e)));

  */

  // if this is a new card, save it in the user's library.
  //

}
