// window.onload = function() {
var button = document.getElementById("right");
var commentList = document.getElementById("comment-list");
var comment = document.getElementById("comment-content");
button.onclick = function() {
	// alert(comment.value.trim());
	if (comment.value.trim() != "") {
		var li = document.createElement("li");
		var img = document.createElement("img");
		var userComment = document.createElement("div");
		var div1 = document.createElement("div");
		var div2 = document.createElement("div");
		var div3 = document.createElement("div");
		var span = document.createElement("span");
		var lv = document.createElement("img");
		img.src = "image/头像.jpg";
		img.className = "user-image";
		userComment.className = "user-comment";
		span.innerHTML = "匿名用户";
		lv.src = "content_image/lv5.png";
		div1.appendChild(span);
		div1.appendChild(lv);
		div2.innerHTML = comment.value.trim();
		div3.innerHTML = "来自网页端&nbsp;&nbsp;&nbsp;" + timeNow;
		userComment.appendChild(div1);
		userComment.appendChild(div2);
		userComment.appendChild(div3);
		li.appendChild(img);
		li.appendChild(userComment);
		commentList.appendChild(li);
		comment.value = "";
	}
}
// }
