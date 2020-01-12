window.onload = function() {
	var videoBottom = document.getElementById("video-bottom");
	var place = document.getElementById("place");
	var vedioDiv = document.getElementById("vedio-div");
	window.onscroll = function() {
		var backTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(videoBottom.offsetHeight);

		if (backTop >= videoBottom.offsetTop + videoBottom.offsetHeight) {
			place.style.display = "block";
			vedioDiv.style.width = "300px";
			vedioDiv.style.height = "170px";
			vedioDiv.style.position = "fixed";
			vedioDiv.style.top = (window.screen.height - 400) + "px";
			vedioDiv.style.right = 100 + "px";
			console.log(vedioDiv);
		} else {
			place.style.display = "none";
			vedioDiv.style.position = "static";
			vedioDiv.style.width = "100%";
			vedioDiv.style.height = "540px";
		}
	}
}
