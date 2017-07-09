function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
        styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f3dec3"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#f3dec3"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff8f00"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#f3c64f"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a1b2d2"
            }
        ]
    }
],
          zoom: 8,
          scrollwheel: false,
          center: {lat: 41.75, lng: -95}
        });

        var image = 'images/marker.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 41.7, lng: -94.15},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 42.1, lng: -93},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 41.7, lng: -91.55},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 42.1, lng: -90.65},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 41.15, lng: -93.6},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 41.7, lng: -95.35},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 42.1, lng: -96.15},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 41.45, lng: -96.5},
          map: map,
          icon: image
        });

        var image = 'images/marker-small.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 42.1, lng: -97.4},
          map: map,
          icon: image
        });
        var center;
          function calculateCenter() {
            center = map.getCenter();
          }
          google.maps.event.addDomListener(map, 'idle', function() {
            calculateCenter();
          });
          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(center);
          });
      };