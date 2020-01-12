var banner = document.getElementById("banner");
var banner_item = document.getElementById("banner").children;

var clone_banner = banner.cloneNode(true);
var clone_banner_item = clone_banner.children;


console.log(clone_banner_item.length);

banner.removeChild(banner_item[3]);
banner.removeChild(banner_item[2]);
banner.insertBefore(clone_banner_item[3].cloneNode(true), banner_item[0]);
console.log(clone_banner_item.length);


function getStyle(obj, st) {
	if (window.getComputedStyle) {
		return getComputedStyle(obj, null)[st];
	} else {
		return obj.currentStyle[st];
	}
}

var originWidth = getStyle(banner, "marginLeft");
var targetWidth = -1430;
var x = 0;
// var count = 400;
var count = 0;
var x = 5;

var index = 0;

timmer = setInterval(function() {

	var W = getStyle(banner, "marginLeft");

	if (count <= 143) {
		if (x <= parseInt(W) - targetWidth) {
			banner.style["marginLeft"] = parseInt(W) - x + "px";
		}
	} else if (count == 599) {
		prev = (index - 1) % 4;
		index = (index + 1) % 4;
		next = (index + 1) % 4;
		// banner.appendChild(clone_banner_item[index].cloneNode(true));
		banner.appendChild(clone_banner_item[next].cloneNode(true));
		banner.removeChild(banner_item[0])
		banner.style["marginLeft"] = originWidth;
		// console.log(originWidth);
		count = 0;
	} 

	count++;
}, 5)
