// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);
		
})();

//Flickity for gallery corousel
var flkty = new Flickity( '.main-gallery', {
  
  cellAlign: 'left',
  contain: true
});

// const lightBox = document.querySelector('.lightbox'),
// 	  closeButton = document.querySelector('.close-lightbox'),
// 	  poster = document.querySelector('.poster')

// function popLightBox() {
// 	// make the lightbox show up
// 	lightBox.classList.add('show-lightbox');
// }
	
// function closeLightBox(event) {
// 	event.preventDefault(); // e and event mean the same thing. they are event handlers
	
// 	// make the LightBox show up
// 	lightBox.classList.remove('show-lightbox');
// 	houseVideo.currentTime = 0; // rewind the video
// 	houseVideo.pause();
	
// }
	
// closeButton.addEventListener("click", closeLightBox);
// poster.addEventListener("click", popLightBox);




