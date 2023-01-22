$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:false,
    center: true,
    startPosition: 1,
    // margin: 200,
    responsive:{
        0:{
            items:1,
            autoWidth:true,
        },
        700:{
            items:3
        },
        1000:{
            items:3,
            dots: true,
            onInitialized: function(event) {
              var items = event.item.count;
              if (items >= 3) {
                  $('.owl-dots').show();
              }
            }

        }
    }
  });
});

var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) ); 
});


