// declare your functions here...
function paragraphSelector(){
  return $("p");
}

function lastImageSelector(){
  // let imgs = $("img");
  // return imgs[imgs.length - 1];
  return $("img:last");
}

function ninjaBabySelector(){
  return $("#baby-ninja");
}

function divSelector(){
  return $(".pics");
}

function firstListItem(){
  return $("#pic-list li:first")
}
