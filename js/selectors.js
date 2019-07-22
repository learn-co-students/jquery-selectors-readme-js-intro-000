// declare your functions here...
function paragraphSelector() {
  return $("p") //find all paragraphs
}

function lastImageSelector() {
  return $('img:last') //find last image in html
}

function ninjaBabySelector() {
  return $("#baby-ninja") //find id baby-ninja
}

function divSelector() {
  return $('.pics') //find class pics
}

function firstListItem() { //Look for the ul with class pic-list and get first li from it
  return $('#pic-list li:first-child')
}
