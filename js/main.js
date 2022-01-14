"use strict"

//Mobile or PC


const isMobile ={
	Android: function(){
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Window: function(){
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function(){
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Window());
	}}



if (isMobile.any()) {
		document.body.classList.add('_touch');
}
	else{
		document.body.classList.add('_pc')
}






//Menu burger

const iconMenu=document.querySelector('.menu__icon');
const bodyMenu=document.querySelector('.menu__body');
if(iconMenu){
	iconMenu.addEventListener("click", function(e){
		if (document.body.querySelector('_touch')) {
			document.body.classList.toggle("_lock");
		}
		iconMenu.classList.toggle("_active");
		bodyMenu.classList.toggle("_active");
	});

};

//Slider
    document.addEventListener('DOMContentLoaded', function () {
      const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 3000,
      });
    });




//MenuScroll

const menuLinks=document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
		menuLinks.forEach(menuLinks=>{
			menuLinks.addEventListener("click",onMenulinkClick);});





		function onMenulinkClick(e){
			const menuLinks=e.target;
			if (menuLinks.dataset.goto && document.querySelector(menuLinks.dataset.goto)) {
				const gotoBlock=document.querySelector(menuLinks.dataset.goto);
				
				const gotoBlockValue=gotoBlock.getBoundingClientRect().top+ window.pageYOffset - document.querySelector('header').offsetHeight;
				

				if (iconMenu.classList.contains('_active')){
					document.body.classList.remove("._lock")
					iconMenu.classList.remove("._active");
					bodyMenu.classList.remove('._active');
				}

			window.scrollTo({ top:gotoBlockValue, behavior:'smooth'});
			e.preventDefault();
		}
		}
}