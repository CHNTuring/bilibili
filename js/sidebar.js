window.onload = function() {
	var aside = document.getElementById("aside");
	var flexd = document.getElementsByClassName("flexd")[0];
	var menu = document.getElementById("menu");
	var div = menu.children;
	var sidebar = document.getElementById("sidebar");

	menu.onclick = function() {
		if (sidebar.className == 'move_out' || sidebar.className == '') {
			sidebar.className = 'move_in';
		}
	}
	var body = document.getElementsByTagName("body")[0];

	document.onclick = function(e) {
		var evt = e || window.event; // IE: window.event  
		// IE用srcElement获取事件源，而FF用target获取事件源  
		var selected = evt.target || evt.srcElement;
		if (selected.parentNode.id != "menu" && selected.id != "menu" && sidebar.className == 'move_in') {
			sidebar.className = 'move_out';
		}
	}

	window.onscroll = function() {
		var backTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(backTop);

		if (backTop > 40) {
			sidebar.style.top = "0";
			flexd.style.display = "block";
			aside.style.position = "fixed";
			aside.style.left = flexd.offsetLeft + "px";
			aside.style.width = flexd.offsetWidth + "px";
			aside.style.top = "40px";
		} else {
			sidebar.style.top = (40 - backTop) + "px";
			flexd.style.display = "none";
			aside.style.position = "static";
		}
		console.log(backTop);
	}
}
