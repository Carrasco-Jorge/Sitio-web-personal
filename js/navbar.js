let myNav = document.getElementById('Nav');
console.log(myNav);
window.onscroll = function () { 
    if (document.body.scrollTop >= (window.innerHeight)*0.05) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};