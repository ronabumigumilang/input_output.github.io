const output = document.querySelector('#output')
const nama = document.querySelector('#nama')
const umur = document.querySelector('#umur')
function tampil() {
    // alert('tombol berfungsi!')
    // output.innerHTML = nama.value
    output.innerHTML = `Halo nama saya ${nama.value} dan umur saya ${umur.value}`
}