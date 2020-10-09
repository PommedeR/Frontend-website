// JavaScript Document
console.log('script');

var menuButton = document.querySelector ('#menu');

var menuLijst = document.querySelector ('.menu1');

//menuButton.onclick = function(){
//document.getElementById('menu').classList.toggle('menu')
//}

function toggleMenu() {
 menuLijst.classList.toggle('is-open')   
}

menuButton.addEventListener('click', toggleMenu);

console.log ('hoi')
