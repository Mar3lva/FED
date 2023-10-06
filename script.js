console.log("birp");

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")

HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle ("open")
}