var nav = document.getElementById("live-on-live");
var navlist = nav.children;
var con = document.getElementById("tab-live-on-live");
var conlist = con.children;
for (var i = 0; i < navlist.length; i++) {
	navlist[i].index = i;
	navlist[i].onmouseover = function() {
		for (var m = 0; m < conlist.length; m++) {
			// border-bottom: #00a1d6 1px solid;
			// color: #00a1d6;borderBottom ,
			navlist[m].style.borderBottom="#ffffff 1px solid";
			navlist[m].style.color="#000000";
			navlist[m].className = "";
			conlist[m].style.display = "none";
		}
		this.className = "active";
		conlist[this.index].style.display = "block";
		navlist[this.index].style.borderBottom="#00a1d6 1px solid";
		navlist[this.index].style.color="#00a1d6";
	}
}
