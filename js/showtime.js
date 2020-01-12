var timeNow = "";

function showDate() {
	var curDate = new Date();
	var year = curDate.getFullYear();
	var month = curDate.getMonth() + 1;
	var date = curDate.getDate();
	var day = curDate.getDay();
	var week = ["日", "一", "二", "三", "四", "五", "六"];
	var hours = curDate.getHours();
	var minutes = curDate.getMinutes();
	var seconds = curDate.getSeconds();
	var str = year + "年" + time(month) + "月" + time(date) + "日&nbsp;&nbsp;星期" + week[day] + "&nbsp;&nbsp;" + time(hours) +
		"时" + time(minutes) + "分" + time(seconds) + "秒";
	timeNow = year + "-" + time(month) + "-" + time(date) + " " + time(hours) +
		":" + time(minutes);
	document.getElementById("time").innerHTML = str;
}

function time(x) {
	return x > 9 ? x : "0" + x;
}
// window.onload = function() {
	showDate();
	setInterval(showDate, 1000);
// }
