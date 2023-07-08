// 1. motion in a straight line
const linear_speed = (u, a, t) => {
  const velocity = u + a * t
  return velocity
}

// 2. vertical distance
const vertical_dis = (u, t, a) => {
  const vert_distance = u * t + (1 / 2) * a * t ** 2
  return vert_distance
}

// 3. linear velocity
const linear_velocity = (u, a, s) => {
  const linear_vel = Math.sqrt(u ** 2 + 2 * a * s)
  return linear_vel
}

// 4. kinetic energy
const kinetic_energy = (m, v) => {
  const ke = (1 / 2) * m * v ** 2
  return ke
}

// 5. work
const work = (force, dist) => {
  const work_done = force * dist
  return work_done
}

// 6. potential energy
const potential_energy = (m, g, h) => {
  const pe = m * g * h
  return pe
}

// 7. power
const power = (work, time) => {
  const pow = work / time
  return pow
}

// 8. radius of gyration
const radius_gyration = (i, m) => {
  const rad_gyration = Math.sqrt(i / m)
  return rad_gyration
}

// 9. gravitational acceleration
const grav_accl = (g, m, r) => {
  const grav_acceleration = (g * m) / r ** 2
  return grav_acceleration
}

// 10. orbital velocity of satelite
const orbital_velocity = (g, m, r) => {
  const orbital_vel = Math.sqrt((g * m) / r)
  return orbital_vel
}

// 11. escape velocity
const escape_velocity = (g, m, r) => {
  const escape_vel = Math.sqrt((2 * (g * m)) / r)
  return escape_vel
}

// 12. hooke's law
const hooke_law = (k, x) => {
  const elasticity = -k * x
  return elasticity
}

// 13. period
const period = (m, k) => {
  const prd = 2 * Math.PI * Math.sqrt(m / k)
  return prd
}

// 14.hydrostatic pressure
const pressure = (p, g, h) => {
  const press = p * g * h
  return press
}

// 15. speed of a wave
const wave_speed = (t, u) => {
  const wave_spd = Math.sqrt(t / u)
  return wave_spd
}
// 16. focal length
const focal_length = (r) => {
  const foc_len = r / 2
  return foc_len
}

// 17. magnification
const magnification = (u, v) => {
  const mag = -v / u
  return mag
}

// 18. refractive index
const ref_index = (c, v) => {
  const rix = c / v
  return rix
}

// 19. power of a lens
const lens_power = (f) => {
  const len_pow = 1 / f
  return len_pow
}

// 20. energh of a photon
const phone_energy = (c, h, w) => {
  const energy = (h * c) / w
  return energy
}
