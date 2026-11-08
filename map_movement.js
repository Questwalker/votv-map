const mapSize = 1489.995 // Size of the map using game units
const bounds = [[0, 0], [mapSize, mapSize]]

// Overriding leaflet's automatic renderer choice
// Change based on advanced settings?
//  Can use L.Browser.canvas and L.Browser.svg to check browser support for renderers
if (L.Browser.svg) {
    // Change padding on renderer so that polylines don't unload when out of sight
    //  There really isn't a better way of doing this..
    var renderer = L.svg({ padding: 5 })
} else if (L.Browser.canvas) {
    var renderer = L.canvas({ padding: 5 })
} else {
    renderer = undefined
}

const map = L.map('map_element', {
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

// Map image stuff
var imageOverlay
var mapOverlay
function loadImage(mapname) {
    if (mapname == undefined || !(mapname == 'spring' || mapname == 'summer' || mapname == 'autumn' || mapname == 'winter')) {
        // sanity check, fallback to summer if anything goes wrong
        mapname = 'summer'
    }
    if (imageOverlay && map.hasLayer(imageOverlay)) {
        map.removeLayer(imageOverlay)
    }
    imageOverlay = L.imageOverlay(`map-264888-${mapname}.webp`, bounds)
    mapOverlay = imageOverlay.addTo(map)
}
if (settings.settings.map_image != undefined) {
    loadImage(settings.settings.map_image)
} else {
    loadImage('summer')
}

// Map image settings
function mapImageSet(_,value) { // Is bound via the settings registerer
    loadImage(value)
}
function mapImageButtonClick(event) {
    if (!this.classList.contains('highlighted_element')) {
        // remove selected
        document.querySelector('[settingwidget_map].highlighted_element').classList.remove('highlighted_element')
        // add selected
        this.classList.add('highlighted_element')
    }
}
registerSetting('map_image', 'mapselector', 'summer', {category: 'settings_appearance', widget: [
    settingwidget_map_spring,
    settingwidget_map_summer, // note: summer is the hardcoded default in many places, 
    settingwidget_map_autumn,
    settingwidget_map_winter
], callback: mapImageSet})

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
map.fitBounds(bounds, { padding: [19.5, 19.5] })

// Grayscale effect
if (settings.settings.grayscale_map != undefined && settings.settings.grayscale_map == true) mapOverlay.getElement().classList.add('grayscale_effect')
