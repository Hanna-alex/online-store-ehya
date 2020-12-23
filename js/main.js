$(document).ready(function (){

  var menuButton = document.querySelector(".header__button");
  var line = document.querySelector(".button__line");
  var menu = document.querySelector(".header__menu--mobile--visible");

  menuButton.addEventListener('click', function(){
  //console.log('клик клик')      
      line.classList.toggle('button__line--active'),
      menu.classList.toggle('header__menu--mobile--visible--active')      
  });

  //filter
  let filter = $("[data-filter]");

  filter.on("click", function(event){
    event.preventDefault();
    
    let cat = $(this).data('filter')    
    if(cat =='new') {
      $("[data-cat]").removeClass('trending__card--hide')
    } else {
         $("[data-cat]").each(function(){
      let workCat = $(this).data('cat')
      if( workCat != cat) {
        $(this).addClass('trending__card--hide')
      } else {
        $(this).removeClass('trending__card--hide')
      }
      //console.log(workCat)
    });
    } 
  
  });

  // slider reviews
  var mySwiper = new Swiper('.reviews__slider', {
    loop: true,
    autoplay: {
      delay: 7000,
    },
     pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
    on: {
      init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
      }
    },

  });
// slider stories
var mySwiper = new Swiper('.stories__slider', {
    loop: true,
    speed: 400,
    spaceBetween: 100,

    navigation: {
    nextEl: '.stories__button--next',
    prevEl: '.stories__button--pre',
  },
});

});
//end