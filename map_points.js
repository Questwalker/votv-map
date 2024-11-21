var points_section = document.getElementById('information_points')
var references = {'icons': {}}
// var references = {
//     "category__satellite_dishes": {
//         "menuparent": Object, // The base container that holds both the parent and the children element (has class .category_parent)
//         "menuchildren": Object, // The container that holds all the children (has class .category_children)
//         "leafletgroup": Object, // The layergroup that contains all leaflet markers in the category 
//         1: {
//             "point": Object,
//             "entry": Object
//         },
//         2: {
//             "point": Object,
//             "entry": Object
//         }
//     },
//     'icons': {
//         'burger': `<leaflet icon reference>`
//     }
// }

function convertUnrealToGame([x,y]) {return [x / 100, y / 100]}
function convertGameToUnreal([x,y]) {return [x * 100, y * 100]}
function convertGameToLeaflet([x,y]) {return [-y + (mapSize/2), x + (mapSize/2)]}
function convertLeafletToGame([y,x]) {return [x - mapSize/2, -(y - mapSize/2)]}
function convertUnrealToLeaflet([x,y]) {return convertGameToLeaflet(convertUnrealToGame([x,y]))}
function convertLeafletToUnreal([y,x]) {return convertGameToUnreal(convertLeafletToGame([y,x]))}
function roundNumber(number, digit=0) {return Math.round((number * Math.pow(10, digit)) * (1 + Number.EPSILON)) / Math.pow(10, digit)}

function pointClickEvent(e) {
    console.log(this.options.pointindex)
}

function toggleCategoryButton(e) {
    console.log(references[this.parentElement.id])
}






points.forEach((data, pointindex) => {
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`

    // If the icon hasn't been loaded before, load it into ref.icons
    if (!references.icons[data.icon]) {
        references.icons[data.icon] = L.icon({
            iconUrl: data.icon,
            iconSize: [24, 24],
        });
    }
    // If the category hasn't been loaded before, create it and add some basic data
    if (!references[categoryname]) {
        console.log(categoryname)
        
        // <div id="category__transformers" class="category_parent">
        //     <div class="category_parentbutton">[S]</div>
        //     <div class="category_parentname">Satellite Dishes</div>
        // </div>

        // Create generic category container element
        let categorycontainer = document.createElement('div')
        categorycontainer.id = categoryname
        categorycontainer.classList.add('category_parent')
        points_section.appendChild(categorycontainer)

        // Show/Hide button
        let visibilitybutton = document.createElement('div')
        visibilitybutton.classList.add('category_parentbutton')
        visibilitybutton.classList.add('unselectable')
        visibilitybutton.innerText = '[S]'
        visibilitybutton.addEventListener('click', toggleCategoryButton)
        categorycontainer.appendChild(visibilitybutton)

        // Text label
        let textlabel = document.createElement('div')
        textlabel.classList.add('category_parentname')
        textlabel.innerText = (data.category != '' && data.category != undefined) ? data.category : 'Miscellaneous'
        categorycontainer.appendChild(textlabel)

        // add references
        references[categoryname] = {
            'menuparent': null,
            'menuchildren': null,
            'leafletgroup': L.layerGroup()
        }
        layercontrol.addOverlay(references[categoryname].leafletgroup, categoryname) //DEBUG
    }
    // Create the marker
    let marker = L.marker(
        convertGameToLeaflet([data.xPos,data.yPos]), 
        {
            icon: references.icons[data.icon],
            'pointindex': pointindex
        }
    )
    // Bind click event, add popup, add to category layer
    marker.on('click', pointClickEvent)
    marker.bindPopup(L.popup({
        'content': data.name,
        'offset': [0,3]
    }))
    marker.addTo(references[categoryname].leafletgroup)









})


lines.forEach((data, lineindex) => {
    let polygon = L.polyline(data.coordinates.map(convertGameToLeaflet),
        {
            'smoothFactor': 0.5,
            'color': data.color,
            'weight': data.linethickness,
            'lineCap': 'square',
            'lineJoin': 'miter',
            'fill': data.fill,
            'fillColor': data.fill,
            'interactive': false
        }
    )
    if (data.category) {
        // limitation: the line can only add itself to layers that already exist, otherwise it will error
        polygon.addTo(references[`category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`].leafletgroup)
    } else {
        polygon.addTo(map)
    }
})









// map.addLayer(references.category_miscellaneous.leafletgroup) // needs to be done based on user settings
// map.removeLayer(references.category_satellite_dishes.leafletgroup) // needs to be done based on user settings





// information_coords = document.getElementById('information_coords')
// function updateCoords(e) {
//     [x,y] = convertLeafletToGame([e.latlng.lat, e.latlng.lng])
//     information_coords.innerHTML = `x: <u>${roundNumber(x, 2)}</u><br>y: <u>${roundNumber(y, 2)}</u>`
// }
// map.on('mousemove', updateCoords)
// map.on('click', updateCoords)

