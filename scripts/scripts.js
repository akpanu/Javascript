'use strict'

const courseBtn = document.querySelector(`.course`)
const semesterBtn = document.getElementById('semester')
const durationBtn = document.getElementById('duration')
const sumBtn = document.getElementById('sum')
const productBtn = document.getElementById('product')
const divideBtn = document.getElementById('divide')

// course button
courseBtn.onclick = function () {
  //   alert(`Welcome to ADSE-JAVA JAVA Course!😀`)
  alert('Welcome to ADSE-JAVA JAVA Course!😀 - fxn exp')
}
courseBtn.addEventListener(`click`, () => {
  alert('Welcome to ADSE-JAVA JAVA Course!😀 - arrow')
})

// semester button
semesterBtn.onclick = function () {
  alert('We are in semester1!😀 - fxn exp')
}
semesterBtn.addEventListener(`click`, () => {
  alert('We are in semester1!😀 - arrow')
})

// duration button
durationBtn.onclick = function () {
  alert('This is a 2-year course!😀 - fxn exp')
}
durationBtn.addEventListener(`click`, () => {
  alert('This is a 2-year course!😀 - arrow')
})

// sum button
sumBtn.onclick = function () {
  alert(`The sum of 10 and 6 is: ` + (10 + 6) + `-fxn exp`)
}
sumBtn.addEventListener(`click`, () => {
  alert(`The sum of 10 and 6 is: ` + (10 + 6) + `-arrow`)
})

// product button
productBtn.onclick = function () {
  alert(`The product of 5 and 12 is: ` + 5 * 12 + `-fxn exp`)
}
productBtn.addEventListener(`click`, () => {
  alert(`The product of 5 and 12 is: ` + 5 * 12 + `-arrow`)
})

// divide button
divideBtn.click = function () {
  alert(`The 600/12 = ` + 600 / 12 + `-fxn exp`)
}
divideBtn.addEventListener(`click`, () => {
  alert(`The 600/12 = ` + 600 / 12 + `-arrow`)
})
