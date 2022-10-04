const numConvert = document.getElementById('numConvert')
const convertBtn = document.getElementById('convertBtn')

const lengthConvert = document.getElementById('item1--p')
const volumeConvert = document.getElementById('item2--p')
const massConvert = document.getElementById('item3--p')

//  Converts input number
function convert() {
  convertLength()
  convertVolume()
}

//  Converts numb length
function convertLength() {
let value = numConvert.value
let feet = value / 0.3048
let feetFixed = feet.toFixed(3)
let meter = value / 3.281
let meterFixed = meter.toFixed(3)
lengthConvert.innerHTML = `${value} meters = ${feetFixed} feet | ${value} feet = ${meterFixed} meters`
}

function convertVolume() {
  let value = numConvert.value
  let gallon = value / 3.785
  let gallonFixed = gallon.toFixed(3)
  let liter = value * 3.785
  let literFixed = liter.toFixed(3)
  volumeConvert.innerHTML = `${value} liters = ${gallonFixed} gallons | ${value} gallons = ${literFixed} liters`
}

/*
1 feet = 0.3048 meter
1 meter = 3.281 feet
1 gallon = 3.785 liter
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 pound = 0.453 kg
*/


convertBtn.addEventListener('click', convert)
