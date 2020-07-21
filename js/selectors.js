// declare your functions here...
  // good thing you said so, otherwise i was gonna slap them in index.html.
function paragraphSelector(){
  return $('p');
}

function lastImageSelector(){
  //var varInternal = $('img');
  //console.log("-----------" + varInternal[0].innerHTML);
  //oh there's a simpler way.
  return $('img:last');
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('#pic-list li:first-child')
}
