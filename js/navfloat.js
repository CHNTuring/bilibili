window.onload = function() {
	var timer = null;

	var btt = document.getElementById("backtotop");
	var main = document.getElementById("main");

	var top = document.getElementById("top");
	var topTop = top.offsetHeight;

	btt.onclick = function() {
		timer = setInterval(function() {
			var backTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speedTop = backTop / 5;
			document.documentElement.scrollTop = backTop - speedTop;
			if (backTop == 0) {
				clearInterval(timer);
			}

		}, 20);

	}

	var pageHeight = 100;
	window.onscroll = function() {
		var backTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (backTop > pageHeight) {
			btt.style.display = "block";
		} else {
			btt.style.display = "none";
		}
		console.log(backTop);
		console.log(topTop);

		if (backTop >= topTop) {
			console.log(main);
			main.style.marginTop = "80px";
			console.log(main.style.marginTop);
			top.style.position = "fixed";
			top.style.top = "0";
			top.style.left = "0";
			top.style.zIndex = "100";
		} else {
			main.style.marginTop = "40px";
			top.style.position = "static";
		}
	}
}
