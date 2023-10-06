console.log("birp");

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")

HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle ("open")
}

//section 1
function revealOnScroll() {
    var animatedSection = document.getElementById("animated-section");
    var sectionPosition = animatedSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
        animatedSection.style.transform = "translateY(0)";
        animatedSection.style.opacity = 1;
    }
}

// Section 2
function animateSection2() {
    var section2 = document.getElementById("animated-section1");
    var section2Position = section2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section2Position < windowHeight) {
        section2.style.transform = "translateY(0)";
        section2.style.opacity = 1;
    }
}

// Section 3
function animateSection3() {
    var section3 = document.getElementById("animated-section2");
    var section3Position = section3.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section3Position < windowHeight) {
        section3.style.transform = "translateY(0)";
        section3.style.opacity = 1;
    }
}

// Section 4
function animateSection4() {
    var section4 = document.getElementById("animated-section3");
    var section4Position = section4.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section4Position < windowHeight) {
        section4.style.transform = "translateY(0)";
        section4.style.opacity = 1;
    }
}

// Section 5
function animateSection5() {
    var section5 = document.getElementById("animated-section4");
    var section5Position = section5.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (section5Position < windowHeight) {
        section5.style.transform = "translateY(0)";
        section5.style.opacity = 1;
    }
}

// Animatie werkt wanneer je scroll
window.addEventListener("scroll", function () {
    animateSection2();
    animateSection3();
    animateSection4();
    animateSection5();
});

// Animatie werkt wanneer je scroll
window.addEventListener("scroll", revealOnScroll);