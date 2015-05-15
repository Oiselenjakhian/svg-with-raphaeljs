$(function(){
	var paper = Raphael('container', 500, 500);
	
	var text1 = paper.text(200, 100, "Raphaël").attr({ "fill": "#F00", "font-size": "40", "text-anchor": "start" });
	var text2 = paper.text(200, 200, "Raphaël").attr({ "fill": "#F00", "font-size": "40", "text-anchor": "middle" });
	var text3 = paper.text(200, 300, "Raphaël").attr({ "fill": "#F00", "font-size": "40", "text-anchor": "end" });
});