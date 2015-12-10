(function () {
	var point = {
		dx:0,
		dy:0,
		centerX:document.body.clientWidth/2,
		centerY:270
	};
	window.onresize=function(){
		point.centerX=document.body.clientWidth/2;
	};
	var lis=document.getElementById("errorContent").getElementsByTagName("li");
	var lisrange=[];
	var l = lis.length
	for (var i = 0; i < l; i++) {
		lisrange.push([lis[i].getAttribute("x"),lis[i].getAttribute("y")])
	};
	move();
	document.onmousemove=function(e){
		var e = e || window.event;
		var dx = point.centerX - e.pageX?e.pageX:e.clientX;
		var dy = point.centerY - e.pageY?e.pageY:e.clientY;
		point.dx = Math.floor(dx > 0? Math.sqrt(dx):-Math.sqrt(-dx));
		point.dy = Math.floor(dy > 0? Math.sqrt(dy):-Math.sqrt(-dy));
		move();
	};
	function move(){
		var dx = point.dx;
		var dy = point.dy;
		for (var i = 0; i < l; i++) {
			lis[i].style.cssText="margin-left:"+(dx*lisrange[i][0])+"px;margin-top:"+(dy*lisrange[i][1])+"px";
		};
	};
})()