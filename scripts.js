var map_container = document.getElementById('map_container');
var information_pane = document.getElementById('information_pane');
var information_header = document.getElementById('information_header');
var information_coords = document.getElementById('information_coords');
var information_text = document.getElementById('information_text');
var information_images = document.getElementById('information_images');
var map_pane = document.getElementById('map_pane')
var map_image = document.getElementById('map_image')
var map_canvas = document.getElementById('map_canvas')
var ctx = map_canvas.getContext('2d');
var display_image = document.getElementById('display_image')
var display_image_container = document.getElementById('display_image_container')
var information_tab_info = document.getElementById('information_tab_info')
var information_tab_points = document.getElementById('information_tab_points')
var information_pane_info = document.getElementById('information_pane_info')
var information_pane_points = document.getElementById('information_pane_points')
var references = {}
var currentSize = 896;
var clickedWithoutMovement = false;
var touchscreenClickedAPoint = false;
var drag = {
    x: 0,
    y: 0,
    state: false
};

// ensure that the map centers in the map_pane when the page is loaded

function centerMap() {
    map_container.style.left = Math.floor((map_pane.offsetWidth - map_image.offsetWidth) / 2).toString() + 'px'
    map_container.style.top = Math.floor((map_pane.offsetHeight - map_image.offsetHeight) / 2).toString() + 'px'
};
window.addEventListener('load', centerMap, false);


// creating the points on the map

