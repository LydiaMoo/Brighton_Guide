
function initMap() {
        var palacepier = {lat: 50.8151275, lng: -0.1371278}; //creates a new location
        var townhall = {lat: 50.8205827, lng: -0.1400487}; //creates a new location
        var styledMapType = new google.maps.StyledMapType([
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]);
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var viductMarker = 'Images/viaduct.png';
        var goldStar = {
          path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
          fillColor: 'yellow',
          fillOpacity: 0.8,
          scale: 0.2,
          strokeColor: 'gold',
          strokeWeight: 14
        };

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14.5, //controls zoom of map, greater number=moe zoomed in
          center: townhall, //uses a marker to center the map
           mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });
  map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');


        var marker = new google.maps.Marker({
          position: palacepier,
          map: map //which map the marker is to be displayed on
        });

        var bthcontentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Brighton Town Hall</h1>'+
            '<div id="bodyContent">'+
            '<p> This is Brighton Town Hall </p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: bthcontentString
        });

        var viaduct = {
          path: 'M23.361,59.855l372.805,0l0,75.847c0,0 -31.682,-72.941 -61.289,0c-0.255,0.628 0,118.388 0,118.388l-40.935,0l0,-118.388c0,0 -35.59,-72.083 -63.78,0c-1.868,4.776 0,118.388 0,118.388l-40.884,0l0,-118.388c0,0 -28.389,-72.772 -62.362,0c-0.618,1.325 0,118.388 0,118.388l-41.193,0l0,-118.388c0,0 -30.985,-71.725 -62.362,0c-0.405,0.927 0,-75.847 0,-75.847Z',
          fillColor: 'orange',
          fillOpacity: 0.8,
          scale: 0.1,
          strokeColor: 'orange',
          strokeWeight: 2
        };

          var marker2 = new google.maps.Marker({
          position: townhall,
          // label: '1',
          map: map, //which map the marker is to be displayed on
          title: 'Brighton Town Hall',
          icon: viductMarker,
          animation: google.maps.Animation.DROP,
          opacity: 1,
          // draggable: true,
        });

function addIcon(location, map) {
  var newmarker = new google.maps.Marker({
    position: location,
    icon: goldStar,
    map: map
}); }


   marker2.addListener('click', function() {
          infowindow.open(map, marker2);
        });

        google.maps.event.addListener(map, 'click', function(event) {
  addIcon(event.latLng, map);
});

      }
