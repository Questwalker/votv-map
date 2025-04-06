function mapClickEvent() {
    // Reset information text when user clicks off a point
    information_header.innerHTML = 'Select a Point'
    information_coords.innerHTML = ''
    information_text.innerHTML = 'Click on a point on the map to see some information about what it is and where it\'s located, along with some additional pictures that can help you pinpoint <i>exactly</i> it is or what it looks like.<br><br>Use the <i>Points</i> tab to hide and show certain points on the map.'
    information_images.replaceChildren()
}

function pointClickEvent() {
    // Update information text when point is clicked, and focus on info tab
    selectTab(0)
    let data = points[this.options.pointindex]
    information_header.innerHTML = data.name
    information_coords.innerHTML = `x: <u>${data.xPos}</u>, y: <u>${data.yPos}</u>`
    information_text.innerHTML = data.description
    information_images.replaceChildren()
    if (data.related_images && data.related_images.length) {
        data.related_images.forEach((link, imageindex) => {
            let element = document.createElement('img')
            element.src = link
            element.onclick = function() { previewImage(element) }
            element.classList.add('information_image')
            element.dataset.pointindex = this.options.pointindex
            element.dataset.imageindex = imageindex
            information_images.appendChild(element)
        })
    }
}

function toggleCategoryButton() {
    // Parse and pass information to function
    setCategoryVisibility(this.parentElement.id, !parseInt(this.dataset.visible), {button: this})
}

function setCategoryVisibility(categoryname, setting, {button=undefined, updatestorage=true}) {
    // Hide or show layer and change visibility button (button must exist in the page)
    if (button == undefined) button = references[categoryname].menuparent.querySelector('.category_parentbutton')
    let layer = references[categoryname].leafletgroup
    if (setting) {
        layer.addTo(map)
        button.classList.remove('gray')
        button.innerText = '[S]'
        button.dataset.visible = 1
    } else {
        map.removeLayer(layer)
        button.classList.add('gray')
        button.innerText = '[H]'
        button.dataset.visible = 0
    }
    // Update storage
    if (updatestorage && Boolean(setting) != settings.settings[`${categoryname}_visible`]) {
        settings.settings[`${categoryname}_visible`] = Boolean(setting)
        pushToStorage()
    }
    syncWidgets()
}

function categoryVisibilityCallback(settings_id, value) {
    if (settings[settings_id.replace('_visible', '')] != undefined) { // Sanity Check
        setCategoryVisibility(settings_id.replace('_visible', ''), value, {updatestorage: false})
    }
}

// Create markers and categories for each when nessessary
var markerzoffset = 0
points.forEach((data, pointindex) => {
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`

    // If the icon hasn't been loaded before, load it into ref.icons
    if (!references.icons[data.icon]) {
        references.icons[data.icon] = L.icon({
            iconUrl: data.icon,
            iconSize: [24, 24],
        })
    }
    // If the category hasn't been loaded before, create it and add some basic data
    if (!references[categoryname]) {
        // Prepare settings
        let categoryvisible = !(categoryname == 'category_halloween_pumpkins' || categoryname == 'category_chicken_burgers' || categoryname == 'category_kerfur_parts' || categoryname == 'category_skulls')
        let setting_id = `${categoryname}_visible`
        registerSetting(setting_id, categoryvisible, 'boolean', {callback: categoryVisibilityCallback})
        if (settings.settings[setting_id] != undefined) {
            categoryvisible = settings.settings[setting_id]
        }

        // Create generic category container element
        let categorycontainer = document.createElement('div')
        categorycontainer.id = categoryname
        categorycontainer.classList.add('category_parent')
        information_points.appendChild(categorycontainer)

        // Show/Hide button
        let visibilitybutton = document.createElement('div')
        visibilitybutton.classList.add('category_parentbutton')
        visibilitybutton.classList.add('unselectable')
        if (!categoryvisible) {
            visibilitybutton.classList.add('gray')
            visibilitybutton.innerText = '[H]'
            visibilitybutton.dataset.visible = 0
        } else {
            visibilitybutton.innerText = '[S]'
            visibilitybutton.dataset.visible = 1
        }
        visibilitybutton.addEventListener('click', toggleCategoryButton)
        categorycontainer.appendChild(visibilitybutton)

        // Text label
        let textlabel = document.createElement('div')
        textlabel.classList.add('category_parentname')
        textlabel.innerText = (data.category != '' && data.category != undefined) ? data.category : 'Miscellaneous'
        categorycontainer.appendChild(textlabel)

        // Add references
        references[categoryname] = {
            'menuparent': categorycontainer,
            'leafletgroup': L.layerGroup()
        }
        if (categoryvisible) references[categoryname].leafletgroup.addTo(map)
    }

    // Create the marker
    let marker = L.marker(
        convertGameToLeaflet([data.xPos,data.yPos]), 
        {
            icon: references.icons[data.icon],
            'zIndexOffset': markerzoffset,
            'pointindex': pointindex
        }
    )
    markerzoffset += 1
    // Bind click event, add popup, add to category layer
    marker.on('click', pointClickEvent)
    if (settings.settings.marker_popup_labels != undefined && settings.settings.marker_popup_labels == true) {
        marker.bindPopup(L.popup({ // Make enable/disableable in user settings?
            'content': data.name,
            'offset': [0,3],
            'autoPan': false
        }))
    }
    marker.addTo(references[categoryname].leafletgroup)
})

// Sync UI
syncWidgets()

// Create lines
lines.forEach((data, lineindex) => {
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`
    let polygon = L.polyline(data.coordinates.map(convertGameToLeaflet),
        {
            'smoothFactor': 0.5,
            'color': data.color,
            'weight': data.linethickness,
            'lineCap': 'square',
            'lineJoin': 'miter',
            'fill': Boolean(data.fill),
            'fillColor': data.fill,
            'interactive': false
        }
    )
    if (data.category) {
        // limitation: the line can only add itself to layers that already exist, otherwise it will error
        polygon.addTo(references[categoryname].leafletgroup)
    } else {
        polygon.addTo(map)
    }
})

map.on('click', mapClickEvent)
mapClickEvent()

