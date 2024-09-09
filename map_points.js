const map_size = 896;
var references = {}
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
    let button = references[id][pointindex]['entry'].querySelector('[data-pointindex]')
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



// creating the points on the map
points.forEach((data, pointindex) => {
    // creates the category tag that the point will be sorted into
    let categoryname = `category_${(data.category != '' && data.category != undefined) ? data.category.toLowerCase().replaceAll(' ','_') : 'miscellaneous'}`

    // Create element. Add classes, add positioning, add pointindex data, prevent dragging, add icon, and add the element to the website
    let pointelement = document.createElement('img');
    pointelement.classList.add('image_label')
    pointelement.classList.add(data.positioning)
    pointelement.style.left = ((((data.xPos + 745) / 1490) * map_size) + 896).toString()+'px';
    pointelement.style.top = ((((data.yPos + 745) / 1490) * map_size) + 896).toString()+'px';
    pointelement.dataset.pointindex = pointindex
    pointelement.ondragstart = () => { return false; }
    pointelement.src = data.icon
    map_container.appendChild(pointelement)





    // generate entries for points tab
    //  category detection
    if (document.getElementById(categoryname) == null) { // if category entry does not exist yet..
        // create containing category element
        let parentelement = document.createElement('div')
        parentelement.id = categoryname

        //
        let headelement = document.createElement('div')
        headelement.classList.add('pointlist_category')

        // hide / show button
        let headelement_visiblitybutton = document.createElement('div')
        headelement_visiblitybutton.classList.add('showhidebutton')
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

lines.forEach((data, lineindex) => {
    ctx.beginPath();
    data['coordinates'].forEach((coords, index) => {
        if (index == 0) {
            ctx.moveTo(((coords[0]+745)/1490)*map_size+896, ((coords[1]+745)/1490)*map_size+896);
        } else {
            ctx.lineTo(((coords[0]+745)/1490)*map_size+896, ((coords[1]+745)/1490)*map_size+896);
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





// hide categories by default
// TODO: make a better way of doing this
hideCategory(references.category_chicken_burgers.categoryhead.querySelector('.showhidebutton'))
hideCategory(references.category_halloween_pumpkins.categoryhead.querySelector('.showhidebutton'))
// console.log(references)
