const mapSize = 1489.995 // Size of the map using game units
const bounds = [[0, 0], [mapSize, mapSize]]

// Overriding leaflet's automatic renderer choice
// Change based on advanced settings?
//  Can use L.Browser.canvas and L.Browser.svg to check browser support for renderers
if (L.Browser.svg) {
    // Change padding on renderer so that polylines don't unload when out of sight
    //  There really isn't a better way of doing this..
    var renderer = L.svg({padding: 5})
} else if (L.Browser.canvas) {
    var renderer = L.canvas({padding: 5})
} else {
    renderer = undefined
}

var map = L.map('map_element', {
    crs: L.CRS.Simple,
    maxZoom: 2.6,
    minZoom: -1,
    attributionControl: false,
    zoomControl: false,
    zoomDelta: 1,
    zoomSnap: 0,
    layers: [],
    bounceAtZoomLimits: false,
    renderer: renderer
})

var mapOverlay = L.imageOverlay('map-264888-summer.webp', bounds).addTo(map)

// Hacky fix for the max zoom being not enough to work on smaller devices
//  Changes min zoom to of the map to -2 if the viewport gets too small
function mapsizecheck() {
    if (document.documentElement.clientWidth < 650 || document.documentElement.clientHeight < 500) {
        map.setMinZoom(-2)
    } else {
        map.setMinZoom(-1)
    }
}
window.addEventListener('resize', mapsizecheck)
mapsizecheck()
map.fitBounds(bounds, {padding: [19.5, 19.5]})

// Grayscale effect
if (settings.settings.grayscale_map != undefined && settings.settings.grayscale_map == true) mapOverlay.getElement().classList.add('grayscale_effect')

