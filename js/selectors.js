
    function paragraphSelector() {
      let value = $('p');
      return(value)
    }

    function lastImageSelector() {
      let value = $('img');
      value.splice(0,5);
      return(value)
    }

    function ninjaBabySelector() {
      let value = $('#baby-ninja');
      return(value)
    }

    function divSelector() {
      let value = $('div.pics');
      return(value)
    }

    function firstListItem() {
      let value = $('ul#pic-list li:first-child');
      return(value)
    }
