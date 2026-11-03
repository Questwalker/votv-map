var settings = {registered: {}, settings: {}}
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

/**
Abstracts away different methods for reading/writing various input elements, based on datatype\
Return value could be anything based on what datatype it is accessing
*/
function accessWidget(element, {edit=false, newvalue=undefined}) {
    switch (element.dataset.datatype) {
        case 'checkbox':
            if (edit) element.checked = newvalue
            return element.checked
        default:
            console.warn(`Cannot access element with unknown type ${element.type}`)
            break
    }
}

// Settings menu functions
/**
All settings buttons use this, saves their values into tempsettings
*/
function settingsMenuInput() {
    let currentvalue = accessWidget(this, {})
    if (currentvalue != settings.settings[this.dataset.id]) {
        tempsettings[this.dataset.id] = currentvalue
    } else {
        delete tempsettings[this.dataset.id]
    }
}

/**
Applies all settings in tempsettings
*/
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

/**
Runs if another tab updates the localStorage\
Loops through the new values in localStorage, if it differs from the current settings, we save it into tempsettings and call applySettings
*/
function outsideStorageChange() {
    console.log('Outside update!')
    // Object.assign(tempsettings, JSON.parse(localStorage.getItem('sitesettings')))
    tempsettings = {}
    var newStorageValues = JSON.parse(localStorage.getItem('sitesettings'))
    for (let settings_id in newStorageValues) {
        if (settings.registered[settings_id] != undefined && settings.settings[settings_id] != newStorageValues[settings_id]) {
            tempsettings[settings_id] = newStorageValues[settings_id]
        }
    }
    if (Object.keys(tempsettings).length != 0) {
        applySettings({updateStorage: false})
    }
}
window.addEventListener('storage', outsideStorageChange)

/**
Sets the values of all widgets to their values in settings
*/
function syncWidgets() {
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

/**
Registers a setting to exist
@param settings_id the unique id of the setting.
@param datatype a controlling setting for what the setting will be storing. a custom value that defines how the setting is created and accessed
@param default_value the default value for that setting (note that the datatype will be expected to be known)
@param category its setting menu location
@param widget if defined, creates a settings menu item with the name/desc/etc information contained
@param restart_required if applying the setting requires the page to reload
@param callback a function to call if applysettings occurs (check docs for more info)
@param executeoninit whether to call the callback once the setting is done being registered
*/
function registerSetting(settings_id, datatype, default_value, {category='settings_general', widget=undefined, restart_required=false, callback=undefined, executeoninit=false}) {
    //  Sanity checks
    // Check if setting already registered
    if (settings.registered[settings_id] != undefined) {
        console.log('Setting already registered!')
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
    if (settings.settings[settings_id] == undefined) {
        settings.settings[settings_id] = default_value
    }

    // Generate generic UI
    if (widget && widget != undefined) {
        if (datatype == 'checkbox') {
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
        else {
            console.warn(`Unrecognized setting datatype '${datatype}'`)
        }
    }
    
    // Execute callback on completed creation
    if (callback != undefined && executeoninit) {
        if (settings.registered[settings_id].callback != undefined && typeof settings.registered[settings_id].callback == 'function') {
            settings.registered[settings_id].callback(settings_id, settings.settings[settings_id])
        }
    }
}
