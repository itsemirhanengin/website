basework.dropdown = {

    init: function () {

        $('.default-dropdown button').on('click', function () {
            $(this).next('.dropdown-wrapper').toggle();
        });

        $(document).click(function (e) {
            var target = e.target;

            // Todo iki dropdown aynı anda açık olabiliyor


            //console.log(target);
            if (!$(target).is('.default-dropdown') && !$(target).parents().is('.default-dropdown')) {
                $('.dropdown-wrapper').hide();
            }
        });

    }

}