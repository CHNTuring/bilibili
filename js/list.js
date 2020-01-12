var danmu = document.getElementById("danmu-list");
var showList = document.getElementById("show-list");
showList.style.display = "none";
danmu.onclick = function() {
	display = showList.style.display;
	// alert(display);
	if (display == "none") {
		showList.style.display = "block";
	}else{
		showList.style.display = "none";
	}
}
