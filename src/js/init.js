$(document).ready(function () {
    basework.fancybox.init();
    basework.dropdown.init();
    basework.facebookShare.init();
    basework.twitterShare.init();
    basework.whatsappShare.init();
    basework.dateTime.init();
    basework.number.init();
    basework.phoneNumber.init();
	basework.hideObjects.init();
	basework.checkObjectsVisibility.init();
});

$(window).scroll(function () {
	basework.hideObjects.init();
	basework.checkObjectsVisibility.init();
})

//var resizeTimeout;
$(window).resize(function () {
    //clearTimeout(resizeTimeout), resizeTimeout = setTimeout(function () {

    //}, 200);
}).trigger("resize");
