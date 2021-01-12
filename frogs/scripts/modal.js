/**
 * animation.js contains all code pertaining
 * to the modals.

 * @author Kredgons, do not use without permission.
*/

/**
 * Opens when user clicks on a card to see its information.
 * @param {integer} frogKey to find the frog with
 * @return {void}
*/
function artistCreditsModal(frogKey) {
  if (!frogKey || frogKey === undefined) return -1;
  openModal();
  buildCardModalBase(getFrog(frogKey));
}

/**
 * Opens when a new card is pulled.
 * @param {Object} frog
 * @return {void}
*/
function newCardModal(frog) {
  openModal();
  buildCardModalBase(frog);

  let header = document.querySelector('.new-card-header');
  let text = document.querySelector('.under-image-text');

  header.innerHTML = "NEW FROG ALERT!";
  text.innerHTML = frog.name + " has been added to your collection."
}

/**
 * A function for opening the modal.
 * Closing the modal code is also in this function.
 * @return {void}
*/
function openModal() {
  openModalAnimation(true);

  let header = document.querySelector('.new-card-header');
  let text = document.querySelector('.under-image-text');
  let modal = document.querySelector(".modal");
  modal.style.display = "block";

  let close = document.getElementsByClassName("close")[0];
  close.onclick = function() {
   modal.style.display = "none";
   header.innerHTML = "";
   text.innerHTML = "";
  }

  window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
  }
}

/**
 * Builds the base of displaying a card, which is the same
 * for finding a new card and checking a card's information.
 * @param {Object} frog
 * @return {void}
*/
function buildCardModalBase(frog) {
  let image = document.querySelector('.frog-image');
  let artist = document.querySelector('.frog-artist');
  image.innerHTML = "<img src='"+ frog.image +"' alt='Card for " + frog.name + ". Description states, "+ frog.description +"' tabindex='0' style='width:25%' / >";
  artist.innerHTML = "<a href='https://twitter.com/"+frog.artist+"' target='_blank'>@" + frog.artist + "</a>";
}
