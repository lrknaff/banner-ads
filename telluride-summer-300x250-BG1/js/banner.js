"use strict";

(function (window) {
	//Banner.inheritsFrom( window.Banner_Base );

	function Banner() {
		this.init();
	};

	Banner.prototype.init = function () {
		this.__allowHoverEffect = false;
		this.__width = 300;
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

		this.__BG.css({ transformOrigin: '88px 166px' });
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

		var yStart = 180;
		var yEnd = 43;

		this.__branding.css({ top: yStart, left: 0, width: this.__width, height: 91, opacity: 1 });
		animate(200, this.__branding, { top: yEnd }, 700, "easeInOutQuad");

		this.__logoTelluride.css({ top: -yStart, left: 0, opacity: 0, scale: 1.4 });
		animate(200, this.__logoTelluride, { top: -yEnd, opacity: 1, scale: 1 }, 700, "easeInOutQuad");

		var banner = this;
		setTimeout(function () {
			banner.showCta();
		}, 1000);
	};

	//-------------------------------------------------------------------------

	// show cta 1
	Banner.prototype.showCta = function () {
		this.__ctaBG.css({ top: 0, left: 0, opacity: 1 });
		this.__ctaOne.css({ top: 0, left: 0, opacity: 1 });
		this.__ctaTwo.css({ top: 0, left: 0, opacity: 0 });

		this.__cta.css({ top: 175, left: 0, opacity: 0, scale: 1, height: 75 });
		animate(0, this.__cta, { opacity: 1 }, 1000, "easeOutQuart");

		var banner = this;
		setTimeout(function () {
			banner.hideCta();
		}, 1000);
	};

	//-------------------------------------------------------------------------

	// hide cta 1
	Banner.prototype.hideCta = function () {
		animate(0, this.__ctaOne, { opacity: 0 }, 700, "easeOutQuart");

		var banner = this;
		setTimeout(function () {
			banner.showResolve();
		}, 1000);
	};

	//-------------------------------------------------------------------------

	// show resolve
	Banner.prototype.showResolve = function () {
		animate(0, this.__ctaTwo, { opacity: 1 }, 700, "easeOutQuart");

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

	Banner.prototype.defineInteraction = function () {
		var banner = this;
		var offset = 4;
		this.__bgExit.click(function () {
			banner.clickThrough();
		});
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
