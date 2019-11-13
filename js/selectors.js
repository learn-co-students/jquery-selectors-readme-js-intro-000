// declare your functions here...
function paragraphSelector() {
  let p = $('p');
  return p;
}

function lastImageSelector() {
  let lastImage = $('ul#pic-list li:last-child img');
  return lastImage;
}

function ninjaBabySelector() {
  let ninjaBaby = $('img#baby-ninja');
  return ninjaBaby;
}

function divSelector() {
  let divs = $('.pics');
  return divs;
}

function firstListItem() {
  let first = $('ul#pic-list li:first-child');
  return first;
}