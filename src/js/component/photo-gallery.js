
basework.photoGallery = {
    owl: null,
    owlCarouselNavigation: function(){
        $('.gallery-prev').click(function() {
            basework.photoGallery.owl.trigger('prev.owl.carousel');
        });

        $('.gallery-next').click(function() {
            basework.photoGallery.owl.trigger('next.owl.carousel');
        });
    },

    init: function () {

        basework.photoGallery.owl = $('#photo-gallery');

        var rtl = basework.utility.getLang() == 'ar' ? true : false;

        basework.photoGallery.owl.owlCarousel({
            rtl: rtl,
            loop:true,
            center: false,
            dots: false,
            margin:10,
            autoWidth:false,
            nav:false,
            responsive:{
                0:{
                    dots: true,
                    items:1
                },
                767:{
                    items:1
                },
                1000:{
                    items:1.4
                }
            }
        });

        basework.photoGallery.owlCarouselNavigation();
    }
}
