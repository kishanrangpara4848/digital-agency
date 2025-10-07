$('.banner-imag .owl-carousel').owlCarousel({
    stagePadding: 100,
    loop:true,
    margin:10,
    nav:true,
    autoplayTimeout: 3000,
   autoplay:false,
  autoplayHoverPause: true,
    responsive:{
        640:{
            items:1,
            stagePadding: 80,
        },
        480:{
            items:1,
            stagePadding: 60,
        },
        320:{
            items:1,
            stagePadding: 50,
        }
    }
})


/////       menu      ////////////////////////////


    document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );


        /////////////////////



   /////////////    tabing      //////////////


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.six-content').hide();
$('.six-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.six-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


/////////////////////////