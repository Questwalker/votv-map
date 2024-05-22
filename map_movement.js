const map_container = document.getElementById('map_container');
const map_pane = document.getElementById('map_pane')
const map_image = document.getElementById('map_image')
const map_canvas = document.getElementById('map_canvas')
const ctx = map_canvas.getContext('2d');
var clickedWithoutMovement = false;
var touchscreenClickedAPoint = false;
var drag = {
    x: 0,
    y: 0,
    state: false
};

// mouse
map_pane.addEventListener('mousedown', function(event) {
    clickedWithoutMovement = true
    if (event.target == map_canvas || event.target == map_pane) {
        if (!drag.state && event.button == 0) {
            map_container.classList.add('unselectable')
            drag.x = event.pageX
            drag.y = event.pageY
            drag.state = true
        }
    }
});

document.addEventListener('mousemove', function(event) {
    clickedWithoutMovement = false;
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.pageX - drag.x) + 'px';
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.pageY - drag.y) + 'px';
        drag.x = event.pageX;
        drag.y = event.pageY;
    }
});

document.addEventListener('mouseup', function(event) {
    if (drag.state) {
        drag.state = false;
        if (clickedWithoutMovement && !touchscreenClickedAPoint) {
            information_header.innerHTML = 'Select a Point'
            information_coords.innerHTML = ''
            information_text.innerHTML = 'Click on a point on the map to see some information about what it is and where it\'s located, along with some additional pictures that can help you pinpoint <i>exactly</i> it is or what it looks like.<br><br>Use the <i>Points</i> tab to hide and show certain points on the map.'
            information_images.replaceChildren()
            information_pane.classList.remove('showing_information')
        }
    } else if (clickedWithoutMovement) {
        // show info tab
        information_tab_info.classList.add('tab_selected')
        information_pane_info.classList.remove('hidden')
        // hide points tab
        information_tab_points.classList.remove('tab_selected')
        information_pane_points.classList.add('hidden')
        // set info
        let data = points[event.target.dataset.pointindex]
        information_header.innerHTML = data.name
        information_coords.innerHTML = `x: <u>${data.xPos}</u>, y: <u>${data.yPos}</u>`
        information_text.innerHTML = data.description
        information_images.replaceChildren()
        information_pane.classList.add('showing_information')
        if (data.related_images.length) {
            data.related_images.forEach((link, imageindex) => {
                let element = document.createElement('img');
                element.src = link;
                element.onclick = function() { previewImage(element) };
                element.classList.add('information_image');
                element.dataset.pointindex = event.target.dataset.pointindex
                element.dataset.imageindex = imageindex
                information_images.appendChild(element);
            });
        };
    }
    map_container.classList.remove('unselectable');
    touchscreenClickedAPoint = false;
});

// touchscreen
map_pane.addEventListener('touchstart', function(event) {
    clickedWithoutMovement = true;
    if (event.target == map_canvas || event.target == map_pane) {
        if (!drag.state && event.touches.length == 1) {
            map_container.classList.add('unselectable')
            drag.x = event.touches[0].pageX
            drag.y = event.touches[0].pageY
            drag.state = true
        }
    } else if (event.target.classList.contains('image_label')) {
        touchscreenClickedAPoint = true;
        if (!drag.state && event.touches.length == 1) {
            map_container.classList.add('unselectable')
            drag.x = event.touches[0].pageX
            drag.y = event.touches[0].pageY
            drag.state = true
        }
    }
});

document.addEventListener('touchmove', function(event) {
    clickedWithoutMovement = false;
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.touches[0].pageX - drag.x) + 'px';
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.touches[0].pageY - drag.y) + 'px';
        drag.x = event.touches[0].pageX;
        drag.y = event.touches[0].pageY;
    }
});

document.addEventListener('touchend', function(e) {
    if (drag.state) {
        drag.state = false;
        if (clickedWithoutMovement && !touchscreenClickedAPoint) {
            information_header.innerHTML = 'Select a Point'
            information_coords.innerHTML = ''
            information_text.innerHTML = 'Click on a point on the map to see some information about what it is and where it\'s located, along with some additional pictures that can help you pinpoint <i>exactly</i> it is or what it looks like.<br><br>Use the <i>Points</i> tab to hide and show certain points on the map.'
            information_images.replaceChildren()
            information_pane.classList.remove('showing_information')
        }
    }
    touchscreenClickedAPoint = false;
});







