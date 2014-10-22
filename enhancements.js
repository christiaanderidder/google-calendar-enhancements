// Run an anonymous function that runs our code to prevent conflicts with other javascripts.
(function() {
	//setInterval(update, 100);
	

	function update()
	{
		var chips = document.getElementsByClassName('cbrd');
		for (var i = 0; i < chips.length; i++)
		{
			var chip = chips[i];
			chip.style.background = "#ff0000";
		}
	}
	update();
})();