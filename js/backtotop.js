window.onload = function () {
	var timer = null;

	var btt = document.getElementById("backtotop");

	btt.onclick = function () {
		timer = setInterval(function () {
			var backTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speedTop = backTop / 5;
			document.documentElement.scrollTop = backTop - speedTop;
			if (backTop == 0) {
				clearInterval(timer);
			}

		}, 20);

	}

	var pageHeight = 100;
	window.onscroll = function () {
		var backTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (backTop > pageHeight) {
			btt.style.display = "block";
		} else {
			btt.style.display = "none";
		}
	}
}
