function filter(category) {
    var divs = document.getElementsByClassName('select');
    if (category == 'remove') {
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.add('d-none');
        }
    }
    else if (category == 'show all') {
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('d-none');
        }

    }
    else if (category == 'cars') {
        for (var i = 0; i < divs.length; i++) {
            if (!(divs[i].classList.contains('car'))) {
                divs[i].classList.add('d-none');
            }
            else{divs[i].classList.remove('d-none')}
        }

    }
    else if (category == 'fruits') {
        for (var i = 0; i < divs.length; i++) {
            if (!(divs[i].classList.contains('fruit'))) {
                divs[i].classList.add('d-none');
            }
            else{divs[i].classList.remove('d-none')}
        }

    }
    else if (category == 'colors') {
        for (var i = 0; i < divs.length; i++) {
            if (!(divs[i].classList.contains('color'))) {
                divs[i].classList.add('d-none');
            }
            else{divs[i].classList.remove('d-none')}
        }

    }
    else if (category == 'animals') {
        for (var i = 0; i < divs.length; i++) {
            if (!(divs[i].classList.contains('animal'))) {
                divs[i].classList.add('d-none');
            }
            else{divs[i].classList.remove('d-none')}
        }

    }

}