points.forEach((data, pointindex) => {
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replace(' ','_') : 'miscellaneous'}`

    let pointelement = document.createElement('img');
    pointelement.classList.add('image_label')
    pointelement.classList.add(data.positioning)
    pointelement.style.left = (((data.xPos+745)/1490)*currentSize).toString()+'px';
    pointelement.style.top = (((data.yPos+745)/1490)*currentSize).toString()+'px';
    pointelement.dataset.pointindex = pointindex
    pointelement.ondragstart = () => { return false; }
    pointelement.src = data.icon
    map_container.appendChild(pointelement)

    // generate entries for points tab
    //  category detection
    if (document.getElementById(categoryname) == null) {
        // doesn't exist, create containing category element
        let parentelement = document.createElement('div')
        parentelement.id = categoryname

        let headelement = document.createElement('div')
        headelement.classList.add('pointlist_category')

        // hide / show button
        let headelement_visiblitybutton = document.createElement('div')
        headelement_visiblitybutton.classList.add('pointercursor')
        headelement_visiblitybutton.classList.add('unselectable')
        headelement_visiblitybutton.setAttribute('onclick', "hideCategory(this)")
        headelement_visiblitybutton.innerText = '[S]'
        headelement.appendChild(headelement_visiblitybutton)

        // text label
        let headelement_label = document.createElement('div')
        headelement_label.classList.add('pointlistentry_name')
        headelement_label.innerText = (data.category != '' && data.category != undefined) ? data.category : 'Miscellaneous'
        headelement.appendChild(headelement_label)

        // collapse / expand button
        let headelement_collapse = document.createElement('div')
        headelement_collapse.classList.add('pointercursor')
        headelement_collapse.classList.add('unselectable')
        headelement_collapse.setAttribute('onclick', "hideEntries(this)")
        headelement_collapse.innerHTML = '&nbsp;-' // collapsed by default #1/2
        headelement.appendChild(headelement_collapse)

        parentelement.appendChild(headelement)
        information_pane_points.appendChild(parentelement)
        
        // create container for the entries
        let entrycontainer = document.createElement('div')
        entrycontainer.classList.add('hidden') // collapsed by default #2/2
        parentelement.appendChild(entrycontainer)

        // store reference
        references[categoryname] = {'categoryhead': headelement, 'entrycontainer': entrycontainer}
    }

    //  add point to respective category
    let entryelement = document.createElement('div')
    entryelement.classList.add('pointlist_entry')

    // hide / show button
    let entryelement_visiblitybutton = document.createElement('div')
    entryelement_visiblitybutton.classList.add('pointercursor')
    entryelement_visiblitybutton.classList.add('unselectable')
    entryelement_visiblitybutton.setAttribute('onclick', "hidePointCommand(this)")
    entryelement_visiblitybutton.dataset.pointindex = pointindex
    entryelement_visiblitybutton.innerText = '[S]'
    entryelement.appendChild(entryelement_visiblitybutton)

    // text label
    let entryelement_label = document.createElement('div')
    entryelement_label.classList.add('pointlistentry_name')
    entryelement_label.innerText = data['name']
    entryelement.appendChild(entryelement_label)

    // store reference, add child
    references[categoryname][pointindex] = {'entry': entryelement, 'point': pointelement}
    references[categoryname]['entrycontainer'].appendChild(entryelement)
})

function hideEntries(element) {
    let entrycontainer = references[element.parentElement.parentElement.id]['entrycontainer']
    if (entrycontainer.classList.contains('hidden')) {
        // unhide
        entrycontainer.classList.remove('hidden')
        element.innerHTML = '&nbsp;▼'
    } else {
        // hide
        entrycontainer.classList.add('hidden')
        element.innerHTML = '&nbsp;-'
    }
}

// var references = {
//     "category_satellite_dishes": {
//         "categoryhead": Object,
//         "entrycontainer": Object,
//         1: {
//             "point": Object,
//             "entry": Object
//         },
//         2: {
//             "point": Object,
//             "entry": Object
//         }
//     }
// }

function hideCategory(element) {
    let id = element.parentElement.parentElement.id
    let force
    if (element.innerText == '[H]') {
        // unhide points
        element.innerText = '[S]'
        element.classList.remove('gray')
        force = 'show'
    } else {
        // hide points
        element.innerText = '[H]'
        element.classList.add('gray')
        force = 'hide'
    }
    Object.keys(references[id]).forEach(key => {
        if (!isNaN(key) && !isNaN(parseFloat(key))) {
            // it is a number
            // TODO: Make this IF statement unnessessary by spliting the pointindexes into a subcategory of references
            hidePoint(id, key, force=force)
        }
    });
}

function hidePointCommand(element) {
    hidePoint(element.parentElement.parentElement.parentElement.id, element.dataset.pointindex)
}

function hidePoint(id, pointindex, force=undefined) {
    let point = references[id][pointindex]['point']
    let button = references[id][pointindex]['entry']//.querySelector('[data-pointindex]')
    if ((point.classList.contains('hidden') || force == 'show') && (force != 'hide')) {
        // unhide point
        button.innerText = '[S]'
        button.classList.remove('gray')
        point.classList.remove('hidden')
    } else {
        // hide point
        button.innerText = '[H]'
        button.classList.add('gray')
        point.classList.add('hidden')
    }
}

lines.forEach((data, lineindex) => {
    ctx.beginPath();
    data['coordinates'].forEach((coords, index) => {
        if (index == 0) {
            ctx.moveTo(((coords[0]+745)/1490)*currentSize, ((coords[1]+745)/1490)*currentSize);
        } else {
            ctx.lineTo(((coords[0]+745)/1490)*currentSize, ((coords[1]+745)/1490)*currentSize);
        }
    })
    if (!(data['fill'] == undefined)) {
        ctx.closePath();
        ctx.fillStyle = data['fill'];
        ctx.fill();
    }
    ctx.lineWidth = data['linethickness'];
    ctx.strokeStyle = data['color'];
    ctx.lineCap = "square";
    ctx.lineJoin = "miter";
    ctx.stroke();
})


// tabs

function tabClicked(element) {
    if (element == information_tab_info) {
        // show info tab
        information_tab_info.classList.add('tab_selected')
        information_pane_info.classList.remove('hidden')
        // hide points tab
        information_tab_points.classList.remove('tab_selected')
        information_pane_points.classList.add('hidden')
    } else if (element == information_tab_points) {
        // show points tab
        information_tab_points.classList.add('tab_selected')
        information_pane_points.classList.remove('hidden')
        // hide info tab
        information_tab_info.classList.remove('tab_selected')
        information_pane_info.classList.add('hidden')
    }
}


// map panning functionality

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
document.addEventListener('mousemove', function(event) {
    clickedWithoutMovement = false;
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.pageX - drag.x) + 'px';
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.pageY - drag.y) + 'px';
        drag.x = event.pageX;
        drag.y = event.pageY;
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


// image preview code

function previewImage(element) {
    display_image.src = element.src
    display_image.dataset.pointindex = element.dataset.pointindex
    display_image.dataset.imageindex = element.dataset.imageindex
    display_image_container.classList.remove('hidden')
}

function hidePreview() {
    display_image.src = ''
    display_image_container.classList.add('hidden')
}

document.addEventListener('keydown', (event) => {
    if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        // accept hotkeys
        if (!display_image_container.classList.contains('hidden')) {
            // currently previewing an image
            if (event.key == 'Escape') {
                display_image_container.classList.add('hidden')
            } else if (event.key == 'ArrowLeft' || event.key == 'a') {
                if (!(points[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex)-1] === undefined)) {
                    display_image.dataset.imageindex = Number(display_image.dataset.imageindex) - 1
                    display_image.src = points[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                }
            } else if (event.key == 'ArrowRight' || event.key == 'd') {
                if (!(points[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex)+1] === undefined)) {
                    display_image.dataset.imageindex = Number(display_image.dataset.imageindex) + 1
                    display_image.src = points[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                }
            }
        }
    }
});

// Resizing the browser should re-center the map
var previousSize = 0
const incrementPoint = () => {
    let size = (window.outerWidth - 8) / window.innerWidth;
    if (size != previousSize) {
        previousSize = size
        centerMap()
    };
};
setInterval(incrementPoint, 20);

// hide categories by default

// TODO: jesus christ make a better way of doing this
hideCategory(references.category_halloween_pumpkins['60'].entry)


