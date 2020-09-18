videojs.registerPlugin('video-loop', function() {
	// Get a reference to the player
	var myPlayer = this;
  
	// Listen for the "ended" event and play the video
	// You can also do this by adding the loop attribute to the player code
	myPlayer.on("ended", function () {
		myPlayer.play();
	});
});