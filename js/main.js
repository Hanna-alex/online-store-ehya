

var menuButton = document.querySelector(".header__button");
var line = document.querySelector(".button__line");
var menu = document.querySelector(".header__menu--mobile--visible");

menuButton.addEventListener('click', function (e) {

  if (!menuButton.classList.contains('open')) openMenu()

  else closeMenu()

});

menu.addEventListener('click', (e) => {
  let eTarget = e.target.className
  if (eTarget === 'menu__link') closeMenu()

})

function openMenu() {
  menuButton.classList.add('open')
  line.classList.add('button__line--active')
  menu.classList.add('header__menu--mobile--visible--active')
}

function closeMenu() {
  menuButton.classList.remove('open')
  line.classList.remove('button__line--active')
  menu.classList.remove('header__menu--mobile--visible--active')
}

//filter
let filter = $("[data-filter]");

filter.on("click", function (event) {
  event.preventDefault();

  let cat = $(this).data('filter')
  if (cat == 'new') {
    $("[data-cat]").removeClass('trending__card--hide')
  } else {
    $("[data-cat]").each(function () {
      let workCat = $(this).data('cat')
      if (workCat != cat) {
        $(this).addClass('trending__card--hide')
      } else {
        $(this).removeClass('trending__card--hide')
      }
      //console.log(workCat)
    });
  }

});

// slider reviews
const swiper1 = new Swiper('.reviews__slider', {
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



// добавляем правило для валидации 
jQuery.validator.addMethod("emailfull", function (value, element) {
  return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
}, "Please enter valid email address!");


//обработка форм  
$(".form").validate({

  rules: {
    email: {
      required: true,
      email: true,
      emailfull: true,
    }
  },

  messages: {
    email: {
      required: "Заполните форму",
      email: "Формат Email name@domain.com",
      emailfull: "Введите действующий email",
    },

  },
  submitHandler: function (form) {
    form.submit();
  }
});





const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').slice(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// slider stories
const swiper = new Swiper('.stories__slider', {
  loop: true,
  speed: 400,
  spaceBetween: 100,

  navigation: {
    nextEl: '.stories__button--next',
    prevEl: '.stories__button--pre',
  },
});