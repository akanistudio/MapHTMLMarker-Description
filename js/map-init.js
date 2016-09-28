function initialize() {
	var myLatlng = new google.maps.LatLng(-31.9546781,115.852662);
	var myLatlng2 = new google.maps.LatLng(-31.9486781,115.862662);
	var myLatlng3 = new google.maps.LatLng(-29.9486781,115.862662);
	var mapOptions = {
		zoom: 14,
		mapTypeId         : google.maps.MapTypeId.ROADMAP,
		scrollwheel       : false,
		draggable         : true,
		mapTypeControl    : false,
		panControl        : false,
		zoomControl       : true,
		zoomControlOptions: {
			style   : google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		center: myLatlng
	}
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	overlay = new CustomMarker(
		myLatlng, 
		map,
		{
			marker_id: '1',
			marker_html: '<img src="img/pin.png" />',
			infobox_html: '<div>test111</div>',
			infobox_move_x: 0,
			infobox_move_y: -14//px
		}
	);
	var markers = [];
	markers.push(overlay);
	overlay = new CustomMarker(
		myLatlng2, 
		map,
		{
			marker_id: '2',
			marker_html: '<img src="img/pin.png" />',
			infobox_html: '<div>test222</div>',
			infobox_move_x: 0,
			infobox_move_y: -14//px
		}
	);
	markers.push(overlay);
	overlay = new CustomMarker(
		myLatlng3, 
		map,
		{
			marker_id: '3',
			marker_html: '<img src="img/pin.png" />',
			infobox_html: '<div>test222</div>',
			infobox_move_x: 0,
			infobox_move_y: -14//px
		}
	);
	markers.push(overlay);
	mcOptions = {styles: [{
	height: 53,
	url: "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png",
	width: 53
	},
	{
	height: 56,
	url: "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png",
	width: 56
	},
	{
	height: 66,
	url: "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m3.png",
	width: 66
	},
	{
	height: 78,
	url: "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m4.png",
	width: 78
	},
	{
	height: 90,
	url: "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m5.png",
	width: 90
	}]}
	
	var markerCluster = new MarkerClusterer(map, markers, mcOptions);
}


google.maps.event.addDomListener(window, 'load', initialize);