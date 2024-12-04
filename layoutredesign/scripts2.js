infor = document.getElementById("infor")
function generateUUID() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16))
}
function button1() {
    localStorage.setItem('sitesettings', '{}')
    updateSettings()
}
function button2() {
    localStorage.clear()
    updateSettings()
}






// function updateSettings(e=undefined) {
//     // console.log('update')
//     console.log()
//     // for (let i = 0; i < localStorage.length; i++) {
//     //     let key = localStorage.key(i)
//     //     console.log(`${key} : ${localStorage.getItem(key)}`)
//     // }
// }

// // // Its good to reload change the settings on the window whenever changes are made anywhere
// // window.addEventListener('storage', updateSettings)


if (typeof(Storage) !== "undefined") {
    // Check if settings storage exists
    if (localStorage.getItem('sitesettings')) {
        console.log(JSON.parse(localStorage.getItem('sitesettings')))
    } else {
        // Settings do not exist
        console.log('new user')
        localStorage.setItem('sitesettings', '{}')
    }
} else {
    // No support
    console.log('Browser does not support Storage')
}











a={
    'satellite_dishes_visibility': false,
    'furfur_totems_visibility': false,
    'metal_tiles_visibility': false,
    'plushes_visibility': false,
    'points_of_interest_visibility': false,
    'miscellaneous_visibility': false,
    'chicken_burgers_visibility': false,
    'transformers_visibility': false,
    'halloween_pumpkins_visibility': false 
}















