const information_pane = document.getElementById('information_pane');
const information_header = document.getElementById('information_header');
const information_coords = document.getElementById('information_coords');
const information_text = document.getElementById('information_text');
const information_images = document.getElementById('information_images');
const display_image = document.getElementById('display_image')
const display_image_container = document.getElementById('display_image_container')
const information_tab_info = document.getElementById('information_tab_info')
const information_tab_points = document.getElementById('information_tab_points')
const information_pane_info = document.getElementById('information_pane_info')
const information_pane_points = document.getElementById('information_pane_points')
const center_button = document.getElementById('center_button')

// ensure that the map centers in the map_pane when the page is loaded
function centerMap() {
    map_container.style.left = Math.floor((map_pane.offsetWidth - map_image.offsetWidth) / 2 - 896).toString() + 'px'
    map_container.style.top = Math.floor((map_pane.offsetHeight - map_image.offsetHeight) / 2 - 896).toString() + 'px'
};
window.addEventListener('load', centerMap, false);

// resizing the browser should re-center the map
var previousSize = 0
function checkBrowserResize() {
    let size = (window.outerWidth - 8) / window.innerWidth;
    if (size != previousSize) {
        previousSize = size
        centerMap()
    };
};
setInterval(checkBrowserResize, 20);

// bind center map button
center_button.addEventListener('click', centerMap)

// section tabs
information_tab_info.addEventListener('click', () => {
    information_tab_info.classList.add('tab_selected')
    information_pane_info.classList.remove('hidden')
    information_tab_points.classList.remove('tab_selected')
    information_pane_points.classList.add('hidden')
})
information_tab_points.addEventListener('click', () => {
    information_tab_points.classList.add('tab_selected')
    information_pane_points.classList.remove('hidden')
    information_tab_info.classList.remove('tab_selected')
    information_pane_info.classList.add('hidden')
})

// image preview code
function previewImage(element) {
    display_image.src = element.src
    display_image.dataset.pointindex = element.dataset.pointindex
    display_image.dataset.imageindex = element.dataset.imageindex
    display_image_container.classList.remove('hidden')
}

display_image_container.addEventListener('click', hidePreview)
function hidePreview() {
    display_image.src = ''
    display_image.dataset.pointindex = undefined
    display_image.dataset.imageindex = undefined
    display_image_container.classList.add('hidden')
}

// going between and closing image when hotkeys are pressed
document.addEventListener('keydown', (event) => {
    if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        // accept hotkeys
        if (!display_image_container.classList.contains('hidden')) {
            // currently previewing an image
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
});


