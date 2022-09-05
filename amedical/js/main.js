$(window).scroll(function () {
    updateNav();
  });

  function updateNav() {
    if ($(window).scrollTop() > 30) {
      $(".head").addClass("scrolled");
    } 
    else {
      $(".head").removeClass("scrolled");
    }
  }

$(".modal-btn").on("click", function () {
    $(".modal-open").show()
   
})



function myFunction(x) {
    x.classList.toggle("change");
}

$('.loop').owlCarousel({
    center: true,
    items:4,
    loop:true,
    margin:25,
    dots:true,
    nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});

$('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:0,
    items:2.6,
    dots:false,
    nav: true,
    navText: ["<div class='nav-button1 owl-prev1'>‹</div>", "<div class='nav-button1 owl-next1'>›</div>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2.6,
        }
    }
});