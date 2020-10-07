// JavaScript Document
console.log('script');

var menuButton = document.querySelector ('#menu');

var menuLijst = document.querySelector ('menu1');

menuButton.onclick = function(){
document.getElementById('menu').classList.toggle('menu')
}

menuButton.addEventListener('click', menuLijst);

console.log ('hoi')
