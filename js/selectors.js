// declare your functions here...
$('img');
$('.pics');
$('#baby-ninja');
$('ul li');
$('div img:first-child');
$('img[alt="the beatles making faces"]');
$('div:last');

function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $('ul#pic-list li:first-child');
}
//const paragraphSelector = () => $('p');
//const lastImageSelector = () => $('img:last');
//const ninjaBabySelector = () => $('#baby-ninja');
//const divSelector = () => $('.pics');
//const firstListItem = () => $('ul#pic-list li:first-child');