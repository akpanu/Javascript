// Algebra
// 1. slope of a line
function slope(x1, x2, y1, y2) {
  const gradient = (y2 - y1)(x2 - x1)
  return gradient
}

// 2. slope equation
function slope_eqn(m, x, b) {
  const gradient = m * x + b
  return gradient
}

// 3. quadratic equation
function quad_eqn(a, b, c, x) {
  const y = a * x ** 2 + b * x + c
  return y
}

// 4. quadratic formula
function quad_fmla(a, b, c) {
  const x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
  return x
}

// 5. pythagoras theorem
function pythagoras(a, b) {
  const c = Math.sqrt(a ** 2 + b ** 2)
  return c
}

// 6. simple interest
function simple_interest(p, r, t) {
  const si = (p * r * t) / 100
  return si
}

// 7. dustabce
function distance(r, t) {
  const dist = r * t
  return dist
}

// Surface area and volume
// Surface area
// 8. rectangular prism
function sa_rect_prism(l, w, h) {
  const sa = 2 * l * w + 2 * l * h + 2 * w * h
  return sa
}

// 9. right prism
function sa_right_prism(p, h, b) {
  const sa = p * h + 2 * b
  return sa
}

// 10. cylinder
function sa_cylinder(r, h) {
  const sa = 2 * Math.PI * r * h + 2 * Math.PI * r ** 2
  return sa
}

// 11. pyramid
function sa_pyramid(p, s, b) {
  const sa = (1 / 2) * p * s + b
  return sa
}

// 12. cone
function sa_cone(r, s) {
  const sa = Math.PI * r * s + Math.PI * r ** 2
  return sa
}

// 13. sphere
function sa_sphere(r) {
  const sa = 4 * Math.PI * r ** 2
  return sa
}

// Volume
// 14. rectangular prism
function vol_rect_prism(l, w, h) {
  const vol = l * w * h
  return vol
}

// 15. right prism
function vol_right_prism(b, h) {
  const vol = b * h
  return vol
}

// 16. cylinder
function vol_cylinder(r, h) {
  const vol = Math.PI * r ** 2 * h
  return vol
}

// 17. pyramid
function vol_pyramid(b, h) {
  const vol = (1 / 3) * b * h
  return vol
}

// 18. cone
function vol_cone(r, h) {
  const vol = (1 / 3) * Math.PI * r ** 2 * h
  return vol
}

// 19. sphere
function vol_sphere(r) {
  const vol = (4 / 3) * Math.PI * r ** 3
  return vol
}

// 20. circumference of a cirlce
function perimeter_circle(r) {
  const perimeter = 2 * Math.PI * r
  return perimeter
}
