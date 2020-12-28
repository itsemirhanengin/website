basework.fancybox = {
    init: function () {
        $('.fancybox').fancybox({
            toolbar  : false,
            smallBtn : true,
            iframe : {
                preload : true,
                css : {
                    width : '440px',
                }
            }
            // autoSize: false,
            // fitToView: false,
            // maxWidth: 500,
            // type: 'iframe',
            // afterShow : function() {
            //   $('.fancybox-iframe').load(function() {
            //         alert("..");
            //       alert($(this).contents().find('body').height()+30);
            //     $('.fancybox-content').height($(this).contents().find('body').height()+30);
            //   });
            // }
        });
        $('[data-fancybox="gallery"]').fancybox({
            thumbs: {
                autoStart: true
            }
        });
    }
}