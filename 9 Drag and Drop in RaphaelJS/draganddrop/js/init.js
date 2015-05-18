$(function(){
	var paper = Raphael('container', 500, 500);
	
	// Draw a circle at the left hand side of the viewport
	var circle = paper.circle(100, 250, 50).attr({ 'fill' : 'red', 'stroke-width' : 5 });
	
	circle.drag(dragmove, dragstart, dragend);
			
	function dragstart(x, y, e){
		this.current_transform = this.transform();
		this.attr("fill", "yellow");
	}
	
	function dragmove(dx, dy, x, y, e){
		this.transform(this.current_transform+'T'+dx+','+dy)
	}
	
	function dragend(e){
		this.current_transform = this.transform();
		this.attr("fill", "red");
	}
});