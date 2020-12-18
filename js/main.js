var menuButton = document.querySelector(".header__button");
var line = document.querySelector(".button__line");
var menu = document.querySelector(".header__menu--mobile--visible");

  menuButton.addEventListener('click', function(){
  //console.log('клик клик')      
      line.classList.toggle('button__line--active'),
      menu.classList.toggle('header__menu--mobile--visible--active')
      
  });
