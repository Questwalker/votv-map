const mapSize = 1489.995 // Size of the map in game
const bounds = [[0, 0], [mapSize, mapSize]]
var icon = L.icon({iconUrl: './leaflettest/assets/A.png', iconSize: [24, 24]})
var popup = L.popup({'content': 'Unknown Rozital Technology', 'className': 'font'})
function clickEvent(e) { console.log(this.options.pointdata) }
var map = L.map('map', {
    crs: L.CRS.Simple,
    maxZoom: 3,
    minZoom: -1,
    attributionControl: false,
    zoomControl: false,
    zoomDelta: 1,
    zoomSnap: 0,
    layers: [],
    bounceAtZoomLimits: false,
    // renderer
})
L.imageOverlay('./map-264888.png', bounds).addTo(map)
map.fitBounds(bounds)
var polygon = L.polyline([convertGameToLeaflet([401.509, -50.8]), convertGameToLeaflet([501.503, 50.6]), convertGameToLeaflet([301.51, 5.47])],
{'interactive': false, 'smoothFactor': 0.5, 'weight': 2, 'color': '#ff00ffaa'})
var marker = L.marker(convertGameToLeaflet([0,500]), {icon: icon, 'pointdata': 'Hello, World!'}).bindPopup(popup)
var layercontrol = L.control.layers().addTo(map)
var layer = L.layerGroup()
layercontrol.addOverlay(layer, "Layer")
map.addLayer(layer) // needs to be done based on user settings



















marker.addTo(layer)
polygon.addTo(layer)







function convertUnrealToGame([x,y]) {return [x / 100, y / 100]}
function convertGameToUnreal([x,y]) {return [x * 100, y * 100]}
function convertGameToLeaflet([x,y]) {return [-y + (mapSize/2), x + (mapSize/2)]}
function convertLeafletToGame([y,x]) {return [x - mapSize/2, -(y - mapSize/2)]}
function convertUnrealToLeaflet([x,y]) {return convertGameToLeaflet(convertUnrealToGame([x,y]))}
function convertLeafletToUnreal([y,x]) {return convertGameToUnreal(convertLeafletToGame([y,x]))}
function roundNumber(number, digit=0) {return Math.round((number * Math.pow(10, digit)) * (1 + Number.EPSILON)) / Math.pow(10, digit)}




map.on('mousemove', (e) => {
    [x,y] = convertLeafletToUnreal([e.latlng.lat, e.latlng.lng])
    datatoprint = `${roundNumber(x, 2)}, ${roundNumber(y, 2)}`
})
map.on('click', (e) => {
    datatoprint = convertLeafletToUnreal([e.latlng.lat, e.latlng.lng]).map(roundNumber)
})












// littleton.on('click', clickEvent)
// map.on('click', (e) => {console.log(e)})
// function createPoint([y,x]) {L.marker([y,x]).bindPopup(popup).addTo(map)}
// createPoint(convertGameToLeaflet([0, 0]))
// createPoint(convertGameToLeaflet([375, 375]))
// createPoint(convertGameToLeaflet([-750, -750]))
// createPoint(convertGameToLeaflet([500, 500]))
// createPoint(convertGameToLeaflet(convertUnrealToGame([-36576.55, 75009.78])))