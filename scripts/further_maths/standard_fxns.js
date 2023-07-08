// 1. linear series
function linear_series(a, d, n) {
  const sn = (1 / 2) * n * (2 * a + (n - 1) * d)
  return sn
}

// 2. geometric series
function geo_series(a, n, r) {
  const sn = (a * (1 - r ** n)) / (1 - r)
  return sn
}

// 3. Trigonometric identities 1
function sinA_B(a, b) {
  const sin_ab = Math.sin(a) * Math.cos(b) + Math.cos(a) * Math.sin(b)
  return sin_ab
}

// 4. Trigonometric identities 2
function tanA_B(a, b) {
  const tan_ab = (Math.tan(a) + Math.tan(b)) / (1 + Math.tan(a) * Math.tan(b))
  return tan_ab
}

// 5. Trigonometric identities 3
function cosh2x(x) {
  const cosh_2x = Math.cosh(x ** 2) + Math.sinh(x ** 2)
  return cosh_2x
}

// 6. Trig id 4
function arcsinx(x) {
  const result = 1 / Math.sqrt(1 - x ** 2)
  return result
}

// 7. Trig id 5
function arctanx(x) {
  const result = 1 / (1 + x ** 2)
  return result
}

// 8. Trig id 6
function arcoshx(x) {
  const result = 1 / Math.sqrt(x ** 2 - 1)
  return result
}

// 9. Trig id 7
function summation1(n) {
  const result = (1 / 6) * n * (n + 1) * (2 * n + 1)
  return result
}

// 10. Trig id 8
function summation2(n) {
  const result = (1 / 4) * n ** n * (n + 1) ** 2
  return result
}

// 11. area of equilateral triangle
function area_equ_tri(a) {
  const area = (Math.sqrt(3) / 4) * a ** 2
  return area
}

// 12. perimeter of equilateral triangle
function perimeter_equ_tri(a) {
  const perimeter = 3 * a
  return perimeter
}

// 13.  height of an equilateral triangle
function height_equ_tri(a) {
  const height = (Math.sqrt(3) / 2) * a
  return height
}

// 14. perimeter of a rhombus
function perimeter_rhombus(side) {
  const perimeter = 4 * side
  return perimeter
}

// 15. area of a rhombus
function area_rhombus(d1, d2) {
  const area = (1 / 2) * d1 * d2
  return area
}

// 16. area of a trapezoid
function perimeter_trapezoid(a, b, c, d) {
  const perimeter = a + b + c + d
  return perimeter
}

// 17. area of a trapezoid
function area_trapezoid(a, b, h) {
  const area = (1 / 2) * h * (a + b)
  return area
}

// 18. surface area of cuboid
function sa_cuboid(b, h, l) {
  const sa = 2 * (l * b + b * h + h * l)
  return sa
}

// 19. volume of a cuboid
function vol_cuboid(h, l, w) {
  const vol = h * l * w
  return vol
}

// 20. total surface area of a hemisphere
function sa_hemisphere(r) {
  const sa = 3 * Math.PI * r ** 2
  return sa
}
