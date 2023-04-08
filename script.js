const output = document.querySelector('#output')
const nama = document.querySelector('#nama')
const umur = document.querySelector('#umur')
let resetAll = document.querySelector('#resetAllInput')
let inputs = document.querySelectorAll('input')
function tampil() {
    // alert('tombol berfungsi!')
    // output.innerHTML = nama.value
    output.innerHTML = `Halo nama saya ${nama.value} dan umur saya ${umur.value}`
}

function reset() {
    output.innerHTML = '';
}

resetAll.addEventListener('click', () => {
    // inputs.forEach((input) => input.value = '')
    inputs.forEach(function(input) {
        input.value = ''
    })
})