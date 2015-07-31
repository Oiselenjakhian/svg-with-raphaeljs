$(function(){
	var r = Raphael('map', 500, 500),
		attributes = {
            fill: '#fff',
            stroke: '#3899E6',
            'stroke-width': 1,
            'stroke-linejoin': 'round'
        }, 
		arr = new Array();
		
	for (var region in paths) {		
		var obj = r.path(paths[region].path);
		obj.attr(attributes);
		arr[obj.id] = region;
		
		obj
		.hover(function(){
			this.animate({
				fill: '#1669AD'
			}, 300);			
		}, function(){
			this.animate({
				fill: '#FFFFFF'
			}, 300);
		});
		
		$(obj.node).qtip({ 
			content: { text: 'Name: ' +  paths[arr[obj.id]].name },
            style: {
                background: '#000000',
                color: '#ffffff',
                border: { width: 6, radius: 3, color: '#ff0000' }
            },
			position: {
				my: 'left center',
				at: 'bottom center',
				target: 'mouse',
				adjust: { x: 20, y: 25 }
			}
        });
	}
	
	r.setViewBox(0, 0, 1000, 1000, true);
});