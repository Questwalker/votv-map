


function hotedit() {
    let settings_id = this.dataset.id
    let currentvalue = accessWidget(this, {})
    if (currentvalue != settings.settings[settings_id]) {
        settings.settings[settings_id] = currentvalue
        let callback = settings.registered[settings_id].callback
        if (typeof callback == 'function') {
            callback(settings_id, currentvalue)
        }
    }
    pushToStorage()
    syncWidgets()
}

dawf21fw12e1.addEventListener('click', hotedit)












