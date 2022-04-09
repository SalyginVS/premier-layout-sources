import { TweenMax, Back } from "gsap";
import initPageTransitions from "~/plugins/initPageTransitions";
import Swiper from "swiper";
import lazySizes from "lazysizes";

/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */

class Demo2 {
	constructor(demo, swiper_el, swiper_conf) {
		this.swiper_el = swiper_el;
		this.swiper_conf = swiper_conf;
		this.demo = demo;
		initPageTransitions();
		this.initDemo();
		this.initSwiper();
		// window.lazySizes.init();
		lazySizes.init();
		this.isOnProjects = false;
	}

	initDemo() {
		// const { Back } = window;
		this.cursor = this.demo.querySelector(".arrow-cursor");
		this.cursorIcon = this.demo.querySelector(".arrow-cursor__icon");
		this.cursorHideElement = this.demo.querySelectorAll(".js_hide_cursor");
		this.cursorBox = this.cursor.getBoundingClientRect();
		this.easing = Back.easeOut.config(1.7);
		this.animationDuration = 0.3;
		this.cursorSide = null; // will be "left" or "right"
		this.cursorInsideSwiper = false;

		// for (let el of this.cursorHideElement) {
		// 	el.addEventListener("mouseenter", () => {
		// 		this.cursor.style.visibility = 'hidden';
		// 	})
		// 	el.addEventListener("mouseleave", () => {
		// 		this.cursor.style.visibility = 'visible';
		// 	})
		// }



		// initial cursor styling
		TweenMax.to(this.cursorIcon, 0, {
			rotation: -135,
			opacity: 0,
			scale: 0.5
		});

		this.swiper_el.addEventListener("mousemove", e => {
			this.clientX = e.clientX;
			this.clientY = e.clientY;

			e.target.closest('.js_hide_cursor')
				? this.cursor.style.visibility = 'hidden'
				: this.cursor.style.visibility = 'visible';
		});
		this.cursorIcon.addEventListener("drag", e => {
			this.clientX = e.clientX;
			this.clientY = e.clientY;
		});






		const render = () => {
			TweenMax.set(this.cursor, {
				x: this.clientX,
				y: this.clientY,
				opacity: 1
			});
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);

		// mouseenter
		const onSwiperMouseEnter = e => {

			this.swiperBox = e.target.getBoundingClientRect();

			// if (!this.clientX) this.clientX = e.clientX;
			// if (!this.clientY) this.clientY = e.clientY;

			this.clientX = e.clientX;
			this.clientY = e.clientY;

			let startRotation;
			if (this.clientY < this.swiperBox.top + this.swiperBox.height / 2) {
				startRotation = -135;
			} else {
				startRotation =
					this.clientX > window.innerWidth / 2 ? 135 : -315;
			}
			TweenMax.set(this.cursorIcon, {
				rotation: startRotation
			});

			TweenMax.to(this.cursorIcon, this.animationDuration, {
				rotation: this.cursorSide === "right" ? 0 : -180,
				scale: 1,
				opacity: 1,
				ease: this.easing
			});
		};

		// mouseLeave
		const onSwiperMouseLeave = e => {

			this.swiperBox = e.target.getBoundingClientRect();

			let outRotation = 0;
			if (this.clientY < this.swiperBox.top + this.swiperBox.height / 2) {
				outRotation = this.cursorSide === "right" ? -135 : -45;
			} else {
				outRotation = this.cursorSide === "right" ? 135 : -315;
			}

			TweenMax.to(this.cursorIcon, this.animationDuration, {
				rotation: outRotation,
				opacity: 0,
				scale: 0.3
			});


			this.cursorInsideSwiper = false;
		};

		// move cursor from left to right or right to left inside the Swiper
		const onPrevNextMouseMove = (e) => {
			if (this.cursorInsideSwiper) {
				TweenMax.to(this.cursorIcon, this.animationDuration, {
					rotation: this.cursorSide === "right" ? -180 : 0,
					ease: this.easing
				});
				this.cursorSide = e.currentTarget.classList.contains("swiper-button-prev") ? "right" : "left";
			}


			if (!this.cursorInsideSwiper) {
				this.cursorInsideSwiper = true;
			}
		};

		const swiperContainer = this.swiper_el;
		swiperContainer.addEventListener("mouseenter", onSwiperMouseEnter);
		swiperContainer.addEventListener("mouseleave", onSwiperMouseLeave);

		const swiperButtonPrev = this.swiper_el.querySelector(".swiper-button-prev");
		const swiperButtonNext = this.swiper_el.querySelector(".swiper-button-next");
		swiperButtonPrev.addEventListener("mousemove", onPrevNextMouseMove);
		swiperButtonNext.addEventListener("mousemove", onPrevNextMouseMove);
	}

	initSwiper() {
		// const { Swiper } = window;
		this.swiper = new Swiper(this.swiper_el, this.swiper_conf);
		this.swiper.on("touchMove", e => {
			this.clientX = e.clientX;
			this.clientY = e.clientY;

			// TweenMax.to(this.cursorIcon, this.animationDuration, {
			// 	rotation: this.cursorSide === "right"  ? 0 : -180,
			// 	ease: this.easing
			// });
		});

		this.bumpCursorTween = TweenMax.to(this.cursor, 0.1, {
			scale: 0.85,
			onComplete: () => {
				TweenMax.to(this.cursor, 0.2, {
					scale: 1,
					ease: this.easing
				});
			},
			paused: true
		});

		this.swiper.on("slideChange", () => {
			this.bumpCursorTween.play();
		});
	}
}

export default Demo2;
