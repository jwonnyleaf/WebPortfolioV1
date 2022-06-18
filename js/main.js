let modalVisible = false;
var _navbar = document.querySelector(".navbar");
var prevScroll = window.scrollY;
var command_children = document.querySelectorAll(".command:nth-child(n)");
var output_children = document.querySelectorAll(".output:nth-child(n)");

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
        command_children.item(0).classList.remove("command__anim1");
        command_children.item(1).classList.remove("command__anim2");
        output_children.item(0).classList.remove("output__anim1");
        return;
    }
    modalVisible = true;
    document.body.classList.add("modal--open");
    command_children.item(0).classList.add("command__anim1");
    command_children.item(1).classList.add("command__anim2");
    output_children.item(0).classList.add("output__anim1");
}

