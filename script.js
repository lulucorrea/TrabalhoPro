
var menuItem = document.querySelectorAll('.item-menu');
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');
var content = document.querySelector('.content');
var header = document.querySelector('header');

function selectLink() {
    menuItem.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

// Expndir menu
btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
    content.classList.toggle('conteudo-expandido');
    header.classList.toggle('header-expandido');
});


