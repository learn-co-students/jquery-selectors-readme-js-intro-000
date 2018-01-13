// declare your functions here...
function paragraphSelector() {

    // Does not accept any parameters. The function should use an element
    // selector to select the p tags in index.html and return those elements.
    // (Note that we're using the plural because the selector will always return
    // an array when used with tags, even if there's only one!)

    return $('p')
}

function lastImageSelector() {

    // Does not accept any parameters. The function should use the last jQuery
    // selector to return the last image in index.html.

    return $('img').slice(-1)
}

function ninjaBabySelector() {

    // Does not accept any parameters. The function should use an ID selector to
    // return the ninja baby image.

    return $('#baby-ninja')
}

function divSelector() {

    // Does not accept any parameters. The function should use a class selector
    // to return the two divs with the class pics.

    return $('.pics')
}

function firstListItem() {

    // Does not accept any parameters. The function should use a first-child
    // selector to return the first list item in the ul with the ID pic-list.

    return $('ul#pic-list li:first-child')

}
