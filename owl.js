


$('.owl-carousel').owlCarousel({
    stagePadding: 2,
    loop:true,
   
    margin:2,
    items:5,
    autoplay:true,
    autoplayTimeout:4500,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,
           
            loop:false
        }
    }
})