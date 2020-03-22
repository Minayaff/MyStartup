
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:false,
            margin:260,
        },
        1000:{
            items:4,
            nav:false,
        }
    }
})


var owl = $('.owl-carousel');
owl.owlCarousel();
$('.customPrevBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customNextBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  
  
 

    /* Open the sidenav */
    function openNav() {
        document.getElementById("mySidenav").style.width = "85%";
        // document.querySelector('.openNavBlur').style.display='block';
        // document.querySelector('.openNavBlur').style.opacity=1;
      }
      /* Close/hide the sidenav */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }




      