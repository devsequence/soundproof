$(document).ready(function(){

	/** SLIDERS **/

	// Reviews Slider
	var reviewsSlider = new Swiper('.reviews__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.reviews__slider .swiper-pagination',
		},
		navigation: {
			nextEl: '.reviews__slider .swiper-button-next',
			prevEl: '.reviews__slider .swiper-button-prev',
		}
	});

	/** END SLIDERS **/


	// Burger Menu
	$('.burger').on('click', function () {
		$(this).toggleClass('burger__open');
		$('body').toggleClass('overflow');
		$('.mobile').toggleClass('mobile__open');
	});


	// Scroll Top
	$(window).scroll(function(){
		var $bottomNav = $('.bottom-nav') ;
		if ($(window).scrollTop() >= $bottomNav.offset.top) {
			$bottomNav.addClass('scroll');
		}else{
			$bottomNav.removeClass('scroll');
		}
		if ($(window).scrollTop() >= 250) {
			$('.scroll__top').addClass('show');
		}
		else{
			$('.scroll__top').removeClass('show');
		}
	});

	$('.main-action .btn-blue').on('click', function () {
		$('html, body').animate({
			scrollTop: $(".contact-wrapper").offset().top - 100
		}, 1000);
	});
	$('.scroll__top').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 300);
	});


	// Popup Fancybox
	$('[data-fancybox]').fancybox({
		animationDuration : 150,
		animationEffect   : 'slide-in-out'
	});
	$.fancybox.defaults.closeExisting=true;
	$.fancybox.defaults.touch = false;
	$.fancybox.defaults.autoFocus = false;

	var swiper = new Swiper('.main-slider-container', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 555000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination-main',
			clickable: true,
		},

	});
	var swiper = new Swiper('.swiper-work', {
		slidesPerView: 3,
		spaceBetween: 30,
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-work-next',
			prevEl: '.swiper-work-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}
	});
	var swiper = new Swiper('.swiper-testimonial', {
		slidesPerView: 3,
		spaceBetween: 30,
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-testimonial-next',
			prevEl: '.swiper-testimonial-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}
	});
	var swiper = new Swiper('.testimonials-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-vid-next',
			prevEl: '.swiper-vid-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
			},
		}
	});
	var swiper = new Swiper('.brand-container', {
		slidesPerView: 5,
		spaceBetween: 30,
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}
	});
	var swiper = new Swiper('.about-slider-main', {
		slidesPerView: 3,
		spaceBetween: 30,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}
	});
}); //end
function galleryFilters() {
	const $allItem = $('.gallery-item');

	$allItem.addClass('active');
	$allItem.parent().addClass('active');
	$('.gallery-filter__link').on('click', function (e) {
		e.preventDefault();

		const $this = $(this);
		const $thisDataGallery = $this.data('gallery');
		$allItem.removeClass('active');
		$allItem.parent().removeClass('active');
		$('.gallery-filter__link').removeClass('active');
		$this.addClass('active');
		$('div[data-gallery = '+$thisDataGallery+']').parent().addClass('active');

		$('div[data-gallery = '+$thisDataGallery+']').addClass('active');

	});
	$('.gallery-filter__link').first().on('click', function (e) {
		const $this = $(this);
		const $thisDataGallery = $this.data('gallery');

		$this.addClass('active');
		$('div[data-gallery = '+$thisDataGallery+']').parent().css('display', 'none');
		$allItem.addClass('active');
		setTimeout(function(){
			$allItem.parent().css('display', 'block').addClass('active');
		}, 1000);

		// $allItem.parent().css('display', 'block').addClass('active');
	});

	$('.btn-nav').on('click', function (e) {
		e.preventDefault();
		const  $this = $(this);
		$this.toggleClass('open');
		$('.header, .bottom-nav').toggleClass('open-nav');
		$('body').toggleClass('scroll');
		$('.popup-header').toggleClass('open-nav');
		$('html, body').animate({
			scrollTop: $(".bottom-nav").offset().top
		}, 2000);
	});
	AOS.init({disable: 'mobile'});
}
galleryFilters();
function windowWidthSize() {
	const windowWidth = $(window).width();
	if(windowWidth < 992){
		$('.gallery-filter__link').on('click', function () {
			$('html, body').animate({
				scrollTop: $(".gallery-page__container").offset().top - 100
			}, 2000);
		});

	}
}
windowWidthSize();

// const $popupButton = $('.btn-popup, .header-mobile__login a');
// $popupButton.on('click', function (e) {
// 	const $this = $(this);
// 	const popupButtonData = $this.data('popup');
// 	$('.popup').removeClass('active');
// 	$('div[data-popup = '+popupButtonData+']').addClass('active');
// 	if ($this.parents('.header-user__item').length) {}else{
// 		$('.popup-overlay').addClass('active');
// 		$('body').addClass('scroll-h');
// 	}
// 	popupHeight();
// });