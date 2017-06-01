// JavaScript Document



	$(window).load(function() {
	
		"use strict";	
		
		
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		$(".loader").delay(100).fadeOut();
		$(".animationload").delay(100).fadeOut("fast");
		
		$(window).stellar({});
		

	});
	
	
	
	$(window).on('scroll', function() {
		
		"use strict";	
		
		
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		
		if( b > 60 ){		
			$(".navbar").addClass("scroll-fixed-navbar");
		} else {
			$(".navbar").removeClass("scroll-fixed-navbar");
		}
		
		
	});
	
	
	
	$(document).ready(function() {
		
		"use strict";	
		
		
		
		/*----------------------------------------------------*/
		/*	Mobile Menu Toggle
		/*----------------------------------------------------*/
		
		$('.navbar-nav li a').on('click', function() {				
			$('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navigation-menu').removeClass("open");				
		});	

		
				
		/*----------------------------------------------------*/
		/*	OnScroll Animation
		/*----------------------------------------------------*/
		
		$('.animated').appear(function() {

	        var elem = $(this);
	        var animation = elem.data('animation');

	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {
	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
						
		});
		
		
		
		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		$('#header a[href^="#"], #content_wrapper a[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 0 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});
		
		
		
		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).scroll(function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).on('click', function(event) {
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();
		
		
		
		/*----------------------------------------------------*/
		/*	INFO-1 SLIDER
		/*----------------------------------------------------*/
		
		$('.flexslider').flexslider({
		  animation: 'slide', // Change Animation Type to fade
		  animationLoop: true,
		  touch: true,
		  controlNav: false, 
		  directionNav: false,
		  slideshowSpeed: 2500, // Slide Intervals
		  animationSpeed: 1200, // Animation Speeds/times
		  slideshow: true,
		  pauseOnAction: false,
		  controlsContainer: '.flex-container'
		});
		
		
		
		/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		$('.statistic-number').each(function () {
			$(this).appear(function() {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			},{accX: 0, accY: 0});
		});
		
		
		
		/*----------------------------------------------------*/
		/*	Screens Carousel
		/*----------------------------------------------------*/
		
		$("#screens_carousel").owlCarousel({
					  
			slideSpeed : 600,
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [991,2],
			itemsTablet: [768,2],
			itemsMobile : [479,1],
			navigation: true,
			pagination: false,
			navigationText : false
					  
		});
				
		// Carousel Navigation
		$(".next").on('click', function(){
			$("#screens_carousel").trigger('owl.next');
		})
		
		$(".prev").on('click', function(){
			$("#screens_carousel").trigger('owl.prev');
		})
		
		
		
		/*----------------------------------------------------*/
		/*	Screenshots Lightbox
		/*----------------------------------------------------*/
		
		$("a[class^='prettyPhoto']").prettyPhoto();
		
		
		
		/*----------------------------------------------------*/
		/*	Our Clients Carousel
		/*----------------------------------------------------*/
	
		$("#our-customers").owlCarousel({
					  
			slideSpeed : 900,
			items : 7,
			itemsDesktop : [1199,6],
			itemsDesktopSmall : [991,5],
			itemsTablet: [767,4],
			itemsMobile : [479,2],
			navigation:true,
			pagination:false,
			navigationText : false
					  
		});

		
		
		/*----------------------------------------------------*/
		/*	Register Form Validation
		/*----------------------------------------------------*/
		
		$("#register_form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 2,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},
					phone:{
						required: true,
						digits: true,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							phone:{
								required: "Please enter only digits",
								digits: "Please enter a valid number"
							}, 
						}
		});	



		/*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/
	
		$('#newsletter_form').ajaxChimp({
        language: 'cm',
        url: 'http://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});


		$.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'We have sent you a confirmation email',
			1: 'Please enter a value',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};
		
		
		
	});	


	
	