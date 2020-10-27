// JavaScript Document
console.log('script');

var menuButton = document.querySelector ('#menu');

var menuLijst = document.querySelector ('.menu1');

var kruisButton = document.querySelector ('.kruisje');

var achtergrondTransparant =document.querySelector ('.backgroundmenu')

//menuButton.onclick = function(){
//document.getElementById('menu').classList.toggle('menu')
//}

function toggleMenu() {
 menuLijst.classList.toggle('is-open')  
    kruisButton.classList.toggle('is-dicht')
        achtergrondTransparant.classList.toggle('is-open')
}

menuButton.addEventListener('click', toggleMenu);
kruisButton.addEventListener('click', toggleMenu);


console.log ('hoi')
