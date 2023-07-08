'use strict'

function product(num1, num2) {
  return num1 * num2
}

// 1. area of circle
const areaCircle = (rad) => Math.PI * rad ** 2

console.log(product(4, 5))
console.log(`Area of circle withh radius 10 is:`, areaCircle(10))

//2 perimeter of a rectangle
const rectPerimeter = (l, b) => 2 * l + b

console.log(`Perimeter of rectangle, length=5, breadth=6`, rectPerimeter(5, 6))

// 3. area of a square
const squareArea = (length) => length ** 2

console.log(`Area of a square with length=5 is`, squareArea(5))

// 4. Einsteins mass equation
const atomEnergy = (mass, velocity) => mass * velocity ** 2

console.log(
  `Energy of an atom with mass= 12kg, velocity=26m/s`,
  atomEnergy(12, 26)
)

// 5. area of a cylinder
const cylinderArea = (radius, height) => Math.PI * radius ** 2 * height

console.log(`Area of a cylinder with radius=6, height=9`, cylinderArea(6, 9))
// 6. equation of mothion1
const motionEquation1 = (initialVel, accl, time) => initialVel + accl * time

console.log(
  `First equation of motion with u=12, a=28, t=5`,
  motionEquation1(12, 28, 5)
)

// 7. equation of motion2
const motionEquation2 = (initialVel, accl, distance) =>
  Math.sqrt(initialVel ** 2 + 2 * accl * distance)

console.log(
  `Second equation of motion with u=12, a=28, d=5`,
  motionEquation1(12, 28, 5)
)

// 8. simple interest
const simpleInterest = (principal, rate, time) =>
  (principal * rate * time) / 100

console.log(
  `Simple interest with p=100, r=12, t=5 is: `,
  simpleInterest(100, 12, 5)
)
// 9. equation of motion3
const motionEquation3 = (u, t, a) => u * t + (1 / 2) * a * t ** 2

console.log(
  `Third equation of motion with u=12, t=10, a=5`,
  motionEquation1(12, 10, 5)
)

// 10 average of a set of numbers
const average = (num) => {
  let sum = 0
  for (const item of num) sum += item
  return sum / num.length
}
console.log(`Average of 1,3,4.5.7 is: `, average([1, 3, 4, 5, 7]))

// Physics, Maths, FM
