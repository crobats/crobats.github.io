/* Logic for the gacha herself */

//move to json file
let cards = FROG_CARDS;

let state = {
  'loading': false
};

/* comment to explain function */
function retrieveCard() {
  state['loading'] = true;
  console.log(cards);
  getRarity();
}

function getRarity() {
  let frog = 0;
  let rarity = {
    'rare': 10,
    'uncommon': 35,
    'common': 55
  };

  let chance = Math.floor(Math.random() * 100);

  console.log("--")

  if (chance < rarity.rare) {
    frog = cards.rare; //assign the frog object
    console.log("rare frog picked");
  } else if (chance < rarity.uncommon) {
    frog = cards.uncommon;
    console.log("uncommon frog picked");
  } else {
    frog = cards.common;
    console.log("common frog picked");
  }

  // This works by getting a random index from cards.rarity
  // then re-assigning frog to the random index
  const keys = Object.keys(frog);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  frog = frog[randomIndex];
  console.log(frog);

  addFrog(frog);

}

//add to frogventory and screen
function addFrog(frog) {
  //pseudo code idea below

  //create frog div
  let frogCard = document.createElement("div");
  frogCard.className = 'card';
  frogCard.innerHTML = "<div class='card'><img src='"+ frog.image +"' alt='Card for " + frog.name + ". Description states, "+ frog.description +"' tabindex='0' / ></div>";
  document.getElementById('card-library').appendChild(frogCard);

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

window.onload = function() {
  console.log(document.cookie)
  let messageCenter = document.getElementById('message-center');
  if (!document.cookie) {
    document.cookie = "frogponVisit=true";
    messageCenter.innerHTML = "Welcome to Frogpon, stranger!";
  } else {
    messageCenter.innerHTML = "Welcome back to Frogpon, friend!<br /> Your frogs have been waiting for you.";
  }

  let frogpon = document.getElementById('frogpon');
  if (state['loading'] === false) //TODO: doesn't work -- fix later lol
    frogpon.onclick = retrieveCard;



}
