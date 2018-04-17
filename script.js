function initMap() {
        var viaduct = {lat: 50.835464, lng: -0.141790};
        var dukeofyorks = {lat: 50.833912, lng: -0.138337};
        var stbartholomews = {lat: 50.830886, lng: -0.137072};
        var station = {lat: 50.829000, lng: -0.141250};
        var theobaldhouse = {lat: 50.828889, lng: -0.138180};
        var hanover = {lat: 50.827241, lng: -0.130466};
        var astoria = {lat: 50.825536, lng: -0.135943};
        var kingqueens = {lat: 50.824603, lng: -0.137050};
        var royalpavilion = {lat: 50.822352, lng: -0.137685};
        var northstreet = {lat: 50.822610, lng: -0.139652};
        var embassycourt = {lat: 50.823137, lng: -0.156313};
        var bandstand = {lat: 50.822131, lng: -0.154922};
        var westernterrace = {lat: 50.824357, lng: -0.152101};
        var metropole = {lat: 50.821567, lng: -0.148906};
        var grandhotel = {lat: 50.821460, lng: -0.147332};
        var brightoncentre = {lat: 50.821259, lng: -0.146264};
        var odeon = {lat: 50.821080, lng: -0.145315};
        var hippodrome = {lat: 50.821813, lng: -0.142650};
        var synagogue = {lat: 50.821207, lng: -0.143014};
        var palacepier = {lat: 50.816856, lng: -0.136738};
        var madeiradrive = {lat: 50.817161, lng: -0.122433};
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
          animation: google.maps.Animation.DROP,
        });

        var dukeofyorkDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Duke of York's Picturehouse (Ref 2)</h2>"+
        '<div id="bodyContent">'+
        '<p> Oldest cinema in continued use in Britain.</p>'
        '</div>'+
        '</div>';

        var dukeofyorkInfowindow = new google.maps.InfoWindow({
          content: dukeofyorkDes
         });


        var stationmarker = new google.maps.Marker({
           position: station,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        });

        var stationDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Brighton Station (Ref 4)</h2>"+
        '<div id="bodyContent">'+
        '<p>Brighton railway station built 1840.</p>'
        '</div>'+
        '</div>';

        var stationInfowindow = new google.maps.InfoWindow({
          content: stationDes
         });

        var viaductmarker = new google.maps.Marker({
           position: viaduct,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        });

        var viaductDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>London Road Viaduct (Ref 1)</h2>"+
        '<div id="bodyContent">'+
        '<p>400 yard long Grade II* listed railway viaduct.</p>'
        '</div>'+
        '</div>';

        var viaductInfowindow = new google.maps.InfoWindow({
          content: viaductDes
         });


        var stbartholomewsmarker = new google.maps.Marker({
           position: stbartholomews,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        });

        var stbartholomewsDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>St Bartholomew's Church (Ref 3)</h2>"+
        '<div id="bodyContent">'+
        '<p>Neo-gothic Church built in 1872.</p>'
        '</div>'+
        '</div>';

        var stbartholomewsInfowindow = new google.maps.InfoWindow({
          content: stbartholomewsDes
         });


        var theobaldhousemarker = new google.maps.Marker({
           position: theobaldhouse,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        });

        var theobaldhouseDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Theobald House (Ref 5)</h2>"+
        '<div id="bodyContent">'+
        '<p>Affordable housing tower block.</p>'
        '</div>'+
        '</div>';

        var theobaldhouseInfowindow = new google.maps.InfoWindow({
          content: theobaldhouseDes
         });

        var hanovermarker = new google.maps.Marker({
           position: hanover,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var hanoverDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Hanover Residences (Ref 6)</h2>"+
        '<div id="bodyContent">'+
        '<p>Colourful victorian terrace.</p>'
        '</div>'+
        '</div>';

        var hanoverInfowindow = new google.maps.InfoWindow({
          content: hanoverDes
         });

        var astoriamarker = new google.maps.Marker({
           position: astoria,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var astoriaDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>(Abandoned) Astoria Theatre (Ref 7)</h2>"+
        '<div id="bodyContent">'+
        '<p>Abandoned cinema.</p>'
        '</div>'+
        '</div>';

        var astoriaInfowindow = new google.maps.InfoWindow({
          content: astoriaDes
         });

        var kingandqueensmarker = new google.maps.Marker({
           position: kingqueens,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var kingandqueensDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>King and Queen's Pub (Ref 8)</h2>"+
        '<div id="bodyContent">'+
        '<p>Tudor style pub.</p>'
        '</div>'+
        '</div>';

        var kingandqueensInfowindow = new google.maps.InfoWindow({
          content: kingandqueensDes
         });



        var pavilionmarker = new google.maps.Marker({
           position: royalpavilion,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var pavilionDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>The Royal Pavilion (Ref 9)</h2>"+
        '<div id="bodyContent">'+
        "<p>Prince Regent's Palace.</p>"
        '</div>'+
        '</div>';

        var pavilionInfowindow = new google.maps.InfoWindow({
          content: pavilionDes
         });

        var northstreetmarker = new google.maps.Marker({
           position: northstreet,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        });

        var northstreetDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>163 North Street (Ref 10)</h2>"+
        '<div id="bodyContent">'+
        "<p>Edwardian baroque style building.</p>"
        '</div>'+
        '</div>';

        var northstreetInfowindow = new google.maps.InfoWindow({
          content: northstreetDes
         });

        var embassycourtmarker = new google.maps.Marker({
           position: embassycourt,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var embassycourtDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Embassy Court (Ref 11)</h2>"+
        '<div id="bodyContent">'+
        "<p>Early modern residential block.</p>"
        '</div>'+
        '</div>';

        var embassycourtInfowindow = new google.maps.InfoWindow({
          content: embassycourtDes
         });

        var bandstandmarker = new google.maps.Marker({
           position: bandstand,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var bandstandDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Hove Bandstand (Ref 12)</h2>"+
        '<div id="bodyContent">'+
        "<p>Victorian bandstand.</p>"
        '</div>'+
        '</div>';

        var bandstandInfowindow = new google.maps.InfoWindow({
          content: bandstandDes
         });

        var westernterracemarker = new google.maps.Marker({
           position: westernterrace,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var westernterraceDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Western Terrace (Ref 13)</h2>"+
        '<div id="bodyContent">'+
        "<p>Unique architecture in a cul-de-sac off Western Road</p>"
        '</div>'+
        '</div>';

        var westernterraceInfowindow = new google.maps.InfoWindow({
          content: westernterraceDes
         });



        var metropolemarker = new google.maps.Marker({
           position: metropole,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var metropoleDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Metropole Hotel (Ref 14)</h2>"+
        '<div id="bodyContent">'+
        "<p>Alfred Waterhouse red terracotta seafront building.</p>"
        '</div>'+
        '</div>';

        var metropoleInfowindow = new google.maps.InfoWindow({
          content: metropoleDes
         });


        var grandhotelmarker = new google.maps.Marker({
           position: grandhotel,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var grandhotelDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>The Grand Hotel (Ref 15)</h2>"+
        '<div id="bodyContent">'+
        "<p>Iconic Victorian seafront hotel.</p>"
        '</div>'+
        '</div>';

        var grandhotelInfowindow = new google.maps.InfoWindow({
          content: grandhotelDes
         });

        var brightoncentremarker = new google.maps.Marker({
           position: brightoncentre,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var brightoncentreDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>The Brighton Centre (Ref 16)</h2>"+
        '<div id="bodyContent">'+
        "<p>Brutalist concrete building.</p>"
        '</div>'+
        '</div>';

        var brightoncentreInfowindow = new google.maps.InfoWindow({
          content: brightoncentreDes
         });


        var odeonmarker = new google.maps.Marker({
           position: odeon,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var odeonDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Kingswest Building (Odeon/Pryzm) (Ref 17)</h2>"+
        '<div id="bodyContent">'+
        "<p>Odeon Cinema/Pryzm, contender for ugliest building in Brighton.</p>"
        '</div>'+
        '</div>';

        var odeonInfowindow = new google.maps.InfoWindow({
          content: odeonDes
         });

        var hippodromemarker = new google.maps.Marker({
           position: hippodrome,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var hippodromeDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>(Abandoned) Brighton Hippodrome (Ref 18)</h2>"+
        '<div id="bodyContent">'+
        "<p>Abdandoned variety theatre.</p>"
        '</div>'+
        '</div>';

        var hippodromeInfowindow = new google.maps.InfoWindow({
          content: hippodromeDes
         });


        var synagoguemarker = new google.maps.Marker({
           position: synagogue,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var synagogueDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Middle Street Synagogue (Ref 19)</h2>"+
        '<div id="bodyContent">'+
        "<p>Synagogue designed by Thomas Lainson in 1875.</p>"
        '</div>'+
        '</div>';

        var synagogueInfowindow = new google.maps.InfoWindow({
          content: synagogueDes
         });

        var palacepiermarker = new google.maps.Marker({
           position: palacepier,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var palacepierDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>The Palace Pier (Ref 20)</h2>"+
        '<div id="bodyContent">'+
        "<p>One of the most popular tourist attractions in the UK.</p>"
        '</div>'+
        '</div>';

        var palacepierInfowindow = new google.maps.InfoWindow({
          content: palacepierDes
         });

        var madeiramarker = new google.maps.Marker({
           position: madeiradrive,
           map: map,
           icon: custom_marker,
           animation: google.maps.Animation.DROP,
        })

        var madeiraDes =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h2>Madeira Terrace (Ref 21)</h2>"+
        '<div id="bodyContent">'+
        "<p>Cast-iron seafront arches.</p>"
        '</div>'+
        '</div>';

        var madeiraInfowindow = new google.maps.InfoWindow({
          content: madeiraDes
         });


        // var bthcontentString =
        //     '<div id="content">'+
        //     '<div id="siteNotice">'+
        //     '</div>'+
        //     '<h1>Brighton Town Hall</h1>'+
        //     '<div id="bodyContent">'+
        //     '<p> This is Brighton Town Hall </p>'
        //     '</div>'+
        //     '</div>';
        //
        // var infowindow = new google.maps.InfoWindow({
        //   content: bthcontentString
        // });
        //
        //
        //   var marker2 = new google.maps.Marker({
        //   position: viaduct,
        //   // label: '1',
        //   map: map, //which map the marker is to be displayed on
        //   title: 'The Viaduct',
        //   icon: viductMarker,
        //   animation: google.maps.Animation.DROP,
        //   opacity: 1,
        //
        //   // draggable: true,
        // });
        //
        // var infowindow = new google.maps.InfoWindow({
        //   content: bthcontentString
        // });
        //
        dukeofyorkmarker.addListener('click', function() {
            dukeofyorkInfowindow.open(map, dukeofyorkmarker);
          });

        stationmarker.addListener('click', function() {
            stationInfowindow.open(map, stationmarker);
          });

        viaductmarker.addListener('click', function() {
             viaductInfowindow.open(map, viaductmarker);
          });

        stbartholomewsmarker.addListener('click', function() {
          stbartholomewsInfowindow.open(map, stbartholomewsmarker);
        });

        theobaldhousemarker.addListener('click', function() {
          theobaldhouseInfowindow.open(map, theobaldhousemarker);
        });

        hanovermarker.addListener('click', function() {
          hanoverInfowindow.open(map, hanovermarker);
        });

        astoriamarker.addListener('click', function() {
          astoriaInfowindow.open(map, astoriamarker);
        });
        kingandqueensmarker.addListener('click', function() {
          kingandqueensInfowindow.open(map, kingandqueensmarker);
        });
        pavilionmarker.addListener('click', function() {
          pavilionInfowindow.open(map, pavilionmarker);
        });
        northstreetmarker.addListener('click', function() {
          northstreetInfowindow.open(map, northstreetmarker);
        });
        embassycourtmarker.addListener('click', function() {
          embassycourtInfowindow.open(map, embassycourtmarker);
        });
        bandstandmarker.addListener('click', function() {
          bandstandInfowindow.open(map, bandstandmarker);
        });
        westernterracemarker.addListener('click', function() {
          westernterraceInfowindow.open(map, westernterracemarker);
        });
        metropolemarker.addListener('click', function() {
          metropoleInfowindow.open(map, metropolemarker);
        });
        grandhotelmarker.addListener('click', function() {
          grandhotelInfowindow.open(map, grandhotelmarker);
        });
        brightoncentremarker.addListener('click', function() {
          brightoncentreInfowindow.open(map, brightoncentremarker);
        });
        odeonmarker.addListener('click', function() {
          odeonInfowindow.open(map, odeonmarker);
        });
        hippodromemarker.addListener('click', function() {
          hippodromeInfowindow.open(map, hippodromemarker);
        });
        synagoguemarker.addListener('click', function() {
          synagogueInfowindow.open(map, synagoguemarker);
        });
        palacepiermarker.addListener('click', function() {
          palacepierInfowindow.open(map, palacepiermarker);
        });
        madeiramarker.addListener('click', function() {
          madeiraInfowindow.open(map, madeiramarker);
        });



      }
