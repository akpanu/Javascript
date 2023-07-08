// Algebra
// 1. slope of a line
const slope = function (x1, x2, y1, y2) {
  const gradient = (y2 - y1)(x2 - x1)
  return gradient
}

// 2. slope equation
const slope_eqn = function (m, x, b) {
  const gradient = m * x + b
  return gradient
}

// 3. quadratic equation
const quad_eqn = function (a, b, c, x) {
  const y = a * x ** 2 + b * x + c
  return y
}

// 4. quadratic formula
const quad_fmla = function (a, b, c) {
  const x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
  return x
}

// 5. pythagoras theorem
const pythagoras = function (a, b) {
  const c = Math.sqrt(a ** 2 + b ** 2)
  return c
}

// 6. simple interest
const simple_interest = function (p, r, t) {
  const si = (p * r * t) / 100
  return si
}

// 7. dustabce
const distance = function (r, t) {
  const dist = r * t
  return dist
}

// Surface area and volume
// Surface area
// 8. rectangular prism
const sa_rect_prism = function (l, w, h) {
  const sa = 2 * l * w + 2 * l * h + 2 * w * h
  return sa
}

// 9. right prism
const sa_right_prism = function (p, h, b) {
  const sa = p * h + 2 * b
  return sa
}

// 10. cylinder
const sa_cylinder = function (r, h) {
  const sa = 2 * Math.PI * r * h + 2 * Math.PI * r ** 2
  return sa
}

// 11. pyramid
const sa_pyramid = function (p, s, b) {
  const sa = (1 / 2) * p * s + b
  return sa
}

// 12. cone
const sa_cone = function (r, s) {
  const sa = Math.PI * r * s + Math.PI * r ** 2
  return sa
}

// 13. sphere
const sa_sphere = function (r) {
  const sa = 4 * Math.PI * r ** 2
  return sa
}

// Volume
// 14. rectangular prism
const vol_rect_prism = function (l, w, h) {
  const vol = l * w * h
  return vol
}

// 15. right prism
const vol_right_prism = function (b, h) {
  const vol = b * h
  return vol
}

// 16. cylinder
const vol_cylinder = function (r, h) {
  const vol = Math.PI * r ** 2 * h
  return vol
}

// 17. pyramid
const vol_pyramid = function (b, h) {
  const vol = (1 / 3) * b * h
  return vol
}

// 18. cone
const vol_cone = function (r, h) {
  const vol = (1 / 3) * Math.PI * r ** 2 * h
  return vol
}

// 19. sphere
const vol_sphere = function (r) {
  const vol = (4 / 3) * Math.PI * r ** 3
  return vol
}

// 20. circumference of a cirlce
const perimeter_circle = function (r) {
  const perimeter = 2 * Math.PI * r
  return perimeter
}
