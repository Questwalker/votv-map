var datatoprint = ''

let a = map.getBounds()
let b = map.getPixelBounds()
var intervalId = window.setInterval(function(){document.getElementById('info').innerText =
`${datatoprint}

Center: ${map.getCenter()}
Zoom: ${map.getZoom()}
Bounds: [[${a.getEast()}, ${a.getNorth()}], [${a.getWest()}, ${a.getSouth()}]]
minZoom: ${map.getMinZoom()}
maxZoom: ${map.getMaxZoom()}
maxZoomToFit: ${map.getBoundsZoom(bounds)}

Size: ${map.getSize()}
PixelBounds: [[${b.min.x}, ${b.max.y}], [${b.max.x}, ${b.min.y}]]
PixelOrigin: ${map.getPixelOrigin()}
PixelWorldBounds: ${map.getPixelWorldBounds(map.getZoom())}`}, 200);


// Hacky fix for the max zoom being not enough to work on smaller devices
//  Changes min zoom to of the map to -2 if the viewport gets too small
function mapsizecheck() {
    if (document.documentElement.clientWidth < 650 || document.documentElement.clientHeight < 500) {
        map.setMinZoom(-2);
    }  else {
        map.setMinZoom(-1);
    }
}
window.addEventListener('resize', mapsizecheck);
mapsizecheck()
map.fitBounds(bounds); // adjust bounds after webpages that have their zoom levels changed







