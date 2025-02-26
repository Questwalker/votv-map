const colors = { 'reset': '\x1b[0m%s', 'bright': '\x1b[1m%s', 'dim': '\x1b[2m%s', 'underscore': '\x1b[4m%s', 'blink': '\x1b[5m%s', 'reverse': '\x1b[7m%s', 
    'hidden': '\x1b[8m%s', 'black': '\x1b[30m%s', 'red': '\x1b[31m%s', 'green': '\x1b[32m%s', 'yellow': '\x1b[33m%s', 'blue': '\x1b[34m%s', 'magenta': '\x1b[35m%s', 
    'cyan': '\x1b[36m%s', 'white': '\x1b[37m%s' }

function snippet() {
    // Prepare settings
    if (storageSupported) {
        var categoryvisible
        let settingname = `${categoryname}_visible`
        if (settings[settingname] == undefined || typeof settings[settingname] !== 'boolean') {
            // Setting does not exist
            console.log(`writing key ${settingname}`)
            if (categoryname == 'category_halloween_pumpkins' || categoryname == 'category_chicken_burgers' || categoryname == 'category_kerfur_parts') {
                // Hardcoded categories hidden by default
                categoryvisible = false
            } else {
                categoryvisible = true
            }
            settings[settingname] = categoryvisible
        } else {
            categoryvisible = settings[settingname]
        }
    } else {
        categoryvisible = !(categoryname == 'category_halloween_pumpkins' || categoryname == 'category_chicken_burgers' || categoryname == 'category_kerfur_parts')
    }
}
var settings_ = {
    'registered': {
        'category_satellite_dishes_visible': {
            'datatype': 'boolean',
            'requiresRestart': false,
            'widget': Object
        },
        'grayscale_map': {
            'datatype': 'boolean',
            'requiresRestart': false,
            'callback': function(){}
        },
        'marker_popups': {
            'datatype': 'boolean',
            'requiresRestart': true
        }
    },
    'settings': {
        'category_satellite_dishes_visible': true,
        'marker_popups': false
    }
}
var tempsettings_ = {
    'category_satellite_dishes_visible': true,
    'marker_popups': true
}

// ============================================================================================================================================================================
























var settings = {'registered': {}, 'settings': {}}
var tempsettings = {}

function pullToSettings() {
    settings.settings = JSON.parse(localStorage.getItem('sitesettings'))
}

function pushToStorage() {
    localStorage.setItem('sitesettings', JSON.stringify(settings.settings))
}

function newStorage() {
    console.log(colors.green, 'new user')
    localStorage.setItem('sitesettings', '{}')
}

if (localStorage.getItem('sitesettings')) {
    pullToSettings()
} else {
    newStorage()
}

function accessWidget(element, {edit=false, newvalue}) {
    // Abstracts away different methods for reading/writing various input elements
    switch (element.type) {
        case 'checkbox':
            if (edit) element.checked = newvalue
            return element.checked
        default:
            console.log(colors.red, 'cannot access element with unknown type')
            break
    }
}

function settingsMenuInput() {
    switch (this.dataset.datatype) {
        case 'boolean':
            tempsettings[this.dataset.id] = this.checked
            break
        default:
            console.log(colors.red, 'event from element with invalid datatype')
            break
    }
}

function applySettings() {
    let restartNeeded = false
    let callbacks = []
    Object.entries(tempsettings).forEach(([settings_id, value]) => {
        if (value != settings.settings[settings_id]) {
            let registry = settings.registered[settings_id]
            restartNeeded = registry.requiresRestart || restartNeeded
            settings.settings[settings_id] = value
            // If a restart will happen, no need to gather callbacks
            if (!restartNeeded && registry.callback != undefined && typeof registry.callback == 'function') {
                callbacks.push([registry.callback, settings_id, value])
            }
        }
    })
    pushToStorage()
    if (restartNeeded) {
        window.location.reload()
        return
    }
    callbacks.forEach(([callback, settings_id, value]) => {
        callback(settings_id, value)
    })
}

function syncWidgets() {
    // Sets the values of all widgets to their values in settings
    Object.entries(settings.registered).forEach(([settings_id, registry]) => {
        if (registry.widget != undefined) {
            accessWidget(registry.widget, {edit: true, newvalue: settings.settings[settings_id]})
        }
    })
}

function registerSetting(settings_id, default_value, datatype, {category='general', widget=undefined, restart_required=false, callback}) {
    //  Sanity checks
    // Check if setting already registered
    if (settings.registered[settings_id] != undefined) {
        console.log(colors.red, 'setting already registered!')
        return
    }
    // Check that datatype is correct
    if (typeof default_value != datatype) {
        console.log(colors.red, 'settings value mismatch')
        return
    }

    // Register setting
    settings.registered[settings_id] = {}
    settings.registered[settings_id].datatype = datatype
    settings.registered[settings_id].requiresRestart = restart_required
    if (callback != undefined) {
        // console.log(colors.cyan, 'callback included')
        settings.registered[settings_id].callback = callback
    }

    // Add setting
    if (settings.settings[settings_id] == undefined || typeof settings.settings[settings_id] != datatype) {
        settings.settings[settings_id] = default_value
    }

    // Generate generic UI
    if (widget && widget != undefined) {
        if (datatype == 'boolean') {
            let minicontainer = document.createElement('div')
            let checkbox = document.createElement('input')
            checkbox.id = `checkbox_${settings_id}`
            checkbox.dataset.id = settings_id
            checkbox.dataset.datatype = datatype
            settings.registered[settings_id].widget = checkbox
            checkbox.addEventListener('input', settingsMenuInput)
            checkbox.type = 'checkbox'
            minicontainer.appendChild(checkbox)
            let mainlabel = document.createElement('label')
            mainlabel.innerText = (widget.displayname == undefined) ? settings_id : widget.displayname
            mainlabel.htmlFor = `checkbox_${settings_id}`
            mainlabel.classList.add('settings_mainlabel')
            minicontainer.appendChild(mainlabel)
            if (widget.description != undefined) {
                let desclabel = document.createElement('label')
                desclabel.innerText = `${widget.description}${(restart_required ? ' (requires reload)' : '')}`
                desclabel.for = `checkbox_${settings_id}`
                desclabel.classList.add('settings_desclabel')
                desclabel.htmlFor = `checkbox_${settings_id}`
                minicontainer.appendChild(desclabel)
            }
            container.appendChild(minicontainer)
        }
    }
}
registerSetting('category_plushes_visible', false, 'boolean', {callback: (settings_id, value)=>{console.log('HELLO', settings_id, value)}})
registerSetting('category_satellite_dishes_visible', false, 'boolean', {widget: true, callback: (settings_id, value)=>{console.log('HELLO', settings_id, value)}})
registerSetting('asd', true, 'boolean', {widget: {description: 'hello'}, restart_required: true})
syncWidgets()
pushToStorage()







































// function outsideStorageChange() {
//     // load data from localstorage into tempsettings?
//     // then call
//     applySettings()
// }
// window.addEventListener('storage', outsideStorageChange)






















setInterval(function() {
    liveview1.value = JSON.stringify(tempsettings, null, 2)
    liveview2.value = JSON.stringify(settings, null, 2)
    liveview3.value = JSON.stringify(JSON.parse(localStorage.sitesettings), null, 2)
}, 100)
// setTimeout(function() { fancbut.click() }, 100)