var references = {'icons': {}, 'tabsystems': []}
// var references = {
//     "category__satellite_dishes": {
//         "menuparent": Object, // The base container that holds the button and text (has class .category_parent)
//         "leafletgroup": Object // The layergroup that contains all leaflet markers in the category 
//     },
//     "icons": {
//         "burger": `<leaflet icon reference>`
//     },
//     "tabsystems": [
//         { "tabs": [], "sections": [] }
//     ]
// }
var settings = {}
const storageSupported = typeof(Storage) !== 'undefined'

// Util functions
function convertUnrealToGame([x,y]) {return [x / 100, y / 100]}
function convertGameToUnreal([x,y]) {return [x * 100, y * 100]}
function convertGameToLeaflet([x,y]) {return [-y + (mapSize/2), x + (mapSize/2)]}
function convertLeafletToGame([y,x]) {return [x - mapSize/2, -(y - mapSize/2)]}
function convertUnrealToLeaflet([x,y]) {return convertGameToLeaflet(convertUnrealToGame([x,y]))}
function convertLeafletToUnreal([y,x]) {return convertGameToUnreal(convertLeafletToGame([y,x]))}
function roundNumber(number, digit=0) {return Math.round((number * Math.pow(10, digit)) * (1 + Number.EPSILON)) / Math.pow(10, digit)}

// Center map button
function centerMap() {
    map.panTo([mapSize/2, mapSize/2])
}
center_button.addEventListener('click', centerMap)

// Tabs functionality
function tabCallback() {
    selectTab(this.dataset.system, this.dataset.index)
}

function selectTab(system=0, tab=0) {
    references.tabsystems[system].tabs.forEach((element, index) => {
        if (index == tab) element.classList.add('selected_tab')
        else element.classList.remove('selected_tab')
    })
    references.tabsystems[system].sections.forEach((element, index) => {
        if (index == tab) element.classList.remove('hidden')
        else element.classList.add('hidden')
    })
}

function bindTabs(tabassociations) {
    let system = references['tabsystems'].length
    references.tabsystems[system] = {'tabs': [], 'sections': []}
    tabassociations.forEach(([tab, section], index) => {
        tab.dataset.system = system
        tab.dataset.index = index
        tab.addEventListener('click', tabCallback)
        references.tabsystems[system].tabs.push(tab)
        references.tabsystems[system].sections.push(section)
    })
}

bindTabs([
    [information_infotab, information_info],
    [information_pointstab, information_points],
])
bindTabs([
    [settings_generaltab, settings_general],
    [settings_appearancetab, settings_appearance],
    [settings_advancedtab, settings_advanced],
    [settings_abouttab, settings_about]
])
selectTab(1, 2) // DEBUG

// Image viewer functionality
function previewImage(element) {
    display_image.src = element.src
    display_image.dataset.pointindex = element.dataset.pointindex
    display_image.dataset.imageindex = element.dataset.imageindex
    settings_container.classList.add('hidden')
    display_image.classList.remove('hidden')
    overlay_screen.classList.remove('hidden')
}

function settingsClick() {
    display_image.classList.add('hidden')
    settings_container.classList.remove('hidden')
    overlay_screen.classList.remove('hidden')
}

function overlayClick(event) {
    if (event.target == overlay_screen || event.target == display_image) {
        closeOverlay()
    }
}

function closeOverlay() {
    display_image.src = ''
    display_image.dataset.pointindex = undefined
    display_image.dataset.imageindex = undefined
    overlay_screen.classList.add('hidden')
    display_image.classList.add('hidden')
    settings_container.classList.add('hidden')
}
overlay_screen.addEventListener('click', overlayClick)
settings_menu_button.addEventListener('click', settingsClick)
overlay_close_button.addEventListener('click', closeOverlay)
// settingsClick() // DEBUG

// Hotkeys
document.addEventListener('keydown', (event) => {
    if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        if (!overlay_screen.classList.contains('hidden')) {
            // An overlay is currently being viewed
            if (event.key == 'Escape') {
                closeOverlay()
            } else if (!display_image.classList.contains('hidden')) {
                // An image is currently being viewed
                if (event.key == 'ArrowLeft' || event.key == 'a') {
                    if (!(points[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex) - 1] === undefined)) {
                        display_image.dataset.imageindex = Number(display_image.dataset.imageindex) - 1
                        display_image.src = points[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                    }
                } else if (event.key == 'ArrowRight' || event.key == 'd') {
                    if (!(points[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex) + 1] === undefined)) {
                        display_image.dataset.imageindex = Number(display_image.dataset.imageindex) + 1
                        display_image.src = points[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                    }
                }
            }
        }
    }
})

// Information sidebar menu
var paneVisibility = 0
function toggleSidebarVis() {
    if (paneVisibility == 0) {
        // change page
        map_pane.classList.add('paneexpanded')
        information_pane.classList.add('paneshrunken')
        paneVisibility = 1
        // change buttons
        expanded_horizontal_button.classList.add('hidden')
        expanded_vertical_button.classList.add('hidden')
        collapsed_horizontal_button.classList.remove('hidden')
        collapsed_vertical_button.classList.remove('hidden')
    } else {
        // change page
        map_pane.classList.remove('paneexpanded')
        information_pane.classList.remove('paneshrunken')
        paneVisibility = 0
        // change buttons
        expanded_horizontal_button.classList.remove('hidden')
        expanded_vertical_button.classList.remove('hidden')
        collapsed_horizontal_button.classList.add('hidden')
        collapsed_vertical_button.classList.add('hidden')
    }

}
information_collapse_button.addEventListener('click', toggleSidebarVis)

// Settings
if (storageSupported) {
    if (localStorage.getItem('sitesettings')) {
        // Settings exist
        loadSettings()
    } else {
        // Settings do not exist
        updateStorage()
    }
}

function loadSettings() {
    try {
        settings = JSON.parse(localStorage.getItem('sitesettings'))
    } catch {
        console.log('Error! Settings in Storage failed to parse. Resetting..')
        updateStorage()
    }
}

function updateStorage() {
    console.log('storage update')
    localStorage.setItem('sitesettings', JSON.stringify(settings))
    updateSettingsbox()
}
selectTab(0, 1) // DEBUG

function updateRawSettings() {
    try {
        settings = JSON.parse(option_rawsettingsdata.value)
    } catch {
        // Failure notifier, stop function early
        option_rawsettingsindicator.classList.remove('specialcss2')
        option_rawsettingsindicator.textContent = 'Failure.'
        option_rawsettingsindicator.style.color = 'red'
        void option_rawsettingsindicator.offsetWidth // black magic
        option_rawsettingsindicator.classList.add('specialcss2')
        return
    }
    updateStorage()
    // Success notifier
    option_rawsettingsindicator.classList.remove('specialcss2')
    option_rawsettingsindicator.textContent = 'Success!'
    option_rawsettingsindicator.style.color = 'lime'
    void option_rawsettingsindicator.offsetWidth
    option_rawsettingsindicator.classList.add('specialcss2')
}

function updateSettingsbox() {
    option_rawsettingsdata.value = JSON.stringify(settings, null, 2)
}

option_rawsettingsupdate.addEventListener('click', updateRawSettings)





