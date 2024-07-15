var menu = document.querySelector('.ri-menu-fill');
var nav = document.querySelector('.nav-inside');

menu.addEventListener('click',function(){
  nav.classList.toggle('down');
});

let swipeone = new Swiper(".myswipeone", {
    slidesPerView: 3,
    spaceBetween: 15,
    autoplay: {
        delay: 1000,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        }
    }
})


let swipertwo = new Swiper(".myswipertwo", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
})
var swipe = new Swiper(".myswipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
    },
    loop:true,
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  
let rushi = new Swiper(".myrushi", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    // mousewheel: true,
    // keyboard: {
    //     enabled: true,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

var middleswiper = new Swiper(".mymiddleswiper", {
    slidesPerView: 3,
    spaceBetween: 1,
    autoplay:{
      delay:1000,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });



  var swipe = new Swiper(".myswipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay:{
      delay:1000,
    },
    // mousewheel:true,
    // keyboard:{
    //   enable:true,
    // },
    loop:true,
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });