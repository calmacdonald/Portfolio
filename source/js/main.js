
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else{
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}

var typingEffect = new Typed(".typedText",{
    strings : ["Coder", "Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card', {})
sr.reveal('.featured_name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.social_icons', {delay: 300})
sr.reveal('.featured-image', {delay: 400})
sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{})
srLeft.reveal('.text-area',{})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{})
srRight.reveal('.comment-area',{})

const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

srBottom.reveal('.form-button',{})