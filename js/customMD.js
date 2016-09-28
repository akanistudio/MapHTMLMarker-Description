function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		if (typeof(self.args.marker_html) !== 'undefined') {
			div.innerHTML = '<div class="marker-inner">' + self.args.marker_html + '<div class="infobox"></div>"' + '</div>';
		}

		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);

		var NadInfoBoxArray = div.getElementsByClassName('marker-inner');
		var InfoBoxArray = NadInfoBoxArray[0].getElementsByClassName('infobox');
		var InfoBox = InfoBoxArray[0];
		if (typeof(self.args.infobox_html) !== 'undefined')
			InfoBox.innerHTML = self.args.infobox_html;
		if (typeof(self.args.infobox_move_x) !== 'undefined') infobox_move_x = self.args.infobox_move_x;
		else
			infobox_move_x = 0;
		if (typeof(self.args.infobox_move_y) !== 'undefined')
			infobox_move_y = self.args.infobox_move_y;
		else
			infobox_move_y = 0;
		InfoBox.style.position = 'relative';
		//panes.overlayImage.appendChild(InfoBox);

	}

	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	if (point) {
		div.style.left = (point.x - (parseInt(div.offsetWidth, 10)/2)) + 'px';
		div.style.top = (point.y - parseInt(div.offsetHeight, 10)) + 'px';
		if (typeof(InfoBox) !== 'undefined') {
			InfoBox.style.left = (infobox_move_x + (parseInt(div.offsetWidth, 10)/2) - (parseInt(InfoBox.offsetWidth, 10)/2)) + 'px';
			InfoBox.style.top = (infobox_move_y - (parseInt(div.offsetHeight, 10)) - (parseInt(InfoBox.offsetHeight, 10))) + 'px';
		}
	}

	if (typeof(InfoBox) == 'undefined' && typeof(div) !== 'undefined') {
		var NadInfoBoxArray = div.getElementsByClassName('marker-inner');
		var InfoBoxArray = NadInfoBoxArray[0].getElementsByClassName('infobox');
		var InfoBox = InfoBoxArray[0];
	}

	google.maps.event.addDomListener(div, "click", function(event) {
		var InfoBoxClassArray = document.getElementsByClassName("infobox");
		for (var i = 0; i < InfoBoxClassArray.length; i++) {
			InfoBoxClassArray[i].style.visibility = 'hidden';
		}
		InfoBox.style.visibility = 'visible';
		google.maps.event.trigger(self, "click");
	});
	
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};