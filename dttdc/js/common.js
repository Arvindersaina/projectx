

$(document).ready(function(){

  	
	$('.header_in ul li a').closest('li').children('.subMenuMN').before("<span class='click_menu_i'></span>");
    $('.menu_icon').click(function(){
        $(this).parent().children('.menu_btm').addClass('menu_btm_add');
          $(this).toggleClass('menu_cl_add');
        $('body').toggleClass('js--mobile-menu-active');
        $('.menu_btm').slideToggle();
      //$('body').toggleClass('js--mobile-menu-active');
    });

    

    $(window).scroll(function(){
      if($(this).scrollTop() > 50){
        $('header').addClass('fixedHeader');
      }else{
        $('header').removeClass('fixedHeader');
      }
    })

    $('#clck_secr').click(function(){
      $('body').addClass('addserch');
      $('#search').addClass('open');
      $(this).parent().toggleClass('hdr_srch_add');
    });

    $('.search-panel__close').click(function(){
      $('body').removeClass('addserch');
    });

    
    // onclick anchor scroll
      $(function() {
         $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - 44
                }, 1000);
                return false;
              }
            }
          });
      });

	
    /*Banner Slider js*/
    var exploresSl = $('#exploresSl');
    exploresSl.owlCarousel({
        items:3,
        loop:true,
        margin:55,
        nav:true,
        dots:false,
        autoplay:false,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2,
                margin:20
            },
            768:{
                items:3,
                margin:20
            },
            992:{
                items:3,
                margin:30
            },
            1000:{
                items:3
            }
        }
    });

})
// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'interactive') {
//        document.getElementById('contents').style.visibility="hidden";
//   } else if (state == 'complete') {
//       setTimeout(function(){
//          document.getElementById('interactive');
//          document.getElementById('load').style.visibility="hidden";
//          document.getElementById('contents').style.visibility="visible";
//       },1000);
//   }
// }