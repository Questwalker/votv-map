




function accessInput(element, {edit=false, newvalue}) {
    // Abstracts away different methods for reading/writing various input elements
    switch (element.type) {
        case 'checkbox':
            if (edit) element.checked = newvalue
            return element.checked
        default:
            console.log('error')
            break
    }
}

















