var settings = {'registered': {}, 'settings': {}}
var tempsettings = {}

function pullToSettings() {
    settings.settings = JSON.parse(localStorage.getItem('sitesettings'))
}

function pushToStorage() {
    localStorage.setItem('sitesettings', JSON.stringify(settings.settings))
}

function newStorage() {
    console.log('New user')
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
            console.log('Cannot access element with unknown type')
            break
    }
}

function settingsMenuInput() {
    let currentvalue = accessWidget(this, {})
    if (currentvalue != settings.settings[this.dataset.id]) {
        tempsettings[this.dataset.id] = currentvalue
    } else {
        delete tempsettings[this.dataset.id]
    }
}

function applySettings({updateStorage=true}) {
    let restartNeeded = false
    let callbacks = []
    Object.entries(tempsettings).forEach(([settings_id, value]) => {
        if (value != settings.settings[settings_id] && settings.registered[settings_id] != undefined) {
            let registry = settings.registered[settings_id]
            restartNeeded = registry.requiresRestart || restartNeeded
            settings.settings[settings_id] = value
            // If a restart will happen, no need to gather callbacks
            if (!restartNeeded && registry.callback != undefined && typeof registry.callback == 'function') {
                callbacks.push([registry.callback, settings_id, value])
            }
        }
    })
    if (updateStorage) pushToStorage()
    if (restartNeeded) {
        window.location.reload()
        return
    } else {
        syncWidgets()
    }
    // Execute callbacks
    callbacks.forEach(([callback, settings_id, value]) => {
        callback(settings_id, value)
    })
    // Clear temp
    tempsettings = {}
}

function outsideStorageChange() {
    console.log('Outside update!')
    // Object.assign(tempsettings, JSON.parse(localStorage.getItem('sitesettings')))
    tempsettings = {}
    var currentStorageValues = JSON.parse(localStorage.getItem('sitesettings'))
    for (let settings_id in currentStorageValues) {
        if (settings.registered[settings_id] != undefined && currentStorageValues[settings_id] != settings.settings[settings_id]) {
            tempsettings[settings_id] = currentStorageValues[settings_id]
        }
    }
    if (Object.keys(tempsettings).length != 0) {
        applySettings({updateStorage: false})
    }
}
window.addEventListener('storage', outsideStorageChange)

function syncWidgets() {
    // Sets the values of all widgets to their values in settings
    Object.entries(settings.registered).forEach(([settings_id, registry]) => {
        if (registry.widget != undefined) {
            accessWidget(registry.widget, {edit: true, newvalue: settings.settings[settings_id]})
        }
    })
    option_rawsettingsdata.value = JSON.stringify(settings.settings, null, 2)
}

function updateRawSettingsBox() {
    let rawsettings
    try {
        rawsettings = JSON.parse(option_rawsettingsdata.value)
    } catch {
        // Failure notifier, stop function early
        option_rawsettingsindicator.classList.remove('settingsindicator_animation')
        option_rawsettingsindicator.textContent = 'Failure.'
        option_rawsettingsindicator.style.color = 'red'
        void option_rawsettingsindicator.offsetWidth // black magic
        option_rawsettingsindicator.classList.add('settingsindicator_animation')
        return
    }
    console.log(rawsettings)
    settings.settings = rawsettings // Dangerous
    pushToStorage()
    syncWidgets()
    // Success notifier
    option_rawsettingsindicator.classList.remove('settingsindicator_animation')
    option_rawsettingsindicator.textContent = 'Success!'
    option_rawsettingsindicator.style.color = 'lime'
    void option_rawsettingsindicator.offsetWidth
    option_rawsettingsindicator.classList.add('settingsindicator_animation')
}

function registerSetting(settings_id, default_value, datatype, {category='settings_general', widget=undefined, restart_required=false, callback=undefined, executeoninit=false}) {
    //  Sanity checks
    // Check if setting already registered
    if (settings.registered[settings_id] != undefined) {
        console.log('Setting already registered!')
        return
    }
    // Check that datatype is correct
    if (typeof default_value != datatype) {
        console.log('Settings value type mismatch')
        return
    }

    // Register setting
    settings.registered[settings_id] = {}
    settings.registered[settings_id].datatype = datatype
    settings.registered[settings_id].requiresRestart = restart_required
    if (callback != undefined) {
        settings.registered[settings_id].callback = callback
    }

    // Add setting
    if (settings.settings[settings_id] == undefined || typeof settings.settings[settings_id] != datatype) {
        settings.settings[settings_id] = default_value
    }

    // Generate generic UI
    if (widget && widget != undefined) {
        if (datatype == 'boolean') {
            let maincontainer = document.createElement('div')
            let topcontainer = document.createElement('div')
            topcontainer.classList.add('settings_topcontainer')
            let checkbox = document.createElement('input')
            checkbox.id = `settingwidget_${settings_id}`
            checkbox.dataset.id = settings_id
            checkbox.dataset.datatype = datatype
            settings.registered[settings_id].widget = checkbox
            checkbox.addEventListener('input', settingsMenuInput)
            checkbox.type = 'checkbox'
            checkbox.classList.add('settings_checkbox')
            topcontainer.appendChild(checkbox)
            let titlelabel = document.createElement('label')
            titlelabel.innerText = (widget.title == undefined) ? settings_id : widget.title
            titlelabel.htmlFor = `settingwidget_${settings_id}`
            titlelabel.classList.add('settings_mainlabel')
            topcontainer.appendChild(titlelabel)
            maincontainer.appendChild(topcontainer)
            if (widget.description != undefined) {
                let desclabel = document.createElement('label')
                desclabel.innerText = `${widget.description}${(restart_required ? ' (requires reload)' : '')}`
                desclabel.classList.add('settings_desclabel')
                desclabel.htmlFor = `settingwidget_${settings_id}`
                maincontainer.appendChild(desclabel)
            }
            maincontainer.appendChild(document.createElement('br'))
            document.getElementById(category).appendChild(maincontainer)
        }
    }
    
    // Execute callback on completed creation
    if (callback != undefined && executeoninit) {
        if (settings.registered[settings_id].callback != undefined && typeof settings.registered[settings_id].callback == 'function') {
            settings.registered[settings_id].callback(settings_id, settings.settings[settings_id])
        }
    }
}
