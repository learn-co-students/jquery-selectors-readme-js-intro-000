// declare your functions here...

function paragraphSelector() {
    return $('p')
}

function ninjaBabySelector() {
    return $("#baby-ninja")
}

function divSelector() {
    return $('.pics')
}



function firstListItem() {
    return $('#pic-list li:first-child')
    // Below also valid: 
    // return $('ul#pic-list li:first-child');
}

function lastImageSelector() {
    return $("img:last")
}