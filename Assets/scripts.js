          
function initMap() {
    // Map styles for light mode
    var lightMap = new google.maps.StyledMapType(
        [
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
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
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
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
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
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
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
],
        {name: 'Light Map'});
                        
    // Map styles for night mode
    var darkMap = new google.maps.StyledMapType(
        [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
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
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
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
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
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
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
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
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
],
        {name: 'Dark Map'});

    // Creating a new map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.363, lng: 131.044},
        zoom: 3,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                         'styled_map']
        },
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: false,
        streetViewControl: false,
    });
                 
    // Firebase get data
    var currentOpenInfoBox;
    firebase.database().ref('lh-atlas').once('value').then(function(snapshot) {
        snapshot.forEach(function(marker) {                    
            var markerIcon, i=0;
            if(marker.val().type == "ehr") {
                // Data is EHR
                markerIcon = "Assets/ehr.png";
                var popup = 
                    '<div class="content">'+
                    '<div class="header">'+
                    '<h1 class="ehr">EHR User</h1>'+
                    '<p class="name">' + marker.val().name + '</p>'+
                    '<p class="version">Version ' + marker.val().version + '</p>'+
                    '<p class="location">' + marker.val().location + '</p>'+
                    '<p class="contact">Contact at: ' + marker.val().contactEmail + '</p>'+
                    '<a class="btn-flat waves-effect" onclick="moreDetails(\'' + marker.val().name + '\')\">MORE INFO</a>'+
                    '</div>'+
                    '</div>';
                                
                // Data is Toolkit
            } else if (marker.val().type == "toolkit") {
                markerIcon = "Assets/toolkit.png";
                var popup = 
                    '<div class="content">'+
                    '<div class="header">'+
                    '<h1 class="toolkit">Toolkit User</h1>'+
                    '<p class="name">' + marker.val().name + '</p>'+
                    '<p class="version">Version ' + marker.val().version + '</p>'+
                    '<p class="location">' + marker.val().location + '</p>'+
                    '<p class="contact">Contact at: ' + marker.val().contactEmail + '</p>'+
                    '<a class="btn-flat waves-effect" onclick="moreDetails(\'' + marker.val().name + '\')\">MORE INFO</a>'+
                    '</div>'+
                    '</div>';
                            
                // Data is Radiology
            } else if (marker.val().type == "radiology") {
                markerIcon = "Assets/radiology.png";
                var popup = 
                    '<div class="content">'+
                    '<div class="header">'+
                    '<h1 class="radiology">Radiology User</h1>'+
                    '<p class="name">' + marker.val().name + '</p>'+
                    '<p class="version">Version ' + marker.val().version + '</p>'+
                    '<p class="location">' + marker.val().location + '</p>'+
                    '<p class="contact">Contact at: ' + marker.val().contactEmail + '</p>'+
                    '<a class="btn-flat waves-effect" onclick="moreDetails(\'' + marker.val().name + '\')\">MORE INFO</a>'+
                    '</div>'+
                    '</div>';
                                
                // Data is Event
            } else if (marker.val().type == "event") {
                markerIcon = "Assets/event.png";
                var popup = 
                    '<div class="content">'+
                    '<div class="header">'+
                    '<h1 class="event">Event</h1>'+
                    '<p class="name">' + marker.val().name + '</p>'+
                    '<p class="location">' + marker.val().location + '</p>'+
                    '<a class="btn-flat waves-effect" onclick="moreDetails(\'' + marker.val().name + '\')\">MORE INFO</a>'+
                    '</div>'+
                    '</div>';
            }
                            
            // Creating a marker and infobox for each data value
            var cmd = "var marker"+i+" = new google.maps.Marker({"+
                "     position: JSON.parse(marker.val().coords),"+
                "     map: map,"+
                "     icon: markerIcon"+
                " });"+
                        
                " marker"+i+".addListener('click', function() {"+
                "     infowindow"+i+".open(map, marker"+i+");"+
                "     if(currentOpenInfoBox!=undefined)currentOpenInfoBox.close();"+
                "     currentOpenInfoBox = infowindow"+i+";"+
                " });"+
                " "+
                " var infowindow"+i+" = new google.maps.InfoWindow({"+
                "     content: popup"+
                " });";
                        
            eval(cmd);
            i++;
        });
    });
    //Associate the styled map with the MapTypeId and set it to display.
                    
    var date = new Date();
    if(date.getHours() > 19) {
        map.mapTypes.set('styled_map', darkMap);
    } else {
        map.mapTypes.set('styled_map', lightMap);
    }
                    
    map.setMapTypeId('styled_map');
}