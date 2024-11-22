const mapSize = 1489.995 // Size of the map using game units
const bounds = [[0, 0], [mapSize, mapSize]]

// Change based on advanced settings?
//  Can use L.Browser.canvas and L.Browser.svg to check browser support for renderers 
if (L.Browser.svg) {
    var renderer = L.svg({padding: 5})
} else if (L.Browser.canvas) {
    var renderer = L.canvas({padding: 5})
} else {
    renderer = undefined
}

var map = L.map('map_pane', {
    crs: L.CRS.Simple,
    maxZoom: 2.6,
    minZoom: -1,
    attributionControl: false,
    zoomControl: false,
    zoomDelta: 1,
    zoomSnap: 0,
    layers: [], // Fetch currently shown layers from user settings and place them here to get them shown on load?
    bounceAtZoomLimits: false,
    renderer: renderer
})

L.imageOverlay('map-264888.png', bounds).addTo(map)

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
map.fitBounds(bounds, {padding: [12, 12]})

var layercontrol = L.control.layers().addTo(map) //DEBUG


