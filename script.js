console.log("birp");

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")

HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle ("open")
}

/*scroll animatie*/
function revealOnScroll() {
    var animatedSection = document.getElementById("animated-section");
    if (!animatedSection) return; // Check if the element exists
    var sectionPosition = animatedSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
        animatedSection.style.transform = "translateY(0)";
        animatedSection.style.opacity = 1;
    }
}

/*section2*/
function animateSection2() {
    var section2 = document.getElementById("animated-section1");
    if (!section2) return; // Check if the element exists
    var section2Position = section2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section2Position < windowHeight) {
        section2.style.transform = "translateY(0)";
        section2.style.opacity = 1;
    }
}

/*section3*/
function animateSection3() {
    var section3 = document.getElementById("animated-section2");
    if (!section3) return; // Check if the element exists
    var section3Position = section3.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section3Position < windowHeight) {
        section3.style.transform = "translateY(0)";
        section3.style.opacity = 1;
    }
}

/*section4*/
function animateSection4() {
    var section4 = document.getElementById("animated-section3");
    if (!section4) return; // Check if the element exists
    var section4Position = section4.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section4Position < windowHeight) {
        section4.style.transform = "translateY(0)";
        section4.style.opacity = 1;
    }
}

/*section5*/
function animateSection5() {
    var section5 = document.getElementById("animated-section4");
    if (!section5) return; // Check if the element exists
    var section5Position = section5.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section5Position < windowHeight) {
        section5.style.transform = "translateY(0)";
        section5.style.opacity = 1;
    }
}

window.addEventListener("scroll", function () {
    revealOnScroll();
    animateSection2();
    animateSection3();
    animateSection4();
    animateSection5();
});
