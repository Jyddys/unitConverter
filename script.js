const numConvert = document.getElementById('numConvert')
const convertBtn = document.getElementById('convertBtn')

const lengthConvert = document.getElementById('item1--p')
const volumeConvert = document.getElementById('item2--p')
const massConvert = document.getElementById('item3--p')



function convertLength() {
let value = numConvert.value
let feet = value / 0.3048
let feetFixed = feet.toFixed(3)
let meter = value / 3.281
let meterFixed = meter.toFixed(3)
lengthConvert.innerHTML = `${value} meters = ${feetFixed} feet | ${value} feet = ${meterFixed} meters`
}

/*
1 feet = 0.3048 meter
1 meter = 3.281 feet
1 gallon = 3.785 liter
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 pound = 0.453 kg
*/


convertBtn.addEventListener('click', convertLength)
