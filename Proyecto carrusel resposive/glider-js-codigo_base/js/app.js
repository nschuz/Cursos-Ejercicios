window.addEventListener('load',function(){
    new Glider (document.querySelector('.carrusel_lista'),{
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: '.carrusel_indicadores',
        arrows: {
          prev: '.carrusel_anterior',
          next: '.carrusel_siguiente'},
          responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
               
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4, 
              }
            }
          ]
    }); //instacia de nuestra liberia

});