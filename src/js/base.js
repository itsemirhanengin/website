var basework = basework || {};

jQuery.fn.exists = function (callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) { callback.call(this, args); }
	return this;
};



basework.facebookShare = {

	init: function () {

		$('.facebook-share').on("click", function () {
			window.open("https://www.facebook.com/sharer/sharer.php?u=" + document.URL, "", "height=550,width=525,left=100,top=100,menubar=0");
		});

	}

}

basework.twitterShare = {

	init: function () {

		$('.twitter-share').on("click", function () {
			window.open("https://twitter.com/share?url=" + document.URL, "twitter-popup", "height=350,width=600");
		});

	}

}

basework.whatsappShare = {

	init: function () {

		$('.whatsapp-share').on("click", function (e) {
			var text = $(this).attr('data-text');
			var phone = $(this).attr('data-phone');

			var windowWidth = $(window).width();
			if(windowWidth >= 1024){
				window.open("https://web.whatsapp.com/send?phone=" + phone + "&text=" + text, "whatsapp-popup", "height=768,width=1024");
				//window.open("http://wa.me/" + phone, "whatsapp-popup", "height=768,width=1024");
				// e.preventdefault();
				// return false;
			}
			else{
				window.open("https://api.whatsapp.com/send?phone=" + phone + "&text=" + text, "whatsapp-popup", "height=768,width=1024");
			}
		});
	}

}

basework.dateTime = {

	init: function () {

		$(".datetime-picker").exists(function () {
			$(".datetime-picker").mask("99/99/9999");
		});
	}

}
basework.number = {

	init: function () {

		$('.number').keypress(function (e) {
			return (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) ? false : true;
		});
	}

}
basework.phoneNumber = {
	init: function () {
		$('.tel').mask("0(999) 999 99 99");
	}
}

basework.hideObjects = {
	init: function () {
		$('.fadeInUp-scroll').css({
			'opacity': 0,
			'transform': 'translateY(100px)'
		});
	}
}


basework.checkObjectsVisibility = {
	init: function () {
		$('.fadeInUp-scroll').each(function (i) {
			var objectTop = $(this).offset().top;
			var windowBottom = $(window).scrollTop() + $(window).outerHeight();
			var instance = $(this);
			var delay = instance.data('delay') || 0;

			if (windowBottom > objectTop - 100) {
				window.setTimeout(function () {
					instance.addClass('visible');
				}, delay)
			} else {
				$(this).removeClass('visible');
			}
		});
	}
}