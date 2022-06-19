let modalVisible = false;
var cmd_children = document.querySelectorAll(".cmd:nth-child(n)");
var output_children = document.querySelectorAll(".output:nth-child(n)");
var timeouts = [];

function toggleModal() {
    if (modalVisible) {
        modalVisible = false;
        return hideModal();
    }
    modalVisible = true;
    showModal();
}
function showModal() {
    document.body.classList.add("modal--open");
    playAnimate();
}
function hideModal() {
    resetAnimate();
    document.body.classList.remove("modal--open");
}
function playAnimate() {
    timeouts.push(setTimeout(function() {
        cmd_children.item(0).classList.add("cmd__anim1")}, 1000));
    timeouts.push(setTimeout(function() {
        cmd_children.item(1).style.height = "32px"; }, 1900));
    timeouts.push(setTimeout(function() {
        cmd_children.item(1).classList.add("cmd__anim2")}, 2500));
    timeouts.push(setTimeout(function() {
        output_children.item(0).classList.add("output--anim1")}, 3300));
    timeouts.push(setTimeout(function () {
        cmd_children.item(2).style.height = "32px"; }, 3500));
    timeouts.push(setTimeout(function() {
        cmd_children.item(2).classList.add("cmd__anim3")}, 3900));
    timeouts.push(setTimeout(function () {
        cmd_children.item(3).style.height = "32px"; }, 4800));
    timeouts.push(setTimeout(function () {
        document.body.classList.add("window--open"); }, 5800));
}
function resetAnimate() {
    for(var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    cmd_children.item(0).classList.remove("cmd__anim1");
    cmd_children.item(1).style.height = "0px";
    cmd_children.item(1).classList.remove("cmd__anim2");
    output_children.item(0).classList.remove("output--anim1");
    cmd_children.item(2).style.height = "0px";
    cmd_children.item(2).classList.remove("cmd__anim3");
    cmd_children.item(3).style.height = "0px";
    document.body.classList.remove("window--open");
}