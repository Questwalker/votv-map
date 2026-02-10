var references = {'icons': {}, 'tabsystems': {}}

// Util functions
function convertUnrealToGame([x,y]) {return [x / 100, y / 100]}
function convertGameToUnreal([x,y]) {return [x * 100, y * 100]}
function convertGameToLeaflet([x,y]) {return [-y + (mapSize/2), x + (mapSize/2)]}
function convertLeafletToGame([y,x]) {return [x - mapSize/2, -(y - mapSize/2)]}
function convertUnrealToLeaflet([x,y]) {return convertGameToLeaflet(convertUnrealToGame([x,y]))}
function convertLeafletToUnreal([y,x]) {return convertGameToUnreal(convertLeafletToGame([y,x]))}
function roundNumber(number, digit=0) {return Math.round((number * Math.pow(10, digit)) * (1 + Number.EPSILON)) / Math.pow(10, digit)}
function sanitizeString(str) {return str.toLowerCase().replace(/[^a-z0-9_\s]/g, '').replace(/\s+/g, '_')}

// Center map button
function centerMap() {
    map.panTo([mapSize/2, mapSize/2])
}
center_button.addEventListener('click', centerMap)

// Tabs functionality
function tabCallback() {
    selectTab(this.dataset.system, this.dataset.index)
}

function selectTab(system, tab=0) {
    references.tabsystems[system].tabs.forEach((element, index) => {
        if (index == tab) element.classList.add('highlighted_element')
        else element.classList.remove('highlighted_element')
    })
    references.tabsystems[system].sections.forEach((element, index) => {
        if (index == tab) element.classList.remove('hidden')
        else element.classList.add('hidden')
    })
}

function bindTabs(system, tabassociations) {
    references.tabsystems[system] = {'tabs': [], 'sections': []}
    tabassociations.forEach(([tab, section], index) => {
        tab.dataset.system = system
        tab.dataset.index = index
        tab.addEventListener('click', tabCallback)
        references.tabsystems[system].tabs.push(tab)
        references.tabsystems[system].sections.push(section)
    })
}

bindTabs('panetabs', [
    [information_infotab, information_info],
    [information_pointstab, information_points],
])
bindTabs('settingstabs', [
    [settings_generaltab, settings_general],
    [settings_appearancetab, settings_appearance],
    [settings_advancedtab, settings_advanced],
    [settings_abouttab, settings_about]
])

// Image viewer functionality
function previewImage(element) {
    display_image.src = element.src
    display_image.dataset.pointindex = element.dataset.pointindex
    display_image.dataset.imageindex = element.dataset.imageindex
    settings_container.classList.add('hidden')
    display_image.classList.remove('hidden')
    overlay_screen.classList.remove('hidden')
}

function openSettings() {
    syncWidgets()
    tempsettings = {}
    display_image.classList.add('hidden')
    settings_container.classList.remove('hidden')
    overlay_screen.classList.remove('hidden')
}

function overlayClick(event) {
    if (event.target == overlay_screen || event.target == display_image) {
        closeOverlay(event)
    }
}

function closeOverlay(event) {
    display_image.src = ''
    display_image.dataset.pointindex = undefined
    display_image.dataset.imageindex = undefined
    overlay_screen.classList.add('hidden')
    display_image.classList.add('hidden')
    settings_container.classList.add('hidden')
    if (event) event.stopPropagation()
}
overlay_screen.addEventListener('click', overlayClick)
settings_menu_button.addEventListener('click', () => {
    selectTab('settingstabs', 0)
    openSettings()
})
overlay_close_button.addEventListener('click', closeOverlay)

// Info Button
info_pane_menu_button.addEventListener('click', () => {
    selectTab('settingstabs', 3)
    openSettings()
})

// Hotkeys
document.addEventListener('keydown', (event) => {
    if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        if (!overlay_screen.classList.contains('hidden')) {
            // An overlay is currently being viewed
            if (event.key == 'Escape') {
                closeOverlay(event)
            } else if (!display_image.classList.contains('hidden')) {
                // An image is currently being viewed
                if (event.key == 'ArrowLeft' || event.key == 'a') {
                    if (!(markers[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex) - 1] === undefined)) {
                        display_image.dataset.imageindex = Number(display_image.dataset.imageindex) - 1
                        display_image.src = markers[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                    }
                } else if (event.key == 'ArrowRight' || event.key == 'd') {
                    if (!(markers[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex) + 1] === undefined)) {
                        display_image.dataset.imageindex = Number(display_image.dataset.imageindex) + 1
                        display_image.src = markers[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
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
registerSetting('marker_popup_labels', false, 'boolean', {category: 'settings_general', widget: {title: 'Marker Popup Labels', description: 'A label that will pop up when clicking a marker'}, restart_required: true})
registerSetting('grayscale_map', false, 'boolean', {category: 'settings_appearance', widget: {title: 'Grayscale Map', description: 'Reduce saturation of the map'}, callback: (settings_id, currentvalue) => {
    if (currentvalue) {
        mapOverlay.getElement().classList.add('grayscale_effect')
    } else {
        mapOverlay.getElement().classList.remove('grayscale_effect')
    }
}})
// registerSetting('show_radar_circle', false, 'boolean', {category: 'settings_appearance', widget: {title: 'Show Radar Range', description: 'Shows a circle that displays the approximate range of the radar'}})
option_rawsettingsupdate.addEventListener('click', updateRawSettingsBox)
syncWidgets()
