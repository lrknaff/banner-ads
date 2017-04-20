"use strict";

(function (window) {
	//Banner.inheritsFrom( window.Banner_Base );

	function Banner() {
		this.init();
	};

	Banner.prototype.init = function () {
		this.__allowHoverEffect = false;
		this.__width = 970;
		this.__height = 250;
		this.start();
	};

	Banner.prototype.render = function () {
		this.defineElements();
		this.positionElements();
		this.defineInteraction();
		this.run();
	};

	Banner.prototype.defineElements = function () {
		this.__container = $("#container");
		this.__border = $("#border");
		this.__banner = $("#banner");
		this.__content = $("#content");

		// define BG image, in order to polite load the BG file weight
		this.__BG = $("#BG");

		this.__branding = $("#branding");
		this.__logoTelluride = $("#logo-telluride");

		this.__cta = $("#cta");
		this.__ctaBG = $("#cta-BG");
		this.__ctaOne = $("#cta-one");
		this.__ctaTwo = $("#cta-two");
		this.__ctaHover = $("#cta-hover");

		this.__bgExit = $("#bg-exit");
	};

	Banner.prototype.positionElements = function () {
		var w = this.__width;
		var h = this.__height;
		var stroke = 1;

		this.__container.css({ width: w, height: h, opacity: 1 });
		this.__banner.css({ top: stroke, left: stroke, width: w - stroke * 2, height: h - stroke * 2 });
		this.__border.css({ top: 0, left: 0, width: w - stroke * 2, height: h - stroke * 2, opacity: 1 });
		this.__content.css({ top: -stroke, left: -stroke, width: w, height: h });
		this.__bgExit.css({ top: 0, left: 0, width: w, height: h, opacity: 0 });

		this.__BG.css({transformOrigin: '412px 83px'});
		this.__ctaHover.css({top: -60, left: 21, opacity:0});
	};

	//-------------------------------------------------------------------------

	Banner.prototype.run = function () {
		var banner = this;
		setTimeout(function () {
			banner.showGlobal();
		}, 100); // show global elements
	};

	//-------------------------------------------------------------------------

	// show BG
	Banner.prototype.showGlobal = function () {
		this.__BG.css({ top: 0, left: 0, opacity: 0, scale: 1.5 });
		animate(0, this.__BG, { scale: 1, opacity: 1 }, 800, "easeOutQuint");

		var yStart = 200;
		var yEnd = 60;

		this.__branding.css({ top: yStart, left: 0, width: this.__width, height: 110, opacity: 1 });
		animate(200, this.__branding, { top: yEnd }, 700, "easeInOutQuad");

		this.__logoTelluride.css({ top: -yStart, left: 0, opacity: 0, scale: 1.4 });
		animate(200, this.__logoTelluride, { top: -yEnd, opacity: 1, scale: 1 }, 700, "easeInOutQuad");

		var banner = this;
		setTimeout(function () {
			banner.showCta();
		}, 2500);
	};

	//-------------------------------------------------------------------------

	// show cta 1
	Banner.prototype.showCta = function () {
		this.__ctaBG.css({ top: 32, right: 0, opacity: 1 });
		this.__ctaOne.css({ top: 0, left: 21, opacity: 1 });
		this.__ctaTwo.css({ top: -30, left: 21, opacity: 0 });
		this.__cta.css({ top: 161, right: 0, opacity: 0, scale: 1, height: 90 });

		animate(0, this.__cta, { opacity: 1 }, 1000, "easeOutQuart");

		var banner = this;
		setTimeout(function () {
			banner.showCta2();
		}, 2000);
	};

	//-------------------------------------------------------------------------


	// show cta2
	Banner.prototype.showCta2 = function () {
		animate(0, this.__ctaOne, { opacity: 0 }, 500, "easeOutQuart");

		var banner = this;
		setTimeout(function () {
			banner.showResolve();
		}, 200);
	};

	//-------------------------------------------------------------------------


	// show resolve
	Banner.prototype.showResolve = function () {
		animate(0, this.__ctaTwo, { opacity: 1 }, 1000, "easeOutQuart");
		animate(0, this.__ctaBG, { width: 200 }, 1000, "easeOutQuart");

		var banner = this;
		setTimeout(function () {
			banner.end();
		}, 1000);
	};

	//-------------------------------------------------------------------------

	Banner.prototype.start = function () {
		this.__start = new Date();
	};

	Banner.prototype.end = function () {
		this.__allowHoverEffect = true;
		var now = new Date();
		var time = now.getTime() - this.__start.getTime();
		trace("total run time = " + time / 1000 + " seconds");
	};

	//-------------------------------------------------------------------------

	Banner.prototype.defineInteraction = function()
	{
		var banner = this;
		var offset = 4;
		this.__bgExit.click(function()
		{
			banner.clickThrough();
		});
		this.__bgExit.mouseover(function()
		{
			banner.onMouseOver();
		});
		this.__bgExit.mouseout(function()
		{
			banner.onMouseOut();
		});
	};

	Banner.prototype.onMouseOver = function()
	{
		let trigger = $('#cta-one').css('opacity')
		if (trigger === "0") {
			animate(100, this.__ctaTwo, {opacity:0}, 150, "easeOutQuart");
			animate(0, this.__ctaHover, {opacity:1}, 150, "easeOutQuart");
		} else {
			this.__ctaHover.css({opacity:0});
		}
	};

	Banner.prototype.onMouseOut = function()
	{
		let trigger = $('#cta-one').css('opacity')
		if (trigger === "0") {
			animate(25, this.__ctaTwo, {opacity:1}, 150, "easeOutQuart");
			animate(125, this.__ctaHover, {opacity:0}, 150, "easeOutQuart");
		} else {
			this.__ctaHover.css({opacity:0});
		}
	};
	Banner.prototype.clickThrough = function () {
		trace("click through: " + window.clickTag);
		window.open(window.clickTag);

		//var ID = "Background Exit";
		//trace("exit with ID: '" + ID + "'");
		//Enabler.exit(ID);
	};

	window.Banner = Banner;
})(window);

// Global functions
//-------------------------------------------------------------------------

function trace(s) {
	console.log(s);
}

function animate(_delay, _$o, _attr, _speed, _easing) {
	_easing = _easing || 'easeInOutCubic';
	var to = setTimeout(function () {
		_$o.transition(_attr, _speed, _easing);
		//_$o.transition(_attr, {duration: _speed, easing: _easing, queue: false}, null);
	}, _delay);
	return to;
};

function timeout(_delay, _func) {
	var to = setTimeout(function () {
		_func();
	}, _delay);
	return to;
};

Function.prototype.inheritsFrom = function (superClass) {
	this.prototype = new superClass();
	this.prototype.constructor = this;
	this.prototype.sooper = superClass.prototype;
	return this;
};
