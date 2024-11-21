const information_infotab = document.getElementById('information_infotab')
const information_pointstab = document.getElementById('information_pointstab')
const information_info = document.getElementById('information_info')
const information_points = document.getElementById('information_points')

function select_tab(tab) {
    if (tab == 'info') {
        information_infotab.classList.add('selected')
        information_info.classList.remove('hidden')
        information_pointstab.classList.remove('selected')
        information_points.classList.add('hidden')
    } else if (tab == 'points') {
        information_pointstab.classList.add('selected')
        information_points.classList.remove('hidden')
        information_infotab.classList.remove('selected')
        information_info.classList.add('hidden')
    }
}

information_infotab.addEventListener('click', () => {select_tab('info')})
information_pointstab.addEventListener('click', () => {select_tab('points')})

select_tab('points')

function toggle(e) {
    if (e.classList.contains('selected')) {
        e.classList.remove('selected')
    } else {
        e.classList.add('selected')
    }
}

[...document.getElementsByClassName('selectable')].forEach((e) => {
    e.onclick = function() { toggle(this); };
})







