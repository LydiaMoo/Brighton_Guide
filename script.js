function initMap() {
        var viaduct = {lat: 50.835464, lng: -0.141790}; //creates a new location
        var dukeofyorks = {lat: 50.833912, lng: -0.138337}; //creates a new location
        var stbartholomews = {lat: 50.830886, lng: -0.137072}; //creates a new location
        var station = {lat: 50.829000, lng: -0.141250}; //creates a new location
        var theobaldhouse = {lat: 50.828889, lng: -0.138180}; //creates a new location
        var hanover = {lat: 50.827241, lng: -0.130466}; //creates a new location
        var astoria = {lat: 50.825536, lng: -0.135943}; //creates a new location
        var kingqueens = {lat: 50.824603, lng: -0.137050}; //creates a new location
        var royalpavilion = {lat: 50.822352, lng: -0.137685}; //creates a new location
        var northstreet = {lat: 50.822610, lng: -0.139652}; //creates a new location
        var embassycourt = {lat: 50.823137, lng: -0.156313}; //creates a new location
        var bandstand = {lat: 50.822131, lng: -0.154922}; //creates a new location
        var westernterrace = {lat: 50.824357, lng: -0.152101}; //creates a new location
        var metropole = {lat: 50.821567, lng: -0.148906}; //creates a new location
        var grandhotel = {lat: 50.821460, lng: -0.147332}; //creates a new location
        var brightoncentre = {lat: 50.821259, lng: -0.146264}; //creates a new location
        var odeon = {lat: 50.821080, lng: -0.145315}; //creates a new location
        var hippodrome = {lat: 50.821813, lng: -0.142650}; //creates a new location
        var synagogue = {lat: 50.821207, lng: -0.143014}; //creates a new location
        var palacepier = {lat: 50.816856, lng: -0.136738}; //creates a new location
        var madeiradrive = {lat: 50.817161, lng: -0.122433}; //creates a new location
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

        //Our Custom Map marker
        var custom_marker = 'http://i1213.photobucket.com/albums/cc479/natashahoare/icon_1.png';
        //creats the map
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14.5, //controls zoom of map, greater number=moe zoomed in
          center: station, //uses a marker to center the map
           mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        map.mapTypes.set('styled_map', styledMapType);

        map.setMapTypeId('styled_map');


        var dukeofyorkmarker = new google.maps.Marker({
          position: dukeofyorks,
          map: map,
          icon: custom_marker,
        });


        var stationmarker = new google.maps.Marker({
           position: station,
           map: map,
           icon: custom_marker,
        })


        var viaductmarker = new google.maps.Marker({
           position: viaduct,
           map: map,
           icon: custom_marker,
        })



        var stbartholomewsmarker = new google.maps.Marker({
           position: stbartholomews,
           map: map,
           icon: custom_marker,
        })


        var theobaldhousemarker = new google.maps.Marker({
           position: theobaldhouse,
           map: map,
           icon: custom_marker,
        })


        var hanovermarker = new google.maps.Marker({
           position: hanover,
           map: map,
           icon: custom_marker,
        })


        var astoriamarker = new google.maps.Marker({
           position: astoria,
           map: map,
           icon: custom_marker,
        })


        var kingandqueensmarker = new google.maps.Marker({
           position: kingqueens,
           map: map,
           icon: custom_marker,
        })
         


        var pavilionmarker = new google.maps.Marker({
           position: royalpavilion,
           map: map,
           icon: custom_marker,
        })



        var embassycourtmarker = new google.maps.Marker({
           position: embassycourt,
           map: map,
           icon: custom_marker,
        })



        var bandstandmarker = new google.maps.Marker({
           position: bandstand,
           map: map,
           icon: custom_marker,
        })



        var northstreetmarker = new google.maps.Marker({
           position: northstreet,
           map: map,
           icon: custom_marker,
        })




        var westernterracemarker = new google.maps.Marker({
           position: westernterrace,
           map: map,
           icon: custom_marker,
        })



        var metropolemarker = new google.maps.Marker({
           position: metropole,
           map: map,
           icon: custom_marker,
        })



        var grandhotelmarker = new google.maps.Marker({
           position: grandhotel,
           map: map,
           icon: custom_marker,
        })



        var brightoncentre = new google.maps.Marker({
           position: brightoncentre,
           map: map,
           icon: custom_marker,
        })



        var odeonmarker = new google.maps.Marker({
           position: odeon,
           map: map,
           icon: custom_marker,
        })



        var hippodromemarker = new google.maps.Marker({
           position: hippodrome,
           map: map,
           icon: custom_marker,
        })



        var synagoguemarker = new google.maps.Marker({
           position: synagogue,
           map: map,
           icon: custom_marker,
        })



        var palacepiermarker = new google.maps.Marker({
           position: palacepier,
           map: map,
           icon: custom_marker,
        })



        var madeiramarker = new google.maps.Marker({
           position: madeiradrive,
           map: map,
           icon: custom_marker,
        })


        var bthcontentString =
            '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1>Brighton Town Hall</h1>'+
            '<div id="bodyContent">'+
            '<p> This is Brighton Town Hall </p>'
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: bthcontentString
        });


          var marker2 = new google.maps.Marker({
          position: viaduct,
          // label: '1',
          map: map, //which map the marker is to be displayed on
          title: 'The Viaduct',
          icon: viductMarker,
          animation: google.maps.Animation.DROP,
          opacity: 1,

          // draggable: true,
        });

        var infowindow = new google.maps.InfoWindow({
          content: bthcontentString
        });

        marker2.addListener('click', function() {
            infowindow.open(map, marker2);
          });
      }
