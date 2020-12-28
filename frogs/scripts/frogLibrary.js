/**
 * frogLibrary.js contains all code pertaining
 * to saving frogs on a user's local machine.
 * Please read docs on local storage before editing
 * this file.
 * Important localStorage notes:
    * It is a synchronous operation.
    * Do not store any secure data.
    * Stored on the browser.

 * @author Kredgons, do not use without permission.
 *
 * @TODO a more elegant way of handling rarities?
    * note: could just loop over each
 * @TODO undefined put into local storage for osme reason immediately
*/

/**
 * Build the library when the page loads if user has been here before.
 *
 * @return {boolean} false if user has never been to frogpon
*/
function buildLibraryOnload() {
  console.log("good morning");
  if (localStorage.getItem("visitedBefore") === null) {
    localStorage.setItem("visitedBefore", true);
    return false;
  }

  Object.keys(localStorage).forEach((key) => {
    console.log("foreach");
    console.log(key);
    console.log(cards.common[key]);
    console.log("------");
    if (cards.common[key]) addToLibrary(cards.common[key]);
    else if (cards.uncommon[key]) addToLibrary(cards.uncommon[key]);
    else if (cards.rare[key]) addToLibrary(cards.rare[key]);
    else return -1; //frog was not found
  });
}

/**
 * Save the newfound frog to the user's local storage.
 * We assume frog does is new based on the call to this function.
 *
 * @param {object} frog The frog to store.
 * @return {boolean} Status of adding.
*/
function saveToLibrary(frog, frogName) {
  console.log("save to library");
  if (!frog || !frogName) return -1;
  window.localStorage.setItem(frogName, frogName);
  addToLibrary(frog);
}

/**
 * Add the frog to the HTML library.
 * @param {object} frog The frog to be added to the library.
 * @return {void}
*/
function addToLibrary(frog) {
  console.log("add to library called, have to build the html")
  console.log(frog);

  let frogCard = document.createElement("div");
  frogCard.className = 'card';
  frogCard.innerHTML = "<img src='"+ frog.image +"' alt='Card for " + frog.name + ". Description states, "+ frog.description +"' tabindex='0' / >";
  document.getElementById('saved-cards').appendChild(frogCard);

}

/**
 * Check if a frog exists in the library already.
 *
 * @param {object} frog The frog to be checked.
 * @return {boolean} false if it doesn't exist
*/
function frogExists(frogName) {
  let exists = false;
  Object.keys(window.localStorage).forEach((key) => {
    let currFrog = window.localStorage.getItem(key);
    if ( currFrog === frogName ) {
      console.log('exists')
      exists = true;
    }
    console.log(window.localStorage.getItem(key));
  });

  return exists;
}
