
Array.from(document.getElementsByClassName('itembutton')).forEach(element => {
    element.addEventListener('click', stuff)
});


function stuff() {
    if (this.classList.contains('itembuttonactive')) {
        this.classList.remove('itembuttonactive')
    } else {
        this.classList.add('itembuttonactive')
    }
}


// select points like in a file explorer
// click, shift+click will select everything between the two items


