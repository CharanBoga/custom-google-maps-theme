function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 17.123184,
			lng: 79.208824,
		},
		zoom: 5,
		mapId: 'be4ee38b06f1ca0',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
	const markers = [
		[
			"Charan's House",
			17.3850,
			78.4867,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			17.9784,
			79.6008,
			'pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			18.4372,
			79.1288,
			'ghosthouse.svg',
			40,
			48,
		],
		['Castle', 17.3850, 78.4867, 'castle.svg', 40, 53],
		['Warp Pipe', 17.9784, 79.6008, 'pipe.svg', 38, 42.5],
		['Star World', 18.4372, 79.1288, 'star.svg', 38, 38],
		[
			'Donut Plains',
			18.6765,
			78.1026,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			17.2477,
			80.1514,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			19.6694,
			78.5330,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}
