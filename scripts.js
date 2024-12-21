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
    map.panTo([mapSize/2,mapSize/2])
}
center_button.addEventListener('click', centerMap)

// Tabs functionality
function tabClickedEvent() {
    selectTab(this.dataset.index)
}
information_infotab.addEventListener('click', tabClickedEvent)
information_pointstab.addEventListener('click', tabClickedEvent)

function selectTab(tab=0) {
    if (tab == 0) {
        information_infotab.classList.add('selected_tab')
        information_info.classList.remove('hidden')
        information_pointstab.classList.remove('selected_tab')
        information_points.classList.add('hidden')
    } else if (tab == 1) {
        information_pointstab.classList.add('selected_tab')
        information_points.classList.remove('hidden')
        information_infotab.classList.remove('selected_tab')
        information_info.classList.add('hidden')
    }
}

// Image viewer functionality
function previewImage(element) {
    display_image.src = element.src
    display_image.dataset.pointindex = element.dataset.pointindex
    display_image.dataset.imageindex = element.dataset.imageindex
    image_viewer.classList.remove('hidden')
}

function hidePreview() {
    display_image.src = ''
    display_image.dataset.pointindex = undefined
    display_image.dataset.imageindex = undefined
    image_viewer.classList.add('hidden')
}
image_viewer.addEventListener('click', hidePreview)
// display_image.addEventListener('click', (event) => { event.stopPropagation() }) // TODO: Add image zooming

// Hotkeys
document.addEventListener('keydown', (event) => {
    if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        if (!image_viewer.classList.contains('hidden')) {
            // An image is currently being viewed
            if (event.key == 'Escape') {
                hidePreview()
            } else if (event.key == 'ArrowLeft' || event.key == 'a') {
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
})









var paneVisibility = 0
function togglesidebarvis(event) {
    if (paneVisibility == 0) {
        // change page
        map_pane.classList.add('fullflex')
        information_pane.classList.add('zeroflex')
        paneVisibility = 1
        // change buttons
        expanded_horizontal_button.classList.add('hidden')
        expanded_vertical_button.classList.add('hidden')
        collapsed_horizontal_button.classList.remove('hidden')
        collapsed_vertical_button.classList.remove('hidden')
    } else {
        // change page
        map_pane.classList.remove('fullflex')
        information_pane.classList.remove('zeroflex')
        paneVisibility = 0
        // change buttons
        expanded_horizontal_button.classList.remove('hidden')
        expanded_vertical_button.classList.remove('hidden')
        collapsed_horizontal_button.classList.add('hidden')
        collapsed_vertical_button.classList.add('hidden')
    }

}
expanded_horizontal_button.addEventListener('click', togglesidebarvis)
collapsed_horizontal_button.addEventListener('click', togglesidebarvis)
expanded_vertical_button.addEventListener('click', togglesidebarvis)
collapsed_vertical_button.addEventListener('click', togglesidebarvis)






