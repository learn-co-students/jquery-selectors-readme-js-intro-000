// declare your functions here...

  $('img');
  $('.pics'); // the . denotes a class, just like in CSS
  $('#baby-ninja');
  $('ul li');
  $('parent-tag child-tag:first-child');
  $('div img:first-child');
  $("img[alt = 'the betales making faces']");
  $('div:last')

function paragraphSelector() {/*
  var arrayOfPs = [];
  arrayOfPs = document.querySelectorAll('p');*/
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('img[id = baby-ninja]');
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $("div ul li:first-child"); // i'll look at how this was supposed to be.  It won't work any other way right now.  0s the whole way through.
}
