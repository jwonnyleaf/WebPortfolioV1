let modalVisible = false;
var _navbar = document.querySelector(".navbar");
var prevScroll = window.scrollY;
var cmd_children = document.querySelectorAll(".cmd:nth-child(n)");
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
        cmd_children.item(0).classList.remove("cmd__anim1");
        cmd_children.item(1).style.height = "0px";
        cmd_children.item(1).classList.remove("cmd__anim2");
        output_children.item(0).classList.remove("output--anim1");
        cmd_children.item(2).style.height = "0px";
        cmd_children.item(2).classList.remove("cmd__anim3");
        cmd_children.item(3).style.height = "0px";
        document.body.classList.remove("window--open");
        return;
    }
    modalVisible = true;
    document.body.classList.add("modal--open");
    cmd_children.item(0).classList.add("cmd__anim1");
    setTimeout(function(){
        cmd_children.item(1).style.height = "32px";
    }, 1900);
    cmd_children.item(1).classList.add("cmd__anim2");
    output_children.item(0).classList.add("output--anim1");
    setTimeout(function(){
        cmd_children.item(2).style.height = "32px";
    }, 2800);
    cmd_children.item(2).classList.add("cmd__anim3");
    setTimeout(function(){
        cmd_children.item(3).style.height = "32px";
    }, 4500);
    cmd_children.item(3).classList.add("cmd__anim3");
    setTimeout(function(){
        document.body.classList.add("window--open");;
    }, 5500);
}

