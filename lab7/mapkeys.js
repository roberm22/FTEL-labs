//console.log('Leaflet - mymap - construction - start');
var initLat = 40.452776; var initLong = -3.725842; var initZoom=15;
//console.log('Leaflet - map - construction - tile');
var mymap = L.map('mapa').setView([initLat, initLong], initZoom);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
         attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery  <a href="http://mapbox.com">Mapbox</a>',
         maxZoom: 18,
         id: 'afc.0lifngg4',
         accessToken: 'pk.eyJ1IjoiYWZjIiwiYSI6ImNpcW02dzBwdzAwMWRpMm5rbHg3MGJwdmQifQ.Rnm7DRKFQWHkXw5GsCHdYw'
   }).addTo(mymap);
