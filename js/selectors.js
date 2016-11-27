// declare your functions here...
function paragraphSelector() {
  return $('p')
}
function lastImageSelector() {
  //var a=$('img');
  //var i= a.length-1;
  //return a[i];
  return $('img:last');
}
 function ninjaBabySelector(){
   return $('#baby-ninja');
 }
 function divSelector(){
   return $('div.pics');
 }
function firstListItem(){
  return $('ul li:first-child')
}
