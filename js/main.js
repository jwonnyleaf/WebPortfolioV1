let modalVisible = false;
var _navbar = document.querySelector('.navbar');
var prevScroll = window.scrollY;

window.onscroll = function() {
    var currScroll = window.scrollY;
    if(prevScroll < currScroll) {
        _navbar.classList.add("disappear");
        _navbar.classList.remove("appear");
    } else {
        _navbar.classList.remove("disappear");
        _navbar.classList.add("appear");
    }
    if(currScroll == 0) {
        _navbar.classList.remove("appear");
    }
    prevScroll = currScroll;
}

function toggleModal() {
    if(modalVisible) {
        modalVisible = false;
        document.body.classList.remove("modal--open");
        return;
    }
    modalVisible = true;
    document.body.classList.add("modal--open");
}

