// declare your functions here...
function paragraphSelector() {
  var paragraphs = $('p');
  return paragraphs;
}

function lastImageSelector() {
  var lastImg = $('div img:last');
  return lastImg;
}


function ninjaBabySelector() {
  var ninjaImgSelector = $('#baby-ninja');
  return ninjaImgSelector;
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $('#pic-list li:first-child');
}